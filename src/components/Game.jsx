import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { span } from "framer-motion/client";
import { GameImage } from "../assets";

const Game = ({ imageurl }) => {
  return (
    <Stack gap={0}>
      <Stack mx={"auto"} width={"409px"}>
        <Box textAlign={"center"}>
          <Text
            as={span}
            fontWeight={900}
            fontSize={"37px"}
            lineHeight={"49.32px"}
            color={"#0A0D12"}
            display={"flex"}
            gap={4}
            mt={10}
          >
            Gear Up
            <Text
              fontWeight={700}
              fontSize={"37px"}
              lineHeight={"49.32px"}
              color={"#0A0D12"}
              display={"flex"}
              gap={2}
            >
              for Every Game
            </Text>
          </Text>
        </Box>
        <Text textAlign={"center"}>
          Discover premium sports gear, apparel, and accessories for every sport
          you love
        </Text>
        <Box display={"flex"} justifyContent={"center"} mt={4}>
          <Button
            width={"111px"}
            height={"44px"}
            border={"1px"}
            px={"20px"}
            py={"10px"}
            color={"#0A0D12"}
            bg={"transparent"}
            borderRadius={"none"}
            lineHeight={"14px"}
            fontWeight={400}
            fontSize={"14px"}
          >
            Shop Now
          </Button>
        </Box>
      </Stack>
      <Box display={"flex"} justifyContent={"center"}>
        <Image src={GameImage} />
      </Box>
    </Stack>
  );
};

export default Game;
