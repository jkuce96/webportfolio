import React from 'react';

const Scrollpanel = () => {
  return (
    <div className="w-full bg-[#11071F]">
    <div className="relative flex overflow-x-hidden max-w-[1080px] mx-auto bg-black text-white border rounded-lg">
      <div className="py-12 animate-marquee whitespace-nowrap">
        <span className="mx-4 sm:text-4xl text-xl">React.JS</span>
        <span className="mx-4 sm:text-4xl text-xl">Express.JS</span>
        <span className="mx-4 sm:text-4xl text-xl">Tailwind</span>
        <span className="mx-4 sm:text-4xl text-xl">Databáze</span>
        <span className="mx-4 sm:text-4xl text-xl">GraphQL</span>
        <span className="mx-4 sm:text-4xl text-xl">DNS</span>
        <span className="mx-4 sm:text-4xl text-xl">Hosting</span>
        <span className="mx-4 sm:text-4xl text-xl">Authentication</span>
      </div>
      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        <span className="mx-4 sm:text-4xl text-xl">React.JS</span>
        <span className="mx-4 sm:text-4xl text-xl">Express.JS</span>
        <span className="mx-4 sm:text-4xl text-xl">Tailwind</span>
        <span className="mx-4 sm:text-4xl text-xl">Databáze</span>
        <span className="mx-4 sm:text-4xl text-xl">GraphQL</span>
        <span className="mx-4 sm:text-4xl text-xl">DNS</span>
        <span className="mx-4 sm:text-4xl text-xl">Hosting</span>
        <span className="mx-4 sm:text-4xl text-xl">Authentication</span>
      </div>
    </div>
    </div>
  );
}

export default Scrollpanel;
