import React from 'react';
import Image from '../../Components/common/Image/Image';
import Text from '../../Components/common/Text/Text';

function RegisterSection() {
  return (
    <>
    <div className="mx-auto xl:max-w-6xl w-full  xl:px-0  px-3 my-3">
      <div className="bg-[#312596] flex justify-between  px-8  border rounded-lg">
        <div className="w-[100%] xl:w-[80%] flex flex-col justify-between py-5">
          <div>
            <div className="xl:text-[40px] xl:leading-[50px]  font-[700] text-[32px] leading-[48px] text-[#ECB447] w-[100px]">
              PW REAL TEST 2024{' '}
            </div>
            <div className="xl:text-[24px] xl:leading-[32px] text-[18px] leading-[28px] font-[700] text-[#FFF] w-[55%]">
              R<span className="text-lg font-medium">ight</span> E
              <span className="text-lg font-medium">valuation & </span>A
              <span className="text-lg font-medium">ssessment</span>
              <span className="text-lg font-medium"> for</span> L
              <span className="text-lg font-medium">earning</span>
            </div>
            <div className="flex">
              <Image
                bgImagetitle={'/calendar.webp'}
                className={
                  'xl:h-[24px] xl:w-[24px] h-[4] w-[4] bg-center bg-contain bg-no-repeat'
                }
                />
              <div className="xl:text-[18px] xl:leading-[28px] text-[12px] leading-[18px]  xl:font-[600] font:[500] text-[#FFF] pb-5">
                Date: 14th January 2024
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#FFF] h-[56px] md:w-[234px] w-[100%]  py-[14px] px-[28px] rounded-md ">
              <Text
                style={' bg-[#FFF] rounded-lg font-semibold text-lg w-[100%]'}
                title={'Register for REAL Test'}
                />
            </div>
            <div className="text-[14px] leading-[20px]  font-[500] text-[#FFF] hidden sm:block">
              2K+ learners already joined
            </div>
          </div>
        </div>
        <Image
          bgImagetitle={'/alakpanday.webp'}
          className={
            'xl:h-[264px] xl:w-[284px] h-[172px]  w-[147px] bg-center bg-contain bg-no-repeat mt-[43px] sm:relative absolute right-[27px] md:bottom-[0px] sm:bottom-[0px] bottom-[65px]'
          }
          />
        {/* <div className="bg-[#FFF] h-[56px] w-[100%]  py-[14px] px-[28px] rounded-md ">
          <Text
          style={' bg-[#FFF] rounded-lg font-semibold text-lg'}
          title={'Register for REAL Test'}
          />
        </div> */}
      </div>
      </div>

      {/* -----hero---- */}
      <div className="mx-auto max-w-6xl xl:px-0 px-3 my-3">
        <div className="bg-[#312596] flex justify-between px-8 rounded-lg ">
          <div className='my-auto flex flex-col justify-between py-6'>
          <div className='text-white'>
          <div className="xl:text-[40px] xl:leading-[50px]  font-[700] text-[32px] leading-[48px] text-[#ECB447]">
              PW REAL TEST 2024{' '}
              </div>
              <div>
            <div className="xl:text-[24px] xl:leading-[32px] text-[18px] leading-[28px] font-[700] text-[#FFF] w-[55%]">
              R<span className="text-lg font-medium">ight</span> E
              <span className="text-lg font-medium">valuation & </span>A
              <span className="text-lg font-medium">ssessment</span>
              <span className="text-lg font-medium"> for</span> L
              <span className="text-lg font-medium">earning</span>
            </div>
            <div className="flex">
              <Image
                bgImagetitle={'/calendar.webp'}
                className={
                  'xl:h-[24px] xl:w-[24px] h-[4] w-[4] bg-center bg-contain bg-no-repeat'
                }
                />
              <div className="xl:text-[18px] xl:leading-[28px] text-[12px] leading-[18px]  xl:font-[600] font:[500] text-[#FFF] pb-5">
                Date: 14th January 2024
              </div>
            </div>
          </div>
              
            </div>
            <div className=''>
              <div className="bg-[#FFF] h-[56px] sm:w-[234px] w-full py-[14px] sm:px-[28px] px-[10px] rounded-md relative">
              <div className='absolute bottom-[56px] right-[-20px] sm:hidden block'>    
                <img src={'/alakpanday.webp'} className='w-[147px]' />
              </div>

              <Text
                style={'font-semibold text-lg text-center w-[100%]'}
                title={'Register for REAL Test'}
                />
            </div>
            <div className="text-[14px] leading-[20px]  font-[500] text-[#FFF] hidden sm:block">
              2K+ learners already joined
            </div>
            </div>
          </div>
          <div className='relative w-[264px] sm:block hidden'>
            <div className='absolute bottom-0 right-0'>    
          <img src={'/alakpanday.webp'} className='' />
          </div>
          </div>

      </div>
      </div>

        </>
  );
}

export default RegisterSection;
