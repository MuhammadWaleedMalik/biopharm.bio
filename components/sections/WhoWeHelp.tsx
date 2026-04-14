'use client';

import { Megaphone, Monitor, Building2, TrendingUp, Briefcase, Chrome as Home } from 'lucide-react';
import ServiceCard from '@/components/ui/service-card';
import Link from 'next/link';

export default function WhoWeHelp() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
          Who We Help
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard icon={Megaphone} title="Sales & Mktg: Outbound">
            <ul className="space-y-2">
              <li>
                Full <Link href="/directory" className="text-blue-600 hover:underline">directory</Link> with 14,000+ potential biotech-related clients
              </li>
              <li>
                Email, phone and mailing <Link href="/contacts" className="text-blue-600 hover:underline">contacts</Link>
              </li>
              <li>
                Company <Link href="/map" className="text-blue-600 hover:underline">map</Link> to help in-person sales efforts
              </li>
            </ul>
          </ServiceCard>

          <ServiceCard icon={Monitor} title="Sales & Mktg: Web Presence">
            <ul className="space-y-2">
              <li>
                <Link href="/promoted-listings" className="text-blue-600 hover:underline">Promoted Listings</Link> to ensure your company stands out in our directory
              </li>
            </ul>
          </ServiceCard>

          <ServiceCard icon={Building2} title="CROs & Service Providers">
            <ul className="space-y-2">
              <li>
                <Link href="/directory" className="text-blue-600 hover:underline">Directory</Link> of 14,000+ target companies around the world
              </li>
              <li>
                Company <Link href="/contact-info" className="text-blue-600 hover:underline">contact info</Link> for your sales team
              </li>
            </ul>
          </ServiceCard>

          <ServiceCard icon={TrendingUp} title="Investors">
            <ul className="space-y-2">
              <li>
                Ownership & <Link href="/funding" className="text-blue-600 hover:underline">funding</Link>
              </li>
              <li>
                Drug <Link href="/pipeline" className="text-blue-600 hover:underline">pipeline</Link> info
              </li>
              <li>
                C-level <Link href="/contacts" className="text-blue-600 hover:underline">contacts</Link>
              </li>
            </ul>
          </ServiceCard>

          <ServiceCard icon={Briefcase} title="Job Seekers">
            <ul className="space-y-2">
              <li>
                Shadow database linking to <Link href="/career-pages" className="text-blue-600 hover:underline">career pages</Link>
              </li>
              <li>
                Entry-level <Link href="/job-board" className="text-blue-600 hover:underline">job board</Link>
              </li>
              <li>
                Thousands of potential <Link href="/employers" className="text-blue-600 hover:underline">employers</Link> listed in our directory
              </li>
            </ul>
          </ServiceCard>

          <ServiceCard icon={Home} title="Real Estate">
            <ul className="space-y-2">
              <li>
                Find tenants for specialized spaces
              </li>
            </ul>
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}
