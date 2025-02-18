import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CartImage, HeroImage } from "../../assets/images/";

const HeroSection = () => {
  return (
    <Flex w={"100vw"} height={"818px"} bg={"#F9F9F9"}>
      <Flex
        width={"714px"}
        height={"335px"}
        position={"relative"}
        left={"260px"}
        top={"241.5px"}
        gap={"36px"}
        // border={"1px solid red"}
        direction={"column"}
      >
        <Text
          width={"714px"}
          h={"161px"}
          fontWeight={700}
          fontSize={"67px"}
          lineHeight={"80.4px"}
          color={"#0A0D12"}
        >
          Discover your ideal fashion wear.
        </Text>
        <Text
          w={"714px"}
          h={"54px"}
          fontWeight={"400"}
          fontSize={"18px"}
          lineHeight={"27px"}
          color={"#535862"}
        >
          We're dedicated to helping you discover the ideal match. Experience
          the transformation a perfect pair can bring. Let's embark on this
          journey to find yours together.
        </Text>
        <HStack width={"265px"} h={"48px"} gap={"16px"}>
          <Button
            width={"130px"}
            h={"48px"}
            py={"10px"}
            px={"20px"}
            bg={"#0A0D12"}
            color={"#FAFAFA"}
            borderRadius={"none"}
            fontSize={"16px"}
            fontWeight={500}
            lineHeight={"19.2px"}
            border={"transparent"}
            _hover={{
              bg: "blackAlpha.800",
            }}
          >
            Explore Now
          </Button>
          <Button
            width={"119px"}
            h={"48px"}
            py={"10px"}
            px={"20px"}
            color={"#181D27"}
            bg={"transparent"}
            fontWeight={500}
            fontSize={"16px"}
            lineHeight={"19.2px"}
            borderRadius={"none"}
            // border={"1px"}
          >
            Contact Us
          </Button>
        </HStack>
      </Flex>
      <Box
        width={"1087px"}
        height={"816px"}
        overflowY={"auto"}
        css={{
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        <Image
          // border={"1px"}
          src={HeroImage}
          objectFit={"cover"}
          // border={"1px solid green"}
        />
        <Image
          // border={"1px"}
          src={HeroImage}
          objectFit={"cover"}
          // border={"1px solid green"}
        />
        <Image
          // border={"1px"}
          src={HeroImage}
          objectFit={"cover"}
          // border={"1px solid green"}
        />
        <Image
          // border={"1px"}
          src={HeroImage}
          objectFit={"cover"}
          // border={"1px solid green"}
        />
      </Box>
    </Flex>
  );
};

export default HeroSection;
