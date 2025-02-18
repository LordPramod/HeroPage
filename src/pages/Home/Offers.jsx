import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ellipse, OfferImage } from "../../assets";

const Offers = () => {
  return (
    <Box p={10}>
      <Grid
        templateColumns={"repeat(2, 1fr)"}
        width={"100%"}
        // border={"1px"}
        bg={"#F4FFD5"}
        height={"660px"}
      >
        <Stack
          width={"577px"}
          height={"fit-content"}
          gap={4}
          position={"relative"}
          top={"253px"}
          left={"72px"}
          //   border={"1px solid red"}
        >
          <Text
            fontWeight={500}
            lineHeight={"16.8px"}
            fontSize={"14px"}
            color={"#535862"}
            // border={"1px solid green"}
          >
            Deco Collection – Up to 70% Off!
          </Text>
          <Flex flexDirection={"column"} gap={"2"}>
            <Text
              fontWeight={600}
              fontSize={"32px"}
              lineHeight={"44.4px"}
              color={"#0A0D12"}
            >
              Your Favorite Styles, Now for Less!
            </Text>
            <Text
              fontWeight={400}
              fontSize={"16px"}
              lineHeight={"24px"}
              color={"#252B37"}
              textAlign={"justify"}
            >
              Because you deserve the best deals! Shop our limited-time sale and
              discover unbeatable discounts on your favorite collections.
            </Text>
          </Flex>
          <HStack alignItems={"center"} gap={"24px"}>
            <Flex flexDirection={"column"} gap={"4px"}>
              <Text fontSize={"37px"} fontWeight={400}>
                00
              </Text>
              <Text fontSize={"14px"} fontWeight={500} textAlign={"center"}>
                DAYS
              </Text>
            </Flex>
            <Text fontSize={"28px"} fontWeight={600} color={"#0A0D12"}>
              :
            </Text>
            <Flex flexDirection={"column"} gap={"4px"}>
              <Text fontSize={"37px"} fontWeight={400}>
                00
              </Text>
              <Text fontSize={"14px"} fontWeight={500} textAlign={"center"}>
                HOURS
              </Text>
            </Flex>
            <Text fontSize={"28px"} fontWeight={600} color={"#0A0D12"}>
              :
            </Text>
            <Flex flexDirection={"column"} gap={"4px"}>
              <Text fontSize={"37px"} fontWeight={400}>
                00
              </Text>
              <Text fontSize={"14px"} fontWeight={500} textAlign={"center"}>
                MINS
              </Text>
            </Flex>
            <Text fontSize={"28px"} fontWeight={600} color={"#0A0D12"}>
              :
            </Text>

            <Flex flexDirection={"column"} gap={"4px"}>
              <Text fontSize={"37px"} fontWeight={400}>
                00
              </Text>
              <Text fontSize={"14px"} fontWeight={500} textAlign={"center"}>
                SECS
              </Text>
            </Flex>
          </HStack>
          <Button
            display={"flex"}
            gap={"10px"}
            px={"20px"}
            py={"10px"}
            bg={"#0A0D12"}
            width={"113px"}
            height={"48px"}
            borderRadius={"none"}
            color={"#FAFAFA"}
            _hover={{
              bg: "blackAlpha.800",
            }}
          >
            Shop Now
          </Button>
        </Stack>
        <Box>
          <Flex position={"relative"} left={"100px"} width={"fit-content"}>
            <Image src={ellipse} width={"500px"} height={"500px"} />
          </Flex>
          <Box
            position={"relative"}
            top={"-500px"}
            left={"100px"}
            // border={"1px"}
            width={"fit-content"}
          >
            <Image src={OfferImage} />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Offers;
