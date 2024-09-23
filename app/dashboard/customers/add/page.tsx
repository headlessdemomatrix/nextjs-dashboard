import Breadcrumbs from '@/app/ui/customers/breadcrumbs';
import { Metadata } from 'next';
import Form from '@/app/ui/customers/add-form'

export const metadata: Metadata = {
  title: 'Add a new customer',
};

export default async function Page() {

    return (
        <main>
          <Breadcrumbs
          breadcrumbs={[
            { label: 'Customers', href: '/dashboard/customers' },
            {
              label: 'Add New Customer',
              href: '/dashboard/customers/add',
              active: true,
            },
          ]}
        />
        <Form/>
          
      </main>
    );
}