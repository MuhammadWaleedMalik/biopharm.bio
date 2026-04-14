import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function PurchaseDataPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eaf4fc]">
      <Navbar />
      <main className="flex-grow flex justify-center py-10 px-4">
        <div className="w-full max-w-[54rem] bg-white rounded-xl shadow-sm p-8 md:p-12 mb-10">
          <h1 className="text-[32px] font-bold text-center text-black mb-8">
            Purchasing Our Data
          </h1>
          
          <div className="space-y-6 text-[15px] md:text-[15px] text-gray-800 leading-[1.6] max-w-4xl mx-auto">
            <p>
              If you&apos;re interested in working with biotech-related companies, we are pleased to offer our company data for sale. Over 1500 clients have found it useful over the past 10 years, so please read further to see if it may also work for you.
            </p>
            
            <p>
              A typical client of ours would be sales, marketing & business development people trying to sell to or partner with companies we list, but we have also worked with companies in commercial real estate, consulting, investment banking, fundraising, government, publishing and more. Whatever your reason for needing information on biotech companies, our data may be helpful.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4 border-b pb-2">Quick Summary</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>We sell biotech company data - contact information, drug information & more <Link href="#" className="text-blue-600 hover:underline">(go)</Link></li>
              <li>Pick the data pieces you need, only pay for those <Link href="#" className="text-blue-600 hover:underline">(go)</Link></li>
              <li>Database edits done almost every day; data re-confirmed on a rolling basis <Link href="#" className="text-blue-600 hover:underline">(go)</Link></li>
              <li>We deliver an Excel spreadsheet - easily upload to your CRM <Link href="#" className="text-blue-600 hover:underline">(go)</Link></li>
              <li>Fully updated data sets available on demand, semi-annually or quarterly <Link href="#" className="text-blue-600 hover:underline">(go)</Link></li>
              <li>Optional monthly summary of edits made <Link href="#" className="text-blue-600 hover:underline">(go)</Link></li>
              <li>Non-discriminatory pricing - everyone gets the same price</li>
            </ol>

            <h2 className="text-xl font-bold text-black mt-8 mb-4 border-b pb-2 flex justify-between items-end">
              <span>What we offer</span>
              <span className="text-sm font-normal text-blue-600 hover:underline cursor-pointer">(top)</span>
            </h2>
            
            <p>At BioPharmGuy, we publish the following on our site:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>company name</li>
              <li>website link</li>
              <li>city, state, country</li>
              <li>brief description of business</li>
            </ul>

            <p className="mt-4">Additionally, we have the following information on file:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>mailing address</li>
              <li>main phone number</li>
              <li>direct contact email(s) (61%, US HQ companies only; name, job title, email address)</li>
              <li>general email contact (53%)</li>
              <li>email protocol/format (75%)</li>
              <li>lead molecule/drug pipeline information (drug companies only)</li>
              <li>name, clinical stage, indication of lead product</li>
              <li>additional notes on other products</li>
              <li>drug type notations (oncology, cardiovascular, etc)</li>
              <li>year founded</li>
              <li>ownership type (private/public with ticker info)</li>
              <li>number/range of employees</li>
              <li>company Linkedin url</li>
              <li>notations for business type classifications</li>
              <li>notations for region classifications</li>
              <li>notations indicating company headquarters</li>
              <li>notations for county (CA and metro NYC only)</li>
            </ul>

            <p className="mt-4">
              Please see our <Link href="#" className="text-blue-600 hover:underline">Frequently Asked Questions</Link> to learn more about our direct email addresses such as how many we have, how often we check them, where we obtained them, etc.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4 border-b pb-2 flex justify-between items-end">
              <span>How up to date is this data?</span>
              <span className="text-sm font-normal text-blue-600 hover:underline cursor-pointer">(top)</span>
            </h2>
            
            <p>
              This is by far our most common question and rightly so. Keeping this data updated is the single most important job we have. We add and remove companies in our local database almost every day. We usually update the active online database every other Friday. Existing data is checked/confirmed at rolling intervals:
            </p>

            <div className="space-y-4">
              <div>
                <strong>Direct Emails - Names /Job Titles:</strong> Confirmed by looking at company websites and LinkedIn.<br/>
                <span className="text-sm text-gray-600">(Oldest checked December 2025)</span>
              </div>
              
              <div>
                <strong>Direct Emails - Validation:</strong> These are validated using a commercial email validation service.<br/>
                <span className="text-sm text-gray-600">(Last done February 2026)</span>
              </div>
              
              <div>
                <strong>Mailing Address/Phone:</strong> Confirmed by looking at company websites and using search engines.<br/>
                <span className="text-sm text-gray-600">(Oldest checked February 2025)</span>
              </div>
              
              <div>
                <strong>Lead Molecule Info:</strong> Confirmed mostly by checking company websites.<br/>
                <span className="text-sm text-gray-600">(Oldest checked June 2025)</span>
              </div>
              
              <div>
                <strong>Company Websites:</strong> All checked February 2026
              </div>
            </div>

            <h2 className="text-xl font-bold text-black mt-8 mb-4 border-b pb-2 flex justify-between items-end">
              <span>Why we&apos;re better</span>
              <span className="text-sm font-normal text-blue-600 hover:underline cursor-pointer">(top)</span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold">1) We only do biotech</h3>
                <p>We are not a huge data house. All primary database work is done by US-based people with engineering, life science, medical device or pharmacy backgrounds. All companies either work on a biotech/drug/device/life science product or provide a product or service that caters to these companies. We do not list distributors, investors, doctors, nonprofits or pharmacies.</p>
              </div>

              <div>
                <h3 className="font-bold">2) We only use people</h3>
                <p>U.S.-based people find every bit of information in our directory. We use technology to look for potential edits, which are then vetted by people, but primary data work is all human, all the time.</p>
                <p className="mt-2">Using AI and advanced techniques to work with data can be a good idea, but we think using it to gather data is risky at best. There are too many judgement calls, too many differences in formatting and far too many outdated sources out there to trust AI-scraped data.</p>
              </div>

              <div>
                <h3 className="font-bold">3) We deliver an Excel spreadsheet</h3>
                <p>We think simpler is better so we deliver an Excel spreadsheet. Each company location has its own unique ID for easier importation into your CRM. This simple data format should make it easy to use AI on your end.</p>
              </div>

              <div>
                <h3 className="font-bold">4) Non-discriminatory pricing</h3>
                <p>Unlike all of our competitors, we are open about how much our information costs. Our competitors will not offer a price without forcing you to create an account or pick up the phone. They won&apos;t even put a price in an email. The bottom line is they want to know how much money you have before they give you a price. We don&apos;t discriminate. Everyone gets the same price.</p>
              </div>

              <div>
                <h3 className="font-bold">5) Better pricing</h3>
                <p>Our prices are reasonable because our costs are so low. Quality data is what you want, so we spend our time and efforts on that. We have no programmers, no sales people, no project managers, no business development, no VPs, no Directors. We have a President and people who improve our database. That&apos;s it.</p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-black mt-8 mb-4 border-b pb-2 flex justify-between items-end">
              <span>Pricing</span>
              <span className="text-sm font-normal text-blue-600 hover:underline cursor-pointer">(top)</span>
            </h2>
            
            <p className="mb-6">
              Each bit of information has an incremental cost. You can pick and choose whatever information you&apos;d like, but you must purchase the Basic Info and there is a $249 minimum charge. (All prices are USD)
            </p>

            <div className="bg-gray-50 p-6 rounded border border-gray-200 shadow-sm overflow-x-auto mb-6">
              <h3 className="font-bold mb-4">Option 1: Select only the companies you want</h3>
              <table className="w-full min-w-[400px]">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Basic Info (required)</td>
                    <td className="py-1 text-right">$0.47</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Employee Number/Range</td>
                    <td className="py-1 text-right">0.23</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Ownership</td>
                    <td className="py-1 text-right">0.21</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Year Founded</td>
                    <td className="py-1 text-right">0.18</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Mailing Address</td>
                    <td className="py-1 text-right">0.35</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Direct Email(s)</td>
                    <td className="py-1 text-right">0.77</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Main Phone</td>
                    <td className="py-1 text-right">0.21</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Email Format/Protocol</td>
                    <td className="py-1 text-right">0.11</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Linkedin Urls</td>
                    <td className="py-1 text-right">0.19</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Full Lead Molecule/Pipeline</td>
                    <td className="py-1 text-right">0.79</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4 pl-4">-Clinical Stage of Lead Drug</td>
                    <td className="py-1 text-right">0.39</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4 pl-4">-Therapeutic Areas</td>
                    <td className="py-1 text-right">0.39</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 p-6 rounded border border-gray-200 shadow-sm overflow-x-auto mb-6">
              <h3 className="font-bold mb-4">Option 2: All 8,297 companies with U.S. operations</h3>
              <table className="w-full min-w-[400px]">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Basic Info</td>
                    <td className="py-1 text-right">$699</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Employee Number/Range</td>
                    <td className="py-1 text-right">300</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Ownership</td>
                    <td className="py-1 text-right">280</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Year Founded</td>
                    <td className="py-1 text-right">170</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Mailing Address</td>
                    <td className="py-1 text-right">360</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Direct Email(s)</td>
                    <td className="py-1 text-right">830</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Main Phone</td>
                    <td className="py-1 text-right">200</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Email Format/Protocol</td>
                    <td className="py-1 text-right">160</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Linkedin Urls</td>
                    <td className="py-1 text-right">230</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Full Lead Molecule/Pipeline</td>
                    <td className="py-1 text-right">880</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4 pl-4">-Clinical Stage of Lead Drug</td>
                    <td className="py-1 text-right">440</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4 pl-4">-Therapeutic Areas</td>
                    <td className="py-1 text-right">440</td>
                  </tr>
                  <tr className="font-bold">
                    <td className="py-2 pr-4">Everything (15% off)</td>
                    <td className="py-2 text-right">3492</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 p-6 rounded border border-gray-200 shadow-sm overflow-x-auto mb-6">
              <h3 className="font-bold mb-4">Option 3: All 4,009 companies with European operations</h3>
              <table className="w-full min-w-[400px]">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Basic Info</td>
                    <td className="py-1 text-right">$549</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Employee Number/Range</td>
                    <td className="py-1 text-right">180</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Ownership</td>
                    <td className="py-1 text-right">160</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Year Founded</td>
                    <td className="py-1 text-right">150</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Mailing Address</td>
                    <td className="py-1 text-right">250</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Main Phone</td>
                    <td className="py-1 text-right">140</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Email Format/Protocol</td>
                    <td className="py-1 text-right">120</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Linkedin Urls</td>
                    <td className="py-1 text-right">150</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4">Full Lead Molecule/Pipeline</td>
                    <td className="py-1 text-right">480</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4 pl-4">-Clinical Stage of Lead Drug</td>
                    <td className="py-1 text-right">240</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 pr-4 pl-4">-Therapeutic Areas</td>
                    <td className="py-1 text-right">240</td>
                  </tr>
                  <tr className="font-bold">
                    <td className="py-2 pr-4">Everything (15% off)</td>
                    <td className="py-2 text-right">1852</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded text-sm space-y-2">
              <p><strong>Notes:</strong></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>If your Option 1 request exceeds ~1100 companies, our per-company pricing does not make sense and the best price is Option 2.</li>
                <li>If you exceed $2099 on Option 2, the rest of world, including Option 3, is included free.</li>
              </ul>
            </div>

            <p>
              As of January 26, 2026, we list 8,297 companies operating in the United States, so there is a large per-company cost savings when purchasing them all. In addition to the information mentioned above, we always include notations for business type & region for easy sorting. Additionally, we always note whether each location is the company headquarters or not.
            </p>

            <h3 className="text-lg font-bold mt-8 mb-2">Data Field Explanations</h3>
            <ul className="space-y-4">
              <li><strong>Basic Info</strong> - company name, website link, city, state, country, general email, unique location ID number, description of business and business-type notations for sortability.</li>
              <li><strong>General Emails</strong> - info@companyname.com or similar.</li>
              <li><strong>Direct Email/s</strong> - first name, last name, job title, direct email address (We only track these for companies with a U.S. headquarters and we do not track any Direct Email/s for companies with 5000+ employees)</li>
              <li><strong>Ownership</strong> - public or private, ticker/exchange and recent funding info</li>
              <li><strong>Therapeutic Areas</strong> - for drug products only, we list the categories their targeted indications fall under. Full category list shown on our pipeline page.</li>
            </ul>

            <h3 className="text-lg font-bold mt-8 mb-2">What about Canada, Asia, etc.?</h3>
            <p>
              We do have data for the rest of the world which is available free with any full U.S. purchase exceeding $2099. Our coverage outside the U.S. is best in English-speaking countries and Northern Europe. We do not have Direct Emails outside the U.S., but otherwise the information we track is the same worldwide. We currenty list 5,256 companies that operate exclusively outside of the U.S.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4 border-b pb-2 flex justify-between items-end">
              <span>Standard Update Packages</span>
              <span className="text-sm font-normal text-blue-600 hover:underline cursor-pointer">(top)</span>
            </h2>

            <p>
              A standard update is simply our current version of what you originally purchased. These are available for any data set that is not difficult to create. The vast majority of requested data sets are easy to create, but please ask if you may be interested in updates. We have three options:
            </p>

            <div className="space-y-4">
              <p>
                <strong>1. On Demand Update</strong> - For 12 months after your purchase, you may request an update at any time for 10% of your original purchase price. After 12 months, updates are 30% of the going rate. You may buy as many of these updates as you&apos;d like.
              </p>
              <p>
                <strong>2. Semi-annual Subscription</strong> - This package includes an updated file automatically sent every six months. First year pricing is 15% of your original purchase. To receive this special first-year price, we require that you pay at the time of your initial data purchase. Subsequent years will be 40% of the going rate.
              </p>
              <p>
                <strong>3. Quarterly Subscription</strong> - This package includes an updated file automatically sent every three months. First year pricing is 20% of your original purchase. To receive this special first-year price, we require that you pay at the time of your initial data purchase. Subsequent years will be 50% of the going rate.
              </p>
            </div>

            <h2 className="text-xl font-bold text-black mt-8 mb-4 border-b pb-2 flex justify-between items-end">
              <span>Monthly Update Subscription</span>
              <span className="text-sm font-normal text-blue-600 hover:underline cursor-pointer">(top)</span>
            </h2>

            <p>
              Our Monthly Update Subscription is available to clients who purchase all available information. For $1599 billed annually, you will receive a spreadsheet near the beginning of each month consisting of the following six tabs:
            </p>

            <ol className="list-decimal pl-6 space-y-1">
              <li>Current version of our entire database</li>
              <li>All companies added in the past month, with full details</li>
              <li>All data field changes made in the past month</li>
              <li>All companies/locations removed in the past month</li>
              <li>Explanations for companies/locations removed</li>
              <li>Company name adjustments</li>
            </ol>

            <p>
              If you have purchased our full data set and would like a sample monthly update, we are happy to provide your first one free upon request. The Monthly Update Subscription is available only if you have a fully updated data set. So you may subscribe during your initial purchase or after receiving a full update.
            </p>
            
            <h3 className="text-lg font-bold mt-8 mb-2">How to buy</h3>
            <p>
              To buy our data, email us and let us know what information you need. Alternatively you may use our Quote Request Form. Our default invoicing is through PayPal where you may pay with any major credit card or bank transfer. No PayPal account is required.
            </p>
            <p className="mt-2">
              Once payment has cleared (see payments page for processing times) files are usually sent quickly, but please allow one full business day. If there will be a longer delay, we will let you know as soon as possible. Refunds are permitted until we send the data. Since these are digital files, all transactions are final once the data is sent.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4 border-b pb-2 flex justify-between items-end">
              <span>What you will receive</span>
              <span className="text-sm font-normal text-blue-600 hover:underline cursor-pointer">(top)</span>
            </h2>

            <p>
              Here is a sample of how the data will be delivered: <Link href="#" className="text-blue-600 hover:underline">Data Sample</Link>. Be sure to scroll to the right to see all 52 columns of data.
            </p>
            <p>
              Each location has its own entry/ID number and we currently have 8,297 U.S. locations listed. The company email addresses are copied across all locations, so you should not expect to receive a unique one for each location.
            </p>
            <p>
              Although you will usually see the same emails repeated across all locations, you are NOT charged more than once per company regardless of its number of locations. If a company has one location it costs the same as a company that has 13 locations.
            </p>

            <h3 className="text-lg font-bold mt-8 mb-2">Licensing</h3>
            <p>
              Purchasing our data allows you to share it with up to five users within your organization. Please contact us for pricing if you have a need to share with more than five.
            </p>
            <p className="mt-2">
              If you wish to incorporate our data into your existing, commercially available database, or would like to license it for other purposes we are pleased to offer that option. Visit our Licensing page to read more.
            </p>

            <h3 className="text-lg font-bold mt-8 mb-2">Past Clients</h3>
            <p>
              Most of our clients are small companies, but some of the larger organizations we have sold to include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Two of the top financial data providers in America</li>
              <li>Two of the four biggest management consultancies</li>
              <li>Three of the biggest shipping/logistics providers</li>
              <li>One of the top payroll service providers</li>
              <li>Two of the biggest clinical research companies</li>
              <li>Six of the biggest life science research product providers</li>
              <li>Harvard, MIT, Stanford & many other Universities</li>
            </ul>

            <h3 className="text-lg font-bold mt-8 mb-2">Questions?</h3>
            <p>
              If you have questions not addressed by the Frequently Asked Questions, please <Link href="#" className="text-blue-600 hover:underline">email us</Link> or send a message through the <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link> link.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-500">
              <p>
                *By purchasing our copywritten data, you agree not to sell, republish, or otherwise redistribute it. We do our best, but cannot guarantee absolute accuracy of this data. We offer no guarantees that purchasing this data will lead to any sales, business partnerships, etc. Full terms and conditions can be viewed at biopharmguy.com/terms.php
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
