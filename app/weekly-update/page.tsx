import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function WeeklyUpdatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eaf4fc]">
      <Navbar />
      <main className="flex-grow flex justify-center py-10 px-4">
        <div className="w-full max-w-[54rem] bg-white rounded-xl shadow-sm p-8 md:p-12 mb-10">
          <h1 className="text-[32px] font-bold text-center text-black mb-8">
            Weekly Company Update Subscription
          </h1>
          
          <div className="space-y-6 text-[15px] md:text-[15px] text-gray-800 leading-[1.6] max-w-4xl mx-auto">
            <p>
              Throughout the 15 years we have been maintaining this directory, our visitors have consistently told us how much value we provide, specifically in the sales, marketing and business development world.
            </p>
            <p>
              Many visitors are content to look around BioPharmGuy periodically to see what companies we have added since they last visited. If that&apos;s you, great.
            </p>
            <p>
              If, however, you would prefer to be notified of and presented with all the new companies we add each week, we offer a subscription you may find useful.
            </p>
            <p>
              Each week, you will be sent a unique spreadsheet which lists all the companies we have added and removed in the week prior. Deliverable info will include not only the same information you currently see on the BioPharmGuy website:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Company Name</li>
              <li>Website</li>
              <li>City</li>
              <li>State</li>
              <li>Business Description</li>
              <li>Category Notations</li>
            </ul>

            <p>but also:</p>
            
            <ul className="list-disc pl-6 space-y-1">
              <li>Ownership</li>
              <li>Funding</li>
              <li>Mailing Address</li>
              <li>Main Phone</li>
              <li>Employee Number/Range</li>
              <li>Year Founded</li>
            </ul>

            <p>
              Please take a look at an example of the file all subscribers receive.
            </p>

            <p className="font-bold mt-8">We offer monthly or annual subscriptions.</p>

            <div className="bg-gray-50 p-6 rounded border border-gray-200 shadow-sm overflow-x-auto mb-6">
              <table className="w-full max-w-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-semibold">Monthly</td>
                    <td className="py-2 text-right">$39</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Annual</td>
                    <td className="py-2 text-right">$399</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-8">
              If you have any questions, please <Link href="#" className="text-blue-600 hover:underline">email us</Link> or send a message through the <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link> link.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-500 space-y-2">
              <p>
                *We do take weeks off and there will be some weeks where not many additions and removals will happen. Rest assured, if we don&apos;t add them one week, we will another.
              </p>
              <p>
                **If you are a subscriber and need to cancel, please send us an email. Oddly, Stripe does not have the technology to handle a cancellation. Your cancellation will be effective from when you sent the email.
              </p>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
