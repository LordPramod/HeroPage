import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export const BestSellers = ({ BestSellersDetails }) => {
  return (
    <>
      <Box p={10} mt={10}>
        <Stack>
          <Text
            fontWeight={600}
            lineHeight={"27.6px"}
            fontSize={"28px"}
            color={"#0A0D12"}
          >
            Best Sellers
          </Text>
          <Text
            fontWeight={400}
            lineHeight={"24px"}
            fontSize={"16px"}
            color={"#0A0D12"}
          >
            Don’t miss the styles everyone’s talking about.
          </Text>
        </Stack>
        <Grid templateColumns={"repeat(4,1fr)"} mt={10}>
          <Flex gap={8} justifyContent={"space-between"}>
            {BestSellersDetails.map((data) => {
              return (
                <Box
                  width={"380px"}
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
                    <HStack mt={2} gap={4}>
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
                    <Button
                      mt={4}
                      color={"#FAFAFA"}
                      bg={"#0A0D12"}
                      px={"20px"}
                      py={"10px"}
                      fontWeight={500}
                      fontSize={"16px"}
                      lineHeight={"19.2px"}
                      borderRadius={"none"}
                      border={"none"}
                      _hover={{
                        bg: "blackAlpha.800",
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Stack>
                </Box>
              );
            })}
          </Flex>
        </Grid>
      </Box>
    </>
  );
};

export default BestSellers;
