import { NextResponse } from 'next/server';

export function withMorganLogging(handler: (req: Request, ...args: any[]) => Promise<NextResponse>) {
  return async (req: Request, ...args: any[]) => {
    const start = performance.now();
    try {
      const res = await handler(req, ...args);
      const timeMs = performance.now() - start;
      const url = new URL(req.url);
      
      let statusColor = '\x1b[32m';
      if (res.status >= 500) statusColor = '\x1b[31m';
      else if (res.status >= 400) statusColor = '\x1b[33m';
      
      console.log(`\x1b[36m${req.method}\x1b[0m ${url.pathname} ${statusColor}${res.status}\x1b[0m - ${timeMs.toFixed(3)} ms `);
      return res;
    } catch (e) {
      const timeMs = performance.now() - start;
      const url = new URL(req.url);
      console.log(`\x1b[36m${req.method}\x1b[0m ${url.pathname} \x1b[31m500\x1b[0m - ${timeMs.toFixed(3)} ms `);
      throw e;
    }
  };
}
