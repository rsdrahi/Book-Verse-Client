import Banner from "./components/home/Banner";
import Categories from "./components/home/Categories";
import FAQ from "./components/home/FAQ";
import FeaturedBooks from "./components/home/FeaturedBooks";
import Newsletter from "./components/home/Newsletter";
import Testimonials from "./components/home/Testimonials";
import WhyChooseUs from "./components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <FeaturedBooks></FeaturedBooks>
      <Categories></Categories>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
      <FAQ></FAQ>
    </>
  );
}
