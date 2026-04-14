import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Activity from '@/models/Activity';
import { withMorganLogging } from '@/lib/logger';

async function handler(req: Request) {
  try {
    await connectDB();

    const activities = await Activity.find({}).sort({ createdAt: -1 }).limit(10); // Fetch latest 10
    return NextResponse.json({ activities });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export const GET = withMorganLogging(handler);
