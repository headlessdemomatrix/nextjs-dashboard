import { Metadata } from 'next';
import { Suspense } from 'react';
import { CustomerSkeleton } from '@/app/ui/skeletons';
import Customers from '@/app/ui/customers/customers';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
    return (
      <main>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-1">
          <Suspense fallback={<CustomerSkeleton />}>
              <Customers/>
          </Suspense>
        </div>
      </main>
    );
}