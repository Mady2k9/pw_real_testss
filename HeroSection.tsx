import React from 'react';
import Image from '../../Components/common/Image/Image';
import Text from '../../Components/common/Text/Text';

function HeroSection() {
  return (
    <div className="mx-auto max-w-6xl xl:px-0 px-3 xl:mt-6">
      <div className="bg-gradient-to-r from-[#140D52] to-[#312596] flex justify-between px-8 rounded-lg h-[327px]">
        <div className=" flex flex-col justify-between  py-6">
          <div className="text-white">
            <div className="xl:text-[40px] xl:leading-[50px]  font-[700] text-[32px] leading-[48px]  text-transparent bg-clip-text bg-gradient-to-b from-[#ECB447] to-[#F1E1BF]">
              PW REAL TEST 2024{' '}
            </div>
            <div>
              <div className="xl:text-[24px] xl:leading-[32px] text-[18px] leading-[28px] font-[700]  text-[#FFF] md:w-[100%] w-[55%]">
                R<span className="text-lg font-medium">ight</span> E
                <span className="text-lg font-medium">valuation & </span>A
                <span className="text-lg font-medium">ssessment</span>
                <span className="text-lg font-medium"> for</span> L
                <span className="text-lg font-medium">earning</span>
              </div>
              <div className="flex gap-[2px] pt-4">
                <Image
                  bgImagetitle={'/calendar.webp'}
                  className={
                    'xl:h-[24px] xl:w-[24px] h-[4] w-[4] bg-center bg-contain bg-no-repeat'
                  }
                />
                <div className="xl:text-[18px] xl:leading-[28px] text-[12px] leading-[18px]  xl:font-[600] font:[500] text-[#FFF]">
                  Date: 14th January 2024
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-[#FFF] h-[56px] sm:w-[234px] w-full py-[14px] sm:px-[28px] px-[10px] rounded-md relative">
              <div className="absolute bottom-[56px] right-[-20px] sm:hidden block">
                <img src={'/alakpanday.webp'} className="w-[147px]" />
              </div>

              <Text
                style={'font-semibold text-lg text-center w-[100%]'}
                title={'Register for REAL Test'}
              />
            </div>

            <div className="sm:flex flex-row items-center pt-[12px] gap-[6px]  hidden">
              <Image
                bgImagetitle={'herogif.gif'}
                className={
                  'w-[80px] h-[32px] bg-center bg-contain bg-no-repeat rounded-lg'
                }
              />
              <div className="text-[14px] leading-[20px]  font-[700] text-[#FFF]">
                2K+{' '}
                <span className="text-[14px] leading-[20px]  font-[500]">
                  learners already joined
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[264px] sm:block hidden">
          <div>
            <div className="absolute bottom-0 right-0">
              <img src={'/alakpanday.webp'} className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
