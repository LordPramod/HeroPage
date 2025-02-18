import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import {
  NewArrivalsImage,
  NewArrivalsImage1,
  NewArrivalsImage2,
  NewArrivalsImage3,
} from "../assets/images";

const NewArrivalsDetails = [
  {
    id: 1,
    category: "Sneakers",
    description: "Experience the legacy of Air Jordan",
    title: "Nike Air Jordan",
    price: 10000,
    image: NewArrivalsImage,
  },
  {
    id: 2,
    category: "Jeans",
    description: "Flaunt your jeans in style.",
    title: "Blue Jeans",
    price: 10000,
    image: NewArrivalsImage1,
  },
  {
    id: 3,
    category: "Sneakers",
    description: "The ultimate comfort of Mocha",
    title: "Nike Air Mocha",
    price: 10000,
    image: NewArrivalsImage2,
  },
  {
    id: 4,
    category: "T-Shirt",
    description: "Feel the freedom of comfort.",
    title: "Summer T - Shirt",
    price: 10000,
    image: NewArrivalsImage3,
  },
];
const NewArrivals = () => {
  return (
    <Box height={"578px"} p={10}>
      <HStack justifyContent={"space-between"}>
        <Box>
          <Text
            fontSize={"28px"}
            lineHeight={"27.6px"}
            fontWeight={600}
            color={"#0A0D12"}
          >
            New Arrivals
          </Text>
          <Text
            fontSize={"16px"}
            lineHeight={"24px"}
            fontWeight={400}
            color={"#252B37"}
          >
            Upgrade your style with our newest collection.
          </Text>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"4"}>
          <Text>See all</Text>
          <Icon as={FaArrowRight} />
        </Box>
      </HStack>
      <Grid templateColumns={"repeat(4,1fr)"} mt={10}>
        <Flex gap={4} mr={"800px"}>
          {NewArrivalsDetails.map((data) => {
            return (
              <Box
                // border={"1px solid blue"}
                maxH={"486px"}
                key={data.id}
                bg={"#F9F9F9"}
              >
                <Text
                  border={"1px solid  #E9EAEB"}
                  bg={"#FFFFFF"}
                  width={"fit-content"}
                  color={"#535862"}
                  fontWeight={500}
                  fontSize={"14px"}
                  lineHeight={"16.8px"}
                  padding={"8px"}
                  borderRadius={"8px"}
                  display={"flex"}
                  m={6}
                >
                  {data.category}
                </Text>
                <Flex gap={"10px"} justify={"center"} width={"367px"}>
                  <Image
                    src={data.image}
                    width={"180px"}
                    height={"180px"}
                    // border={"1px"}
                  />
                </Flex>
                <Stack mx={6} mt={10} mb={4}>
                  <Text
                    color={"#0A0D12"}
                    fontWeight={500}
                    fontSize={"18px"}
                    lineHeight="21.6px"
                  >
                    {data.title}
                  </Text>
                  <Text
                    fontWeight={400}
                    color={"#535862"}
                    fontSize={"14px"}
                    lineHeight={"21px"}
                  >
                    {data.description}
                  </Text>
                  <HStack mt={2}>
                    <Text
                      fontWeight={400}
                      color={"#0A0D12"}
                      fontSize={"18px"}
                      lineHeight={"21.6px"}
                    >
                      {data.price}
                    </Text>
                    <Text color={"#FF0000"} textDecoration={"line-through"}>
                      15000
                    </Text>
                    <Text
                      color={"#535862"}
                      lineHeight={"16.8px"}
                      fontSize={"14px"}
                      fontWeight={500}
                    >
                      -10%
                    </Text>
                  </HStack>
                </Stack>
              </Box>
            );
          })}
        </Flex>
      </Grid>
    </Box>
  );
};

export default NewArrivals;
