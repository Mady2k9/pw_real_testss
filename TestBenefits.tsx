import React from 'react';
import Image from '../../Components/common/Image/Image';

function TestBenefits() {
  return (
    <div className="mx-auto xl:max-w-6xl w-full  xl:px-0  px-3 my-5">
      <div className="bg-[#FFF6E5]  border rounded-lg p-6 shadow">
        <div className="xl:text-[32px] xl:leading-[48px] text-[20px] leading-[30px]  font-[700] text-[#1B2124] pl-2 mb-5">
          How PW REAL Test benefits the students?
        </div>
        <div className="flex sm:flex-row flex-col justify-center  gap-7">
          <div className="  bg-white rounded-lg p-4 shadow">
            <div>
              <Image
                h-
                bgImagetitle={'Icons.webp'}
                className={
                  'h-[48px] w-[48px] xl:h-[84px] xl:w-[85px] bg-center bg-contain bg-no-repeat rounded-full'
                }
              />
            </div>
            <div className="text-[18px] leading-[28px] font-[700] text-[#1B2124] mt-3">
              NTA Styled Test
            </div>
            <div className="text-[14px] leading-[20px] font-[500] text-[#757575]">
              It’s like a JEE before JEE so that students can get an actual
              hands on experience of how the exam is going to be like
            </div>
          </div>
          <div className="  bg-white rounded-md  shadow-lg p-4">
            <Image
              h-
              bgImagetitle={'e-learning.webp'}
              className={
                'h-[48px] w-[48px] xl:h-[84px] xl:w-[85px] bg-center bg-contain bg-no-repeat rounded-full'
              }
            />

            <div className="text-[18px] leading-[28px] font-[700] text-[#1B2124] mt-3">
              NTA Styled Test
            </div>
            <div className="text-[14px] leading-[20px] font-[500] text-[#757575]">
              It’s like a JEE before JEE so that students can get an actual
              hands on experience of how the exam is going to be like
            </div>
          </div>
          <div className="  bg-white rounded-md shadow-lg p-4">
            <Image
              h-
              bgImagetitle={'Group.webp'}
              className={
                'h-[48px] w-[48px] xl:h-[84px] xl:w-[85px] bg-center bg-contain bg-no-repeat rounded-full'
              }
            />

            <div className="text-[18px] leading-[28px] font-[700] text-[#1B2124] mt-3">
              NTA Styled Test
            </div>
            <div className="text-[14px] leading-[20px] font-[500] text-[#757575]">
              It’s like a JEE before JEE so that students can get an actual
              hands on experience of how the exam is going to be like
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestBenefits;
