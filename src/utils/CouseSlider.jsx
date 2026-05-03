"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CourseCard from "./../components/couse/CourseCard";
import { Autoplay } from "swiper/modules";

const CourseSlider = ({ courses }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {courses.map((course) => (
        <SwiperSlide key={course.id}>
          <CourseCard course={course} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CourseSlider;