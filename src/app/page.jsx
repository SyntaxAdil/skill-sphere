// "Home Page"

import HeroSection from "../section/HeroSection";

import PopularCourses from "../section/PopularCourses";
import LearningTips from './../section/LearningTips';
import TopInstructors from './../section/TopInstructor';
import NewRelease from "../section/NewRelease";

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <main className="container mx-auto  max-w-6xl" >
        <PopularCourses></PopularCourses>
        
        <NewRelease></NewRelease>
        <LearningTips></LearningTips>
        <TopInstructors></TopInstructors>
      </main>
    </div>
  );
};

export default HomePage;
