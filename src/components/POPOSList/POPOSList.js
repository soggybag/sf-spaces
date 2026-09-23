// src/POPOSList.js

import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import data from '../../sfpopos-data.json';
import './POPOSLIST.module.css';

function POPOSList() {
  const spaces = data.map(({ title, address, images, hours }, i) => {
    return (
      <POPOSSpace
        id={i}
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
        spaceIndex={i}
      />
    )
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="border-2 border-amber-400 rounded-lg bg-slate-900 px-8 py-12 text-center">
        <h1 className="text-5xl sm:text-6xl font-black text-amber-400 mb-3">
          Discover POPOS
        </h1>
        <p className="text-lg text-amber-100 max-w-2xl mx-auto">
          Explore San Francisco's hidden public spaces
        </p>
      </div>
    </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces}
        </div>
      </div>
    </div>
  );
}

export default POPOSList;