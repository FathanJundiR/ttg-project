import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import teacher from "../assets/vivid-classes-at-the-university.gif";
import students from "../assets/Untitled design.png";
import car from "../assets/memphis-delivery-service-with-vehicle-and-bags.gif";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function CardGAME() {

  const [teacherGame , setTeacherGame] = useState(false)
  const [StudentGame , setStudentGame] = useState(false)
  const [CarGame , setCarGame] = useState(false)

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-[70vh] flex rounded-lg border border-2 border-slate-800 shadow rounded-3xl bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20230323/pngtree-education-classroom-cute-cartoon-orange-background-image_2051862.jpg')] bg-cover relative">
            <div className="w-full h-full bg-black bg-opacity-80 relative z-10">
              <div className="w-1/2 h-full flex justify-end items-center">
                <div className="w-3/4 h-3/4 p-4 md:p-8 rounded-lg">
                  <span className="text-6xl text-white">Instructure Mode</span>
                  <p className="mt-10 text-white">
                    In the "Instructure" mode, the guessing game takes on a fun
                    twist by featuring photos of instructors as the primary
                    challenge. The goal of this mode is to guess who is hidden
                    within the partially obscured images of various instructors
                  </p>
                  <div className="w-full mt-6 md:py-3 md:text-lg md:text-xl">
                    <button className="border border-slate-200 rounded-lg py-2 px-1 md:py-3 md:px-6 text-lg md:text-x text-slate-300" onClick={()=>{setTeacherGame(true)}}>
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-full pl-10 absolute top-0 right-0 z-20 pt-9">
                <img className="FotoSatu" src={teacher} alt="Instructor" />
              </div>
            </div>
            {teacherGame && (
            <div className=" fixed inset-0 backdrop-blur-sm flex z-30 flex items-center justify-center">
              <div className="w-[40vw] h-[30vh] border border-slate-300 bg-slate-700 bg-opacity-80 rounded-lg">
                <div className="w-full h-1/5 flex justify-end px-4 py-5 text-white cursor-pointer"onClick={()=>{setTeacherGame(false)}}>X</div>
                <div className="w-full h-4/5 flex justify-center items-center pb-6 gap-7">
              <button className=" border border-slate-200 rounded-lg py-2 px-1 md:py-3 md:px-8 text-lg md:text-x text-slate-300">Join Room</button>
              <button className="border border-slate-200 rounded-lg py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl mt-4 md:mt-0 text-slate-300">Create Room</button>
                </div>
              </div>
            </div>
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[70vh] flex rounded-lg border border-2 border-slate-800 shadow rounded-3xl bg-[url('https://i.pinimg.com/originals/cd/30/1d/cd301d14b22a349fbe17f8a830587c4d.jpg')] bg-fill relative">
            <div className="w-full h-full bg-black bg-opacity-80 relative z-10">
              <div className="w-1/2 h-full flex justify-end items-center">
                <div className="w-3/4 h-3/4 p-4 md:p-8 rounded-lg">
                  <span className="text-6xl text-white">Students Mode</span>
                  <p className="mt-10 text-white">
                    In the "Students" mode, the guessing game takes on a fun
                    twist by featuring photos of instructors as the primary
                    challenge. The goal of this mode is to guess who is hidden
                    within the partially obscured images of various instructors
                  </p>
                  <div className="w-full mt-6 md:py-3 md:text-lg md:text-xl">
                    <button className="border border-slate-200 rounded-lg py-2 px-1 md:py-3 md:px-6 text-lg md:text-x text-slate-300" onClick={()=>{setStudentGame(true)}}>
                      Play Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-1/2 h-full pl-10 absolute top-0 right-0 z-20 pt-9">
                <img
                  className="FotoSatu h-3/4 w-3/4"
                  src={students}
                  alt="Instructor"
                />
              </div>
            </div>
            {StudentGame && (
            <div className=" fixed inset-0 backdrop-blur-sm flex z-30 flex items-center justify-center">
              <div className="w-[40vw] h-[30vh] border border-slate-300 bg-slate-700 bg-opacity-80 rounded-lg">
                <div className="w-full h-1/5 flex justify-end px-4 py-5 text-white cursor-pointer"onClick={()=>{setStudentGame(false)}}>X</div>
                <div className="w-full h-4/5 flex justify-center items-center pb-6 gap-7">
              <button className=" border border-slate-200 rounded-lg py-2 px-1 md:py-3 md:px-8 text-lg md:text-x text-slate-300">Join Room</button>
              <button className="border border-slate-200 rounded-lg py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl mt-4 md:mt-0 text-slate-300">Create Room</button>
                </div>
              </div>
            </div>
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[70vh] flex flex-col md:flex-row rounded-lg  shadow rounded-3xl bg-[url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zN18zZF9jYXJ0b29uX3NjZW5lX29mX2FfbWVjaGFuaWNfZ2FyYWdlX3dpdGhfYV9jYjBhMzgyMS0zZDdiLTRiYWUtYjQ1Zi1iMDBmOTM2NGYzM2FfMS5qcGc.jpg')] bg-cover relative">
            <div className="w-full h-full bg-slate-900 bg-opacity-80 flex flex-col justify-center md:relative md:z-10">
              <div className="w-full h-auto md:w-1/2 flex flex-col md:flex-row md:justify-end md:items-center p-4 md:p-8">
                <div className="w-full md:w-3/4 h-auto md:h-3/4 flex flex-col justify-center md:justify-start">
                  <span className="text-4xl md:text-6xl text-white font-bold">
                    Cars Mode
                  </span>
                  <p className="mt-4 md:mt-10 text-white text-base md:text-lg">
                    In the "Cars" mode, the guessing game takes on a fun twist
                    by featuring photos of cars model as the primary challenge.
                    The goal of this mode is to guess what car is hidden within
                    the partially obscured images of various instructors
                  </p>
                  <div className="w-full mt-4 md:mt-6 md:py-3 text-base md:text-lg">
                    <button className="border border-slate-200 rounded-lg py-2 px-4 md:py-3 md:px-6 text-base md:text-lg text-slate-300" onClick={()=>{setCarGame(true)}}>
                      Play Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full h-auto md:w-1/2 flex justify-center md:pl-10 md:pt-9 absolute top-0 right-0 z-20">
                <img
                  className="FotoSatu max-w-full h-auto"
                  src={car}
                  alt="Instructor"
                />
              </div>
            </div>
            {CarGame && (
            <div className=" fixed inset-0 backdrop-blur-sm flex z-30 flex items-center justify-center">
              <div className="w-[40vw] h-[30vh] border border-slate-300 bg-slate-700 bg-opacity-80 rounded-lg">
                <div className="w-full h-1/5 flex justify-end px-4 py-5 text-white cursor-pointer"onClick={()=>{setCarGame(false)}}>X</div>
                <div className="w-full h-4/5 flex justify-center items-center pb-6 gap-7">
              <button className=" border border-slate-200 rounded-lg py-2 px-1 md:py-3 md:px-8 text-lg md:text-x text-slate-300">Join Room</button>
              <button className="border border-slate-200 rounded-lg py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl mt-4 md:mt-0 text-slate-300">Create Room</button>
                </div>
              </div>
            </div>
            )}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
