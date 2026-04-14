import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NewsletterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eaf4fc]">
      <Navbar />
      <main className="flex-grow flex justify-center py-10 px-4">
        <div className="w-full max-w-[54rem] bg-white rounded-xl shadow-sm p-8 md:p-12 mb-10">
          <h1 className="text-[32px] font-bold text-center text-black mb-8">
            Subscribe to Stay Updated
          </h1>
          
          <div className="space-y-6 text-[15px] md:text-[15px] text-gray-800 leading-[1.6] max-w-2xl mx-auto text-center">
            <p>
              Our Thursday newsletter is a fun way to stay informed of new BioPharmGuy features/news, interesting biotech industry happenings and some health & science news. Plus a strong dose of sarcasm and snark, so be ready. Check out the archives and subscribe below if you like what you see.
            </p>
            
            <form className="mt-8 max-w-md mx-auto space-y-4 text-left">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#0b4885] text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-8 pt-6 text-[11px] text-gray-500 text-left leading-relaxed">
              <p>
                By submitting this form, you are consenting to receive marketing emails from: BioPharmGuy, PO Box 2218, West Lafayette, IN, 47996, US, https://biopharmguy.com. You can revoke your consent to receive emails at any time by using the SafeUnsubscribe® link, found at the bottom of every email. Emails are serviced by Constant Contact.
              </p>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
