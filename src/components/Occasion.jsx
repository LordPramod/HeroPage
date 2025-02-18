import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { span } from "framer-motion/client";

const Occasion = ({ OccasionImage }) => {
  return (
    <Flex>
      <Stack position={"relative"} top={"176px"} left={"40px"} gap={"24px"}>
        <Box>
          <Text
            fontWeight={700}
            fontSize={"37px"}
            lineHeight={"49.32px"}
            color={"#0A0D12"}
            display={"flex"}
            gap={2}
          >
            Explore
            <Text
              as={span}
              fontWeight={900}
              size={"37px"}
              lineHeight={"49.32px"}
              color={"#0A0D12"}
            >
              Sarees
            </Text>
            <Text>for Every Occasion</Text>
          </Text>

          <Text>
            Discover the perfect blend of tradition and style with our exclusive
            saree collection
          </Text>
        </Box>
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
          Explore Now
        </Button>
      </Stack>
      <Box position={"relative"}>
        <Image src={OccasionImage} objectFit={"cover"} height={"600px"} />
      </Box>
    </Flex>
  );
};

export default Occasion;
