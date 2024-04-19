import React from 'react';
import Image from 'next/image';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import "./brand.css"
const Brand = () => {
  return (
    <div className="gpt3__brand section__padding flex flex-wrap justify-center items-center">
      <div className="flex justify-center m-4">
        <Image src={google} alt="Google" width={150} height={150} />
      </div>
      <div className="flex justify-center m-4">
        <Image src={slack} alt="Slack" width={150} height={150} />
      </div>
      <div className="flex justify-center m-4">
        <Image src={atlassian} alt="Atlassian" width={150} height={150} />
      </div>
      <div className="flex justify-center m-4">
        <Image src={dropbox} alt="Dropbox" width={150} height={150} />
      </div>
      <div className="flex justify-center m-4">
        <Image src={shopify} alt="Shopify" width={150} height={150} />
      </div>
    </div>
  );
};

export default Brand;
