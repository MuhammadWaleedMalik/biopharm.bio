import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import Activity from '@/models/Activity';
import { getUserFromToken } from '@/lib/auth';
import { withMorganLogging } from '@/lib/logger';

export const DELETE = withMorganLogging(async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const currentUser = getUserFromToken();
    if (!currentUser?.isAdmin) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    await connectDB();
    const { id } = params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Audit log
    await Activity.create({
      action: 'Admin deleted user',
      details: user.email,
      time: new Date().toLocaleTimeString(),
      icon: 'ShieldCheck',
      color: 'text-red-500',
      bg: 'bg-red-100 dark:bg-red-900/30'
    });

    return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
});

