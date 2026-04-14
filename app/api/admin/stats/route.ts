import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { withMorganLogging } from '@/lib/logger';

async function handler(req: Request) {
  try {
    await connectDB();

    // Calculate Total Users
    const totalUsers = await User.countDocuments();
    
    // Calculate New Users (Last 24h)
    const oneDayAgo = new Date();
    oneDayAgo.setHours(oneDayAgo.getHours() - 24);
    const newUsersLast24h = await User.countDocuments({ createdAt: { $gte: oneDayAgo } });

    // Calculate Total Admins
    const totalAdmins = await User.countDocuments({ isAdmin: true });

    // System uptime calculated dynamically
    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (3600*24));
    const uptimeStr = days > 0 ? `${days} days` : `${Math.floor(uptimeSeconds / 3600)}h ${Math.floor((uptimeSeconds % 3600) / 60)}m`;

    const stats = [
      { 
        _id: '1', 
        name: 'Total Accounts', 
        value: totalUsers.toString(), 
        change: 'Live', 
        trend: 'up', 
        icon: 'Users' 
      },
      { 
        _id: '2', 
        name: 'System Admins', 
        value: totalAdmins.toString(), 
        change: 'Restricted', 
        trend: 'up', 
        icon: 'ShieldCheck' 
      },
      { 
        _id: '3', 
        name: 'New Signups (24h)', 
        value: `+${newUsersLast24h}`, 
        change: 'Recent', 
        trend: 'up', 
        icon: 'UserPlus' 
      },
      { 
        _id: '4', 
        name: 'Server Uptime', 
        value: uptimeStr, 
        change: 'Online', 
        trend: 'up', 
        icon: 'Server' 
      }
    ];

    return NextResponse.json({ stats });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export const GET = withMorganLogging(handler);
