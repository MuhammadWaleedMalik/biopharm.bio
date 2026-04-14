import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import Activity from '@/models/Activity';
import bcrypt from 'bcryptjs';
import { getUserFromToken } from '@/lib/auth';
import { withMorganLogging } from '@/lib/logger';

export const GET = withMorganLogging(async (request: Request) => {
  try {
    const currentUser = getUserFromToken();
    if (!currentUser?.isAdmin) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    await connectDB();
    const users = await User.find({}).select('-password').sort({ createdAt: -1 });

    return NextResponse.json({ users }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
});

export const POST = withMorganLogging(async (request: Request) => {
  try {
    const currentUser = getUserFromToken();
    if (!currentUser?.isAdmin) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    await connectDB();
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Make an audit log
    await Activity.create({
      action: 'Admin added new user',
      details: email,
      time: new Date().toLocaleTimeString(),
      icon: 'UserPlus',
      color: 'text-blue-500',
      bg: 'bg-blue-100 dark:bg-blue-900/30'
    });

    return NextResponse.json(
      { message: 'User created', user: { _id: user._id, name: user.name, email: user.email } },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
});
