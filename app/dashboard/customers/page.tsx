import { Metadata } from 'next';
import { Suspense } from 'react';
import { CustomerSkeleton } from '@/app/ui/skeletons';
import Customers from '@/app/ui/customers/customers';
import { AddCustomer } from '@/app/ui/customers/buttons';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
    return (
      <main>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-1">
          <Suspense fallback={<CustomerSkeleton />}>
            <Customers />
          </Suspense>
        </div>
        <div className="relative rounded-xl overflow-auto pt-6">
          <div className="grid place-items-end">
            <AddCustomer />
          </div>
        </div>
      </main>
    );
}