'use client';

import { Briefcase, Users, Building } from 'lucide-react';
import ResourceCard from '@/components/ui/resource-card';
import Link from 'next/link';

export default function AdditionalResources() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
          Additional Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <ResourceCard icon={Briefcase} title="Entry-Level Job Board">
            <p>
              Exclusively for{' '}
              <Link href="/job-postings" className="text-blue-600 hover:underline">
                job postings
              </Link>{' '}
              requiring one or fewer years of experience
            </p>
          </ResourceCard>

          <ResourceCard icon={Users} title="Career Link Database">
            <p>
              Shadow database consisting only of companies who have a{' '}
              <Link href="/career-page" className="text-blue-600 hover:underline">
                career page
              </Link>
            </p>
          </ResourceCard>

          <ResourceCard icon={Building} title="Bioscience Organization Directory">
            <p>
              Directory of regional{' '}
              <Link href="/biotechnology" className="text-blue-600 hover:underline">
                biotechnology
              </Link>{' '}
              &{' '}
              <Link href="/bioscience-organizations" className="text-blue-600 hover:underline">
                bioscience organizations
              </Link>
            </p>
          </ResourceCard>
        </div>
      </div>
    </section>
  );
}
