// src/POPOSList.js

import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import data from '../../sfpopos-data.json';
import style from './POPOSLIST.module.css'

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
    <div className="POPOSList">
      {spaces}
    </div>
  );
}

export default POPOSList;