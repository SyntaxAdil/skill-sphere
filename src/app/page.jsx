// "Home Page"

import HeroSection from "../section/HeroSection";
import PopularCourses from "../section/PopularCourses";
import LearningTips from './../section/LearningTips';
import TopInstructors from './../section/TopInstructor';

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <main className="container mx-auto  max-w-6xl" >
        <PopularCourses></PopularCourses>
        <LearningTips></LearningTips>
        <TopInstructors></TopInstructors>
      </main>
    </div>
  );
};

export default HomePage;
