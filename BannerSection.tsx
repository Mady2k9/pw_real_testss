import React from 'react';
import Image from '../../Components/common/Image/Image';
import Carousel from '../../Atoms/Caraousel/Carousel';

const bannerDatas = [
  {
    dwebBannerImages: 'BannerRealtest.webp',
    mwebBannerImages: 'Bannermobile.webp',
  },

  {
    dwebBannerImages: 'Bannermobile.webp',
    mwebBannerImages: 'Bannermobile.webp',
  },
];

function BannerSection() {
  return (
    <div className="mx-auto xl:max-w-6xl w-full  xl:px-0  px-3 ">
      <div className="p-6 rounded-lg bg-[#FFF] shadow-md ">
        {/* <Image
          bgImagetitle={'BannerRealtest.webp'}
          className={
            'h-[391px] w-[100%] bg-center bg-contain bg-no-repeat rounded-lg sm:block hidden'
          }
        />
        <Image
          bgImagetitle={'Bannermobile.webp'}
          className={
            'h-[560px] w-[full] bg-center bg-contain bg-no-repeat rounded-lg sm:hidden block '
          }
        /> */}
        <Carousel carouselData={bannerDatas} />
      </div>
    </div>
  );
}

export default BannerSection;
