import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eaf4fc]">
      <Navbar />
      <main className="flex-grow flex justify-center py-10 px-4">
        <div className="w-full max-w-[54rem] bg-white rounded-xl shadow-sm p-8 md:p-12 mb-10">
          <h1 className="text-[32px] font-bold text-center text-black mb-8">
            About BioPharmGuy
          </h1>
          
          <div className="space-y-6 text-[15px] md:text-[15px] text-gray-800 leading-[1.6] max-w-4xl mx-auto">
            <p>
              BioPharmGuy was created by our President, <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">Adam Wilson</Link>, in 2008 due to a lack of a comprehensive, online directory of biotech companies. Since then, our site has steadily improved in presentation as well as quality. Though initially a job search website, we have become an all-inclusive directory and data provider. We are proud to be transparent in how we obtain our information and clients always know exactly what we will deliver. Customer service is the key to most businesses and ours is no different.
            </p>

            <p>
              What really sets us apart is the fact that we keep our directory updated. It&apos;s simply not acceptable for a data provider to only add information - removing outdated information is equally important. Without removal, a database is almost useless. We add and remove companies almost daily. We no longer prominently advertise the total number of companies in our database (though if you look around, we do mention it). We believe focusing on that number implies we care about how big it is - we don&apos;t. However we suspect our competitors do, which is why they add companies that are not really biotech and also do not take time to consistently remove companies. They want a big number, we want a good number.
            </p>

            <p>
              We are very responsive over email, but always willing to talk over the phone. Most of the successful features we have introduced through the years were requested by website visitors, so if you have suggestions, we would love to hear them.
            </p>

            <p>
              Our site is generally the top result for searches related to lists of biotech companies. As a result, we receive ~48,000 visitors per month and sell data to hundreds of clients every year. These clients include one-person outfits all the way up to huge international corporations. Our main product is our <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">database</Link> full of many data fields for the 12,000+ companies we list. Be sure to check that out to see if it may help in your sales and marketing needs.
            </p>

            <p>
              If you&apos;re interested in getting in front of our audience, we always have <Link href="/promoted-listings" className="text-blue-600 hover:text-blue-800 text-sm">promoted listings</Link> available. We launched a <Link href="/newsletter" className="text-blue-600 hover:text-blue-800 text-sm">weekly newsletter</Link> in January 2020 that is appreciated by our 22,000+ subscribers. We have <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">sponsorship and advertising options</Link> available in that newsletter as well.
            </p>

            <p>
              If you have any questions or suggestions please feel free to send us an email <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">here</Link> or through the <Link href="/contact" className="text-blue-600 hover:text-blue-800 text-sm">contact</Link> submission form.
            </p>

            <p>
              Thanks for visiting.
            </p>
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
