import React from "react";
import './ImageGallery.css';

const items = [
  'https://highflyer.sirv.com/cloud/15_voqq0c.png',
  'https://highflyer.sirv.com/cloud/21_wbsty7.png',
  'https://highflyer.sirv.com/cloud/1_zlqnwl.jpg',
  'https://highflyer.sirv.com/cloud/16_epnmqm.png',
  'https://highflyer.sirv.com/cloud/Screenshot_23_8_nbzwdm.png',
  'https://highflyer.sirv.com/cloud/29_jbd4di.jpg',
  'https://highflyer.sirv.com/cloud/14_zkwtff.png',
  'https://highflyer.sirv.com/cloud/8_ucihr5.png',
  'https://highflyer.sirv.com/cloud/18_bguamv.png',
  'https://highflyer.sirv.com/cloud/Screenshot_18_4_mscxmr.jpg',
  'https://highflyer.sirv.com/cloud/2_zja2bq.png',
  'https://highflyer.sirv.com/cloud/11_p1oi8m.png',
];

const ImageGallery = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
    <div className="items">
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
    // <div className="flex items-center justify-center h-screen bg-black">
    //   <div className="flex gap-1 perspective-[calc((1vw+1vh)*35)]">
    //   {items.map((url, index) => (
    //       <div
    //         key={index}
    //         className="item"
    //         tabIndex="0"
    //         style={{ backgroundImage: `url(${url})` }}
    //       ></div>
    //     ))}
    //   </div>
    // </div>
  );
};





export default function CasesSection() {
  return (
    <section id="cases" className="bg-pink-500 h-screen  w-full">
    <ImageGallery />
    </section>
  )
}
