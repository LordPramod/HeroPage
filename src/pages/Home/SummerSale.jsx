import { Box, Button, Flex, Grid, Image, Stack, Text } from "@chakra-ui/react";
import { SummerEllipse, SummerSaleImage } from "../../assets";

const SummerSale = () => {
  return (
    <Box height={"660px"} padding={"10"}>
      <Grid templateColumns={"repeat(2,1fr)"} bg={"#A9F5FF"} height={"650px"}>
        <Stack
          position={"relative"}
          top={"366px"}
          left={"80px"}
          gap={"32px"}
          width={"450px"}
          maxH={"210px"}
        >
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <Text
              fontSize={"14px"}
              fontWeight={500}
              lineHeight={"16.8px"}
              color={"#535862"}
            >
              Summer Sale – Up to 70% Off!
            </Text>
            <Text
              fontSize={"37px"}
              lineHeight={"44.4px"}
              fontWeight={600}
              color={"#0A0D12"}
            >
              Catch the Summer Vibes
            </Text>
            <Text
              fontSize={"16px"}
              lineHeight={"24px"}
              fontWeight={400}
              color={"#252B37"}
              width={"405px"}
            >
              Bright colors, breezy styles, and everything you need to stay cool
              all season long
            </Text>
          </Box>
          <Button
            bg={"#0A0D12"}
            borderRadius={"none"}
            px={"20px"}
            py={"10px"}
            width={"130px"}
            height={"48px"}
            color={"#FAFAFA"}
            fontSize={"16px"}
            fontWeight={500}
            lineHeight={"19.2px"}
          >
            Explore Now
          </Button>
        </Stack>
        <Box>
          <Flex
            position={"relative"}
            left={"410px"}
            width={"fit-content"}
            // border={"1px"}
          >
            <Image src={SummerEllipse} />
          </Flex>
          <Box position={"relative"} top={"-318px"}>
            <Image src={SummerSaleImage} />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default SummerSale;
