// "Home Page"

import HeroSection from "../section/HeroSection";
import PopularCourses from "../section/PopularCourses";

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <main className="container mx-auto  max-w-6xl" >
        <PopularCourses></PopularCourses>
      </main>
    </div>
  );
};

export default HomePage;
