import React from 'react';

const Scrollpanel = () => {
  return (
    <div className="w-full bg-[#11071F]">
    <div className="relative flex overflow-x-hidden max-w-[1080px] mx-auto bg-[#11071F] text-white">
      <div className="py-12 animate-marquee whitespace-nowrap">
        <span className="mx-4 text-4xl rounded-lg">React</span>
        <span className="mx-4 text-4xl">Svelte</span>
        <span className="mx-4 text-4xl">Tailwind</span>
        <span className="mx-4 text-4xl">Express.js</span>
        <span className="mx-4 text-4xl">GraphQL</span>
        <span className="mx-4 text-4xl">Koa.js</span>
        <span className="mx-4 text-4xl">HTML</span>
        <span className="mx-4 text-4xl">CSS</span>
      </div>
      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        <span className="mx-4 text-4xl">React</span>
        <span className="mx-4 text-4xl">Svelte</span>
        <span className="mx-4 text-4xl">Tailwind</span>
        <span className="mx-4 text-4xl">Express.js</span>
        <span className="mx-4 text-4xl">GraphQL</span>
        <span className="mx-4 text-4xl">Koa.js</span>
        <span className="mx-4 text-4xl">HTML</span>
        <span className="mx-4 text-4xl">CSS</span>
      </div>
    </div>
    </div>
  );
}

export default Scrollpanel;
