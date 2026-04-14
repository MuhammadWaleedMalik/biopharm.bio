import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function PromotedListingsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eaf4fc]">
      <Navbar />
      <main className="flex-grow flex justify-center py-10 px-4">
        <div className="w-full max-w-[54rem] bg-white rounded-xl shadow-sm p-8 md:p-12 mb-10">
          <h1 className="text-[32px] font-bold text-center text-black mb-8">
            Promoted Listings / Advertising
          </h1>
          
          <div className="space-y-6 text-[15px] md:text-[15px] text-gray-800 leading-[1.6] max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-black mt-8 mb-4 border-b pb-2">Make your company stand out at BioPharmGuy</h2>
            
            <p>
              At BioPharmGuy we pride ourselves on being able to maintain a high-quality database of both large and small biotech companies. To help promote your company, we offer various types of Sponsored Listings. We have a highly targeted audience of 46,000 unique monthly visitors, so being featured more prominently on BioPharmGuy will almost certainly improve your referral traffic.
            </p>

            <p>
              Our clients are finding these Sponsored Listings to be a cost-effective way to drive more high-quality traffic to their sites as evidenced by the fact that almost all of our Sponsored Listings clients have opted to extend their initial sponsorship period multiple times.
            </p>

            <p>
              As we always say, check your Analytics! BioPharmGuy is likely one of your top referrers already - promoting your listing will only improve those numbers.
            </p>

            <p>
              We also have some more traditional advertising options available in our weekly newsletter and on our website. <Link href="#" className="text-blue-600 hover:underline">(go)</Link>
            </p>

            <h2 className="text-xl font-bold text-black mt-10 mb-4 border-b pb-2">Listing Types</h2>

            <div>
              <h3 className="font-bold text-black text-lg">Premium Listing</h3>
              <p className="mt-2">
                By opting for a Premium Listing, your company will appear near the top of all, or at least many, of the pages on which you already appear. It will also feature your logo in place of your written company name and the listing will have a light blue background to draw the visitor&apos;s attention. Finally, the 100 character limit on your company description will be expanded to 150 to allow your company&apos;s name to still appear on the page as text in addition to the logo.
              </p>
              <p className="mt-2">
                The pricing for this type of listing is based on up to five company locations. If your company has more than five locations, you may have to choose which five locations will be assigned the Premium Listing. Your Premium Listing will appear on all the pages organized by business type where your company currently appears.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-black text-lg">Headline Listing</h3>
              <p className="mt-2">
                The Headline Listing is similar to the Premium Listing, in that you still get upgraded to a logo and a highlighted background. The main difference is the Headline Listing is always the first entry on the list, so only one may be active on any page at any given time. The background will be a gold color vs. the light blue of the Premium Listing.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-black text-lg">Premium Ad</h3>
              <p className="mt-2">
                A Premium Ad is essentially a Premium Listing for companies that are not eligible to appear in our database. When opting for a Premium Ad, you will be able to select one business type, one region & one state where you would like to appear.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-black text-lg">Logo Listing</h3>
              <p className="mt-2">
                In place of your company name, your company logo, in full color will be shown. This logo will appear everywhere your company name currently appears on BioPharmGuy. Logo Listings can be combined with a Description Upgrade. The 100 character limit on your company description will be expanded to 150 to allow your company&apos;s name to still appear on the page as text in addition to the logo.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-black text-lg">Description Upgrade</h3>
              <p className="mt-2">
                Our typical business descriptions are limited to 100 characters. This upgrade extends your limit to 300 characters. (All descriptions are subject to our approval). The Description Upgrade is for up to five locations. Description Upgrades can be combined with any promoted listing.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-black text-lg">Bonus Link</h3>
              <p className="mt-2">
                In our directory, your company name or logo will link to your home page. Our descriptions are plain text. If you would like to add a link within your company&apos;s description, we consider that a Bonus Link. A Bonus Link may be combined with any promoted listing.
              </p>
            </div>

            <h2 className="text-xl font-bold text-black mt-10 mb-4 border-b pb-2">Advertising Options</h2>

            <div>
              <h3 className="font-bold text-black text-lg">Website Banner</h3>
              <p className="mt-2">
                This banner ad slot appears above all of our directory listings. Static media only. (Available April 2026)
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-black text-lg">Newsletter Sponsor</h3>
              <p className="mt-2">
                Our Weekly Newsletter appeals to people from all across the spectrum of biotech and related fields/companies. The Sponsorship appears at the top of our newsletter and consists of a logo plus a 500-character description with links. We have 25,396 subscribers as of January 26, 2026 with growth of about 63 per week. Roughly 42% of subscribers open the email, and 94% of those do so on a desktop. (Available March 26, 2026)
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-black text-lg">Newsletter Featured Company</h3>
              <p className="mt-2">
                This featured company/banner ad slot is located midway down our newsletter. It is limited to one per week, so yours will be the only one on display. (Available April 16, 2026)
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-black text-lg">Newsletter Featured Event</h3>
              <p className="mt-2">
                This slot is located towards the end of our newsletter. Again, this is limited to one per week. Submit a paragraph explaining your event and a picture if applicable. (Available Now)
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-black text-lg">Newsletter Job Posting</h3>
              <p className="mt-2">
                Near the bottom of the newsletter, we offer a Featured Job slot. This is also limited to one per week. (Available Now)
              </p>
            </div>

            <h2 className="text-xl font-bold text-black mt-10 mb-4 border-b pb-2">Pricing</h2>
            <p className="italic text-sm mb-4">Prices are subject to change at any time. All prices in USD.</p>
            
            <p className="font-medium mb-4">Monthly rates unless otherwise noted:</p>

            <div className="bg-gray-50 p-6 rounded border border-gray-200 shadow-sm overflow-x-auto">
              <table className="w-full min-w-[400px]">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">Premium Listing</td>
                    <td className="py-2 font-medium text-right">$259</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-2 pr-4">Headline Listing (per page)</td>
                    <td className="py-2 font-medium text-right">499</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">Premium Ad</td>
                    <td className="py-2 font-medium text-right">249</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-2 pr-4">Logo Listing</td>
                    <td className="py-2 font-medium text-right">99</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">Description Upgrade</td>
                    <td className="py-2 font-medium text-right">69</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-2 pr-4">Bonus Link</td>
                    <td className="py-2 font-medium text-right">49</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">Website Banner (Weekly)</td>
                    <td className="py-2 font-medium text-right">399</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-2 pr-4">Newsletter Sponsor (Weekly)</td>
                    <td className="py-2 font-medium text-right">1530</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">Newsletter Featured Company (Weekly)</td>
                    <td className="py-2 font-medium text-right">543</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-2 pr-4">Newsletter Featured Event (Weekly)</td>
                    <td className="py-2 font-medium text-right">199</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Newsletter Job (Weekly)</td>
                    <td className="py-2 font-medium text-right">199</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 space-y-4">
              <p>
                Full Newsletter Availability/Pricing can be downloaded here: <Link href="#" className="text-blue-600 hover:underline">Newsletter Availability</Link>.
              </p>

              <p>
                Here is a small sample page to demonstrate how some of our Sponsored Listings will look: <Link href="#" className="text-blue-600 hover:underline">Examples of sponsored listings</Link>.
              </p>

              <p>
                On Promoted Listings, we offer a discount of 15% on 3+ months, 20% on 12 months, 25% on 24 months. We also offer an additional multi-listing discount of 5% for agencies running multiple Premium Listings concurrently.
              </p>

              <p>
                If you have any questions or are interested in sponsoring your company&apos;s listing, please <Link href="#" className="text-blue-600 hover:underline">email us</Link> or send a message through the <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link> link. Acceptable forms of payment can be seen at our <Link href="#" className="text-blue-600 hover:underline">payments page</Link>.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center text-[11px] text-[#000080] flex flex-wrap justify-center gap-1">
            <Link href="#" className="hover:underline">privacy policy</Link> / 
            <Link href="#" className="hover:underline">terms and conditions</Link>
            <span className="text-black ml-1"> BioPharmGuy is a registered trademark of Wilsonian LLC. Website content © 2025 Wilsonian LLC</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
