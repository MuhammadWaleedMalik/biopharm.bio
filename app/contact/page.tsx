import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eaf4fc]">
      <Navbar />
      <main className="flex-grow flex justify-center py-10 px-4">
        <div className="w-full max-w-[54rem] bg-white rounded-xl shadow-sm p-8 md:p-12 mb-10">
          <h1 className="text-[32px] font-bold text-center text-black mb-8">
            Contact Us
          </h1>
          
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
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

              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                <textarea 
                  id="comment" 
                  name="comment" 
                  rows={5}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  className="bg-[#0b4885] text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-800 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
