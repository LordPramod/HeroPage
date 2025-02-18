import { Box, Grid } from "@chakra-ui/react";
import {
  BestSellerImage,
  BestSellerImage1,
  BestSellerImage2,
  BestSellerImage3,
  featImage,
  featImage2,
  featImage3,
  featImage4,
  GameImage,
  OccasionImage,
} from "../../assets";
import NavBar from "../../components/NavBar";

import HeroSection from "./HeroSection";
import Offers from "./Offers";
import NewArrivals from "../../components/NewArrivals";
import SummerSale from "./SummerSale";
import BestSellers from "../../components/BestSellers";
import Occasion from "../../components/Occasion";
import Game from "../../components/Game";
import Footer from "../../components/Footer";
import FeaturedImageCard from "./FeaturedImageCard";

const Home = () => {
  const imgArray = [featImage, featImage2, featImage3, featImage4];

  const BestSellersDetails = [
    {
      id: 1,
      category: "Hoodie",
      image: BestSellerImage,
      title: "ArcaDyy Hoddie",
      description: "The ultimate definition of style",
      price: 10000,
    },
    {
      id: 2,
      category: "Sweater",
      image: BestSellerImage1,
      title: "Brown Sweater",
      description: "Sweater that will make you unique.",
      price: 10000,
    },
    {
      id: 3,
      category: "Converse",
      image: BestSellerImage2,
      title: "Converse Panda",
      description: "Level up your style with Pandas",
      price: 10000,
    },
    {
      id: 4,
      category: "Jacket",
      image: BestSellerImage3,
      title: "The North Face Jacket",
      description: "Win over this winter with our Jacket",
      price: 10000,
    },
  ];
  return (
    <>
      <NavBar />
      <HeroSection />
      <Grid templateColumns={"repeat(4, 1fr)"} gap={"20px"} p={10}>
        {imgArray.map((img, index) => {
          return <FeaturedImageCard imageUrl={img} key={index} />;
        })}
      </Grid>
      <Offers />
      <NewArrivals />
      <SummerSale />
      <BestSellers BestSellersDetails={BestSellersDetails} />
      <Grid templateColumns={"repeat(2,1fr)"} gap={4} p={10}>
        <Box bg={"#F1FFF2"} position={"relative"}>
          <Occasion OccasionImage={OccasionImage} />
        </Box>
        <Box bg={"#E8F3FF"}>
          <Game GameImage={GameImage} />
        </Box>
      </Grid>
      <Footer />
    </>
  );
};

export default Home;
