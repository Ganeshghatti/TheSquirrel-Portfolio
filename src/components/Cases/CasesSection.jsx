import React from "react";
import './ImageGallery.css';

const items = [
  'https://highflyer.sirv.com/cloud/15_voqq0c.png',
  'https://highflyer.sirv.com/cloud/21_wbsty7.png',
  'https://highflyer.sirv.com/cloud/1_zlqnwl.jpg',
  'https://highflyer.sirv.com/cloud/16_epnmqm.png',
  // 'https://highflyer.sirv.com/cloud/Screenshot_23_8_nbzwdm.png',
  // 'https://highflyer.sirv.com/cloud/29_jbd4di.jpg',
  // 'https://highflyer.sirv.com/cloud/14_zkwtff.png',
  // 'https://highflyer.sirv.com/cloud/8_ucihr5.png',
  // 'https://highflyer.sirv.com/cloud/18_bguamv.png',
  // 'https://highflyer.sirv.com/cloud/Screenshot_18_4_mscxmr.jpg',
  'https://highflyer.sirv.com/cloud/2_zja2bq.png',
  'https://highflyer.sirv.com/cloud/11_p1oi8m.png',
];

const ImageGallery = () => {
  return (
    <div className=" mt-28 w-full flex items-center justify-center h-fit  bg-black  overflow-x-hidden">
    <div className="items ">
      {items.map((url, index) => (
        <div
          key={index}
          className="item"
          tabIndex="0"
          style={{ backgroundImage: `url(${url})` }}
        ></div>
      ))}
    </div>
  </div>
    
  );
};

function Title() {
  return (
    <div className=" flex  w-[90%] md:px-16">
      <div className="flex  md:pr-32 flex-col text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black">
          <span>OUR</span>
          <span>CASES</span>
        </div>
      </div>

  );
}





export default function CasesSection() {
  return (
    <section id="cases" className="   w-full flex flex-col items-center justify-center">
    <Title />
    <ImageGallery />
    </section>
  )
}
