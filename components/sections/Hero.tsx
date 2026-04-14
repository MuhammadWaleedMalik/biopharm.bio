'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full">
      <div className="w-full min-h-[300px] max-h-[500px] h-[50vh] relative bg-[#0b4885]">
        <img
          src="https://biopharmguy.com/images/hero.jpg"
          alt="Premier Resource for Worldwide Biotech Company Data"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
