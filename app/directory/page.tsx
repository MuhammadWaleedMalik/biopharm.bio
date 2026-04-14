import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function DirectoryPage() {
  const businessTypes = [
    "AI / Machine Learning", "Antibodies", "APIs", "Bioinformatics", "Biologics", "Biosimilars", "Biostorage", "Cannabis-related",
    "Clinical Research", "Consultants", "Contract Research & Development", "Contract Manufacturing", "Devices - Miscellaneous", "Devices - Surgical", "Devices - Implants", "Devices - Imaging",
    "Devices - Wound Healing", "Devices - Measurement/Monitoring", "Devices - Drug Delivery", "Diagnostics", "Drug Delivery/Formulation", "Equipment & Machines", "Generic Drugs", "Genetics & Genomics",
    "Microbiome/Bacteriome", "Nanotechnology", "Non-Pharmaceutical Biotechnology", "Psychedelics & Related", "Radiopharmaceuticals", "Research Proteins", "RNA, Peptide & Gene Therapy", "Scientific Services",
    "Small Molecule Pharmaceuticals", "Software", "Stem Cells/Cellular Therapy", "Tissue Engineering", "Vaccines", "Viral Technology"
  ];

  const us = [
    "Individual U.S. States", "D.C. Area", "New England", "NJ, NY, PA", "Northwest", "Northern California", "Southern California", "Southwest", "Midwest", "Mountain West", "South", "Other", "Carolinas"
  ];

  const europe = [
    "Austria", "Belgium", "Czech Republic", "Denmark", "Finland", "France", "Germany", "Hungary", "Ireland", "Italy", "Netherlands", "Norway", "Poland", "Portugal", "Spain", "Sweden", "Switzerland", "United Kingdom", "Europe - Other"
  ];

  const additionalLocations = [
    "Africa", "Argentina", "Asia - Other", "Australia", "Brazil", "Canada", "China", "India", "Japan", "Mexico", "Middle East", "New Zealand", "Russia", "Singapore", "South Africa", "South America", "Taiwan"
  ];

  const startups = ["2025", "2024", "2023", "2022", "2021"];
  const defunct = ["Acquired", "Rebranded", "Merged", "Bankrupt", "Full List"];

  return (
    <div className="min-h-screen flex flex-col bg-[#eaf4fc]">
      <Navbar />
      <main className="flex-grow flex justify-center py-6 px-2 lg:px-4">
        <div className="w-full max-w-[1500px] flex flex-col gap-6">
          <div className="text-center text-[15px] font-bold text-black pt-2 pb-2">
            Explore our Biotech Company Database by <Link href="#business" className="text-blue-500 hover:text-blue-700">Business Type</Link>, <Link href="#region" className="text-blue-500 hover:text-blue-700">Region</Link> or <Link href="#startups" className="text-blue-500 hover:text-blue-700">Start-up Year</Link>
          </div>

          <Card title="Business Types" id="business">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-2 gap-y-1.5 text-left text-[11px] xl:text-[12px] text-black">
              {businessTypes.map((item, i) => (
                <div key={i}><Link href="#" className="hover:text-blue-600 block truncate leading-[1.2]">{item}</Link></div>
              ))}
            </div>
          </Card>

          <Card title="United States" id="region">
            <div className="flex flex-wrap justify-center gap-x-4 lg:gap-x-12 xl:gap-x-16 gap-y-2 text-[11px] xl:text-[12px] text-black max-w-[95%] mx-auto">
              {us.map((item, i) => (
                 <Link key={i} href="#" className="hover:text-blue-600 whitespace-nowrap">{item}</Link>
              ))}
            </div>
          </Card>

          <Card title="Europe">
            <div className="flex flex-wrap justify-center gap-x-4 lg:gap-x-12 xl:gap-x-16 gap-y-2 text-[11px] xl:text-[12px] text-black max-w-[95%] mx-auto">
              {europe.map((item, i) => (
                 <Link key={i} href="#" className="hover:text-blue-600 whitespace-nowrap">{item}</Link>
              ))}
            </div>
          </Card>

          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div className="flex-grow">
              <Card title="Additional Locations">
                 <div className="flex flex-wrap justify-center gap-x-4 lg:gap-x-12 xl:gap-x-16 gap-y-2 text-[11px] xl:text-[12px] text-black max-w-[95%] mx-auto">
                  {additionalLocations.map((item, i) => (
                    <Link key={i} href="#" className="hover:text-blue-600 whitespace-nowrap">{item}</Link>
                  ))}
                </div>
              </Card>
            </div>
            <div className="w-full lg:w-[10%] flex-shrink-0">
               <Card title="Map">
                 <div className="flex justify-center text-[11px] xl:text-[12px] text-black pt-1">
                    <Link href="#" className="hover:text-blue-600">Full Map</Link>
                 </div>
               </Card>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-2 w-full lg:w-[60%] mx-auto">
             <div className="flex-1">
                <Card title="Startups by Year" id="startups">
                  <div className="flex justify-between px-4 text-[11px] xl:text-[12px] text-black font-semibold">
                     {startups.map((item, i) => (
                        <Link key={i} href="#" className="hover:text-blue-600">{item}</Link>
                     ))}
                  </div>
                </Card>
             </div>
             <div className="flex-[1.8]">
                <Card title="Defunct">
                  <div className="flex justify-between px-4 text-[11px] xl:text-[12px] text-black font-semibold">
                     {defunct.map((item, i) => (
                        <Link key={i} href="#" className="hover:text-blue-600">{item}</Link>
                     ))}
                  </div>
                </Card>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Card({ title, children, id }: { title: string, children: React.ReactNode, id?: string }) {
  return (
    <div id={id} className="bg-white rounded shadow-sm border border-gray-100 py-6 px-4 md:px-8 text-center w-full">
      <h2 className="text-[22px] font-medium text-black mb-4">{title}</h2>
      <hr className="border-[#333] border-t-[1px] mb-6 w-full mx-auto" style={{ maxWidth: "98%" }} />
      {children}
    </div>
  );
}
