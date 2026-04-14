import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import Activity from '@/models/Activity';
import bcrypt from 'bcryptjs';
import { withMorganLogging } from '@/lib/logger';

export const POST = withMorganLogging(async (request: Request) => {
  try {
    await connectDB();
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Please provide email and password.' },
        { status: 400 }
      );
    }

    // Admin override
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@gmail.com';
    const adminPassword = process.env.ADMIN_PASSWORD || '12345';

    if (email === adminEmail && password === adminPassword) {
      const token = jwt.sign(
        { id: 'admin-id', email, isAdmin: true, name: 'Admin' },
        process.env.JWT_SECRET || 'supersecretjwtkey12345',
        { expiresIn: '1d' }
      );

      const response = NextResponse.json(
        { message: 'Login successful', user: { email, isAdmin: true, name: 'Admin' } },
        { status: 200 }
      );

      response.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
      });

      // Login Log
      await Activity.create({
        action: 'Admin login successful',
        details: adminEmail,
        time: new Date().toLocaleTimeString(),
        icon: 'ShieldCheck',
        color: 'text-indigo-500',
        bg: 'bg-indigo-100 dark:bg-indigo-900/30'
      });

      return response;
    }

    // Normal user login
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials.' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials.' }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name, isAdmin: false },
      process.env.JWT_SECRET || 'supersecretjwtkey12345',
      { expiresIn: '1d' }
    );

    const response = NextResponse.json(
      { message: 'Login successful', user: { _id: user._id, name: user.name, email: user.email, isAdmin: false } },
      { status: 200 }
    );

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });

    // Login Log
    await Activity.create({
      action: 'User login successful',
      details: user.email,
      time: new Date().toLocaleTimeString(),
      icon: 'Activity',
      color: 'text-green-500',
      bg: 'bg-green-100 dark:bg-green-900/30'
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
});

