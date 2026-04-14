import { NextResponse } from 'next/server';
import { withMorganLogging } from '@/lib/logger';

export const POST = withMorganLogging(async (request: Request) => {
  const response = NextResponse.json(
    { message: 'Logged out successfully' },
    { status: 200 }
  );

  response.cookies.set('token', '', {
    httpOnly: true,
    expires: new Date(0),
    path: '/',
  });

  return response;
});
