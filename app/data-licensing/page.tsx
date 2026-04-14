import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function DataLicensingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eaf4fc]">
      <Navbar />
      <main className="flex-grow flex justify-center py-10 px-4">
        <div className="w-full max-w-[54rem] bg-white rounded-xl shadow-sm p-8 md:p-12 mb-10">
          <h1 className="text-[32px] font-bold text-center text-black mb-8">
            Licensing Our Data
          </h1>
          
          <div className="space-y-6 text-[15px] md:text-[15px] text-gray-800 leading-[1.6] max-w-4xl mx-auto">
            <p>
              If you are interested in using our data solely within your company, you do not need a license. You can simply purchase it for internal company use <Link href="/purchase-data" className="text-blue-600 hover:underline">here</Link>.
            </p>
            <p>
              However, if you are interested in buying our data to incorporate into your commercially available database or sharing/using it with multiple clients, we do require you purchase a limited license that permits these uses.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4 border-b pb-2">What we offer</h2>
            <p>
              If you have not already familiarized yourself with our data, please make sure to read our Database page and its accompanying Frequently Asked Questions. The data available for license is the same data we currently make available for sale.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4 border-b pb-2">Pricing</h2>
            <p className="mb-4">
              Unlike our standard data sales, pricing is dictated by your organization&apos;s size. Upfront costs for a single year&apos;s license for all available data fields are as follows:
            </p>

            <div className="bg-gray-50 p-6 rounded border border-gray-200 shadow-sm overflow-x-auto mb-6">
              <table className="w-full max-w-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-semibold">0-20 employees</td>
                    <td className="py-2 text-right">$49,000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-semibold">21-200</td>
                    <td className="py-2 text-right">$79,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">201+</td>
                    <td className="py-2 text-right">$99,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              If you are interested in licensing only a part of our database (ie, only some of the data fields, some regions, some business types) this is an option. Roughly speaking, small companies would be charged 15x current standard data sale price, medium-sized 25x and the largest companies 35x. Please contact us to get a price on a data subset.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4 border-b pb-2">Free Updates</h2>
            <p>
              We are constantly updating our database, and we are happy to include free monthly updates for the duration of your license. Monthly update includes:
            </p>

            <ol className="list-decimal pl-6 space-y-1 mt-2">
              <li>Current version of our entire database</li>
              <li>Sheet detailing all data field changes made in the past month. Only companies with changes will be listed. Changed fields will be highlighted in place as well as summarized in an additional cell</li>
              <li>All companies added in the past month, with full details</li>
              <li>All companies/locations removed in the past month</li>
              <li>Explanations for removed companies/locations</li>
              <li>Company name adjustments</li>
            </ol>

            <p className="mt-4">
              Monthly updates are included with standard data licenses. Weekly updates are available for an additional 10% of licensing cost.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4 border-b pb-2">Renewal</h2>
            <p>
              Annual license renewal rates will be 50% of the going rate. Renewal rates may be reduced with multi-year licenses. Please ask about multi-year rates.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4 border-b pb-2">Terms</h2>
            <p>
              The entirety of the terms can be seen in our licensing agreement. If you would like a copy or if you have any questions about licensing our data, please <Link href="#" className="text-blue-600 hover:underline">email us</Link> or submit your inquiry via the <Link href="/contact" className="text-blue-600 hover:underline">Contact Form</Link>.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-500">
              <p>
                *This description is not a guarantee that we will license our data. We reserve the right to license data only to parties of our choosing.
              </p>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
