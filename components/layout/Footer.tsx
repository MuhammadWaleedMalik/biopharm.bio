'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-sm text-gray-600">
          <div className="mb-4">
            <Link href="/privacy-policy" className="text-blue-600 hover:underline mr-4">
              privacy policy
            </Link>
            <Link href="/terms-and-conditions" className="text-blue-600 hover:underline">
              terms and conditions
            </Link>
          </div>
          <p>
            BioPharmGuy is a registered trademark of Wilkinson LLC, Website content © 2026 Wilkinson LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
