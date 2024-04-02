import React from 'react';
import Image from '../../Components/common/Image/Image';

function ShareWith() {
  const shareWhatsappMessage = () => {
    const urlEncodedText = encodeURIComponent(
      `Hey there! 🌟` +
        '\r\n\r\n' +
        `Here's some exciting news for you! 🥳` +
        '\r\n\r\n' +
        `PW is calling you to come and join the  PW REAL TEST Exam! 🤝🌟` +
        '\r\n\r\n' +
        `It's an incredible opportunity to:
✅ Experience the JEE Exam environment before the actual Exam 
✅ Get an experience of CBT like that of JEE 
✅ Compete with students from across the nation
✅ Achieve an All India Rank 🇮🇳
✅ Enjoy Exciting Goodies & More! ` +
        '\r\n' +
        `Don't miss out! Register now at ${process.env.NEXT_PUBLIC_PP_WHATSAPP_LINK_BASE_URL} before the last date 3rd Jan 2024. 🏃‍♀️🏃‍♂️` +
        '\r\n\r\n' +
        `_Let's  JEE together! 💪😃🚀_` +
        '\r\n\r\n' +
        `Regards` +
        '\r\n' +
        `PW Team 👩‍🏫👨‍🏫`
    );

    window.open(`https://api.whatsapp.com/send?text=${urlEncodedText}`);
  };
  return (
    <div className="mx-auto xl:max-w-6xl w-full  xl:px-0  px-3 pb-[30px]">
      <div className="flex justify-between border rounded-lg shadow bg-white  relative overflow-hidden items-center p-4">
        <div className="sm:block hidden absolute w-[380px] h-[620px] bg-[#ECE9F4] top-[-100px] right-[-90px] rotate-[30deg]"></div>
        <div className=" xl:w-[78%] md:w-[60%] xl:p-6 ">
          <div className="xl:text-[32px] xl:leading-[48px] font-[700] text-[20px] leading-[30px] text-[#1B2124]">
            Share with your friends
          </div>
          <div className="text-[16px] leading-[24px] font-[500]  text-[#757575] pt-3 pb-4 sm:block hidden">
            With your support, your friends can gain access to high-quality
            educational materials, expert guidance, and personalized learning
            experiences that will help them achieve their academic goals.{' '}
          </div>
          <div className="font-[500] text-[14px] leading-[20px] text-[#757575] pt-3 pb-4 sm:hidden block">
            Share with your friends and help them achieve their goals.{' '}
          </div>
          <div
            className="flex flex-row items-center w-[168px] h-[40px] border-[1px] rounded-md gap-[2px] pl-[10px] "
            onClick={() => shareWhatsappMessage()}
          >
            <Image
              bgImagetitle={'whats.webp'}
              className={'w-5 h-5 g-center bg-contain bg-no-repeat'}
            />
            <div className="text-[14px] leading-[20px] font-[600] text-[#3D3D3D] ">
              Share with friends
            </div>
          </div>
        </div>
        <div className="relative  w-[235px] h-[220px]  overflow-hidden sm:block hidden">
          <div className="absolute top-[-30px] left-[-20px] w-[280px]">
            <img src="/share.gif" alt="vision" className=" " />
          </div>
        </div>
        <div className="flex w-[91px] h-[91px] sm:hidden">
          <img src="/sharewithmobile.gif" alt="vision" className=" " />
        </div>
      </div>
    </div>
  );
}

export default ShareWith;
