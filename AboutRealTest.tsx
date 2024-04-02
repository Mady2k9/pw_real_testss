import React from 'react';
import Image from '../../Components/common/Image/Image';

function AboutRealTest() {
  return (
    <div className="mx-auto xl:max-w-6xl w-full  xl:px-0  px-3 my-5">
      <div className=" flex justify-between w-full xl:p-6 p-4 border rounded-lg bg-white shadow ">
        <div className="xl:w-[80%]  flex flex-col">
          <div className="xl:text-[32px] xl:leading-[48px] text-[20px] leading-[30px] font-[700] text-[#1B2124]">
            What is PW REAL Test?
          </div>
          <div className=" md:text-base md:font-medium  text-[#3D3D3D] text-xs font-medium xl:pt-[20px] pt-[6px]">
            PW Real Test is the nearest you can get to an{' '}
            <span className="font-bold">IDEAL JEE </span>Exam. It’s a Paid Test,
            <span className="font-bold">
              {' '}
              open to all the students whether from PW or not
            </span>
            . It is an exam conducted in almost the same style as that of NTA
            but with additional features of improvement report, sample papers,
            etc.
          </div>
        </div>
        <div className="sm:block hidden">
          <Image
            bgImagetitle={'realTest1.webp'}
            className={'h-[160px] w-[166px] bg-center bg-contain bg-no-repeat'}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutRealTest;
