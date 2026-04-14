'use client';

import { Database, Mail, Star, Scale, Globe, Megaphone, List } from 'lucide-react';
import ResourceCard from '@/components/ui/resource-card';
import Link from 'next/link';

export default function PrimaryResources() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
          Primary Resources
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ResourceCard icon={Database} title="Full Data Access">
            <p>
              Our biotech company{' '}
              <Link href="/directory" className="text-blue-600 hover:underline">
                directory
              </Link>
              , including decision maker emails, mailing addresses & drug pipelines is available in{' '}
              <Link href="/spreadsheet" className="text-blue-600 hover:underline">
                spreadsheet
              </Link>{' '}
              format. In addition, we offer monthly, quarterly or semiannual{' '}
              <Link href="/updates" className="text-blue-600 hover:underline">
                updates
              </Link>
              .
            </p>
          </ResourceCard>

          <ResourceCard icon={Mail} title="Newsletter">
            <p>
              Stay up on{' '}
              <Link href="/news" className="text-blue-600 hover:underline">
                BioPharmGuy News
              </Link>
              , interesting biotech/health science news and additional items of interest. Join 25,000+ subscribers.
            </p>
          </ResourceCard>

          <ResourceCard icon={Star} title="Premium Listings">
            <ul className="space-y-2">
              <li>
                Multiple <Link href="/options" className="text-blue-600 hover:underline">options</Link> within our directory pages
              </li>
              <li>
                Targeted traffic specifically interested in biotech companies and service providers
              </li>
            </ul>
          </ResourceCard>

          <ResourceCard icon={Scale} title="Data Licensing">
            <p>
              Purchasing a{' '}
              <Link href="/license" className="text-blue-600 hover:underline">
                license
              </Link>{' '}
              allows integration of our data into your commercially available database.
            </p>
          </ResourceCard>

          <ResourceCard icon={Globe} title="World Map">
            <p>
              All the companies we list, on a{' '}
              <Link href="/world-map" className="text-blue-600 hover:underline">
                world map
              </Link>
              .
            </p>
          </ResourceCard>

          <ResourceCard icon={Megaphone} title="Advertising">
            <p>
              Website Banners, Newsletter Sponsorships, and additional newsletter placements{' '}
              <Link href="/advertising" className="text-blue-600 hover:underline">
                are available
              </Link>
              .
            </p>
          </ResourceCard>
        </div>

        <div className="max-w-2xl mx-auto">
          <ResourceCard icon={List} title="Weekly Update">
            <p>
              Each week,{' '}
              <Link href="/subscribers" className="text-blue-600 hover:underline">
                subscribers receive
              </Link>{' '}
              a spreadsheet which lists all companies added and removed in the prior week. Websites, Funding, Employee Number and more included.
            </p>
          </ResourceCard>
        </div>
      </div>
    </section>
  );
}
