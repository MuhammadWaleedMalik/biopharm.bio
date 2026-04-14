'use client';

import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Directory', href: '/directory' },
  { name: 'Promoted Listings', href: '/promoted-listings' },
  { name: 'Purchase Data', href: '/purchase-data' },
  { name: 'Drug Pipelines', href: '/drug-pipelines' },
  { name: 'Data Licensing', href: '/data-licensing' },
  { name: 'Weekly Update', href: '/weekly-update' },
  { name: 'Newsletter', href: '/newsletter' },
  { name: 'Contact', href: '/contact' },
];

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((data) => {
        if (data.user) setUser(data.user);
      })
      .catch(() => {});
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
    router.push('/');
    router.refresh();
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      {/* Top Auth Bar */}
      <div className="bg-gray-100 py-1 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-4 text-sm">
          {user ? (
            <>
              <span className="text-gray-600">Welcome, {user.name}</span>
              {user.isAdmin && (
                <Link href="/admin" className="text-blue-600 font-medium hover:underline">
                  Dashboard
                </Link>
              )}
              <button onClick={handleLogout} className="text-gray-600 hover:text-red-600 transition-colors">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-600 hover:text-blue-600 transition-colors">
                Login
              </Link>
              <Link href="/signup" className="text-blue-600 font-medium hover:underline">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center py-4">
          <Link href="/" className="mb-4">
            <Image

              src="https://biopharmguy.com/images/biopharmguy.png"
              alt="BioPharmGuy"
              width={400}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
