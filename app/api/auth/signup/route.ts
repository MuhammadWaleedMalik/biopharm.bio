import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import Activity from '@/models/Activity';
import bcrypt from 'bcryptjs';
import { withMorganLogging } from '@/lib/logger';

export const POST = withMorganLogging(async (request: Request) => {
  try {
    await connectDB();
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Please provide name, email, and password.' },
        { status: 400 }
      );
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return NextResponse.json(
        { message: 'User already exists with that email.' },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Audit log
    await Activity.create({
      action: 'New user registered',
      details: email,
      time: new Date().toLocaleTimeString(),
      icon: 'UserPlus',
      color: 'text-blue-500',
      bg: 'bg-blue-100 dark:bg-blue-900/30'
    });

    return NextResponse.json(
      {
        message: 'User created successfully',
        user: { _id: user._id, name: user.name, email: user.email },
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
});
