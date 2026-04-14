'use client';

import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ResourceCardProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

export default function ResourceCard({ icon: Icon, title, children }: ResourceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 h-full">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
        <Icon className="w-5 h-5 text-gray-700" />
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="text-sm text-gray-700 space-y-2">{children}</div>
    </div>
  );
}
