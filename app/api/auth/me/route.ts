import { NextResponse } from 'next/server';
import { getUserFromToken } from '@/lib/auth';
import { withMorganLogging } from '@/lib/logger';

export const GET = withMorganLogging(async (request: Request) => {
  const user = getUserFromToken();
  if (!user) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({ user }, { status: 200 });
});

