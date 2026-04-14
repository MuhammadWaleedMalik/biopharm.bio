import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function DrugPipelinesPage() {
  const therapeuticAreas = [
    "Abuse/Addiction",
    "Aesthetic Medicine",
    "Allergies",
    "Anesthesia",
    "Biodefense",
    "Bone Diseases",
    "Cardiology/Vascular Diseases",
    "Dermatology",
    "Endocrinology",
    "Genetic Disease",
    "Gerontology",
    "Gastroenterology",
    "Hematology",
    "Hepatology (Liver, Pancreas, Gall Bladder)",
    "Immunology",
    "Infections and Infectious Diseases",
    "Pulmonary/Respiratory Diseases",
    "Musculoskeletal",
    "Neurology",
    "Nephrology",
    "Nutrition and Weight Loss",
    "Obstetrics/Gynecology (Women’s Health)",
    "Oncology",
    "Ophthalmology",
    "Dental and Oral Health",
    "Otolaryngology (Ear, Nose, Throat)",
    "Pediatrics/Neonatology",
    "Pain",
    "Podiatry",
    "Psychiatry/Psychology",
    "Rare Disease",
    "Rheumatology",
    "Toxicology",
    "Urology",
    "Vaccines",
    "Trauma (Emergency, Surgery, Transplantation, Injury)",
    "Sleep"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#eaf4fc]">
      <Navbar />
      <main className="flex-grow flex justify-center py-10 px-4">
        <div className="w-full max-w-[54rem] bg-white rounded-xl shadow-sm p-8 md:p-12 mb-10">
          <h1 className="text-[32px] font-bold text-center text-black mb-8">
            Pharmaceutical Lead Molecule/Pipeline Data
          </h1>
          
          <div className="space-y-6 text-[15px] md:text-[15px] text-gray-800 leading-[1.6] max-w-4xl mx-auto">
            <p>
              At BioPharmGuy we offer Lead Molecule information for the 4,943 drug/therapeutic companies in our database. Combining this information with our currently available contact information may be a very useful tool for your company&apos;s needs.
            </p>

            <p>
              For each therapeutics company in our database, we attempt to find the following information:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>A link to the company pipeline or lead product</li>
              <li>Name of the lead product</li>
              <li>Clinical Stage of lead product</li>
              <li>Indication/s being targeted</li>
              <li>Additional notes on the company, such as how many additional products are under development, who the lead molecule is partnered with, etc.</li>
              <li>Therapeutic Area notations, which indicate all the therapeutic areas (see list futher down page) each company is working on</li>
              <li>We also track the date the information was found or confirmed.</li>
            </ul>

            <p>
              This information is collected primarily from company websites, but also using press releases, the U.S. clinical trials website as well as various other news outlets. We focus on the lead molecule, but include additional pipeline information in our notes section that is equally informational. We do not collect this information for medical device companies.
            </p>

            <p>
              For companies with many commercial products, we simply provide a link to their products page and mention that they have many commercialized products. We do not attempt to pinpoint which is the lead molecule nor do we attempt to list all the indications these companies&apos; products target.
            </p>

            <h2 className="text-xl font-bold text-black mt-10 mb-4 border-b pb-2">Therapeutic Areas</h2>
            <p className="mb-4">
              Our Therapeutic Areas column can be used to pull out all the companies working on specific disease areas. The following disease areas are currently used for classifying companies:
            </p>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {therapeuticAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 flex-shrink-0"></span>
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-xl font-bold text-black mt-10 mb-4 border-b pb-2">How to Purchase</h2>
            <p>
              If you&apos;re interested in purchasing our Lead Molecule information, please refer to our <Link href="/purchase-data" className="text-blue-600 hover:underline">data purchase page</Link>.
            </p>

            <h2 className="text-xl font-bold text-black mt-10 mb-4 border-b pb-2">What you will receive</h2>
            <p>
              Here is a sample of a data set including all available contact information in addition to our Lead Molecule data: <Link href="#" className="text-blue-600 hover:underline">Pipeline Sample</Link>. The Lead Molecule info begins in column 24, so be sure to scroll to the right. We will also send a key for business type and location notations.
            </p>

            <p>
              Files are usually sent quickly, but please allow one full business day. If there will be a longer delay, we will let you know as soon as possible. Refunds are permitted until we send the data. Since these are digital files, all transactions are final once the data is sent.
            </p>

            <h2 className="text-xl font-bold text-black mt-10 mb-4 border-b pb-2">Questions?</h2>
            <p>
              If you have any questions not addressed here, please feel free to <Link href="#" className="text-blue-600 hover:underline">email us</Link> or send a message through the <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link> link.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-500">
              <p>
                *By purchasing our copywritten data, you agree not to sell, republish, or otherwise redistribute it. We do our best, but cannot guarantee absolute accuracy of this data. We offer no guarantees that purchasing this data will lead to any sales, business partnerships, etc. Full terms and conditions can be viewed at <Link href="#" className="text-blue-600 hover:underline">/terms.php</Link>
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
