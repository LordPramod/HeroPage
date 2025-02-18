import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Icon,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Logo } from "../assets";
import {
  FaInstagram,
  FaLocationPin,
  FaMailchimp,
  FaPhone,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Box py={10} my={10} px={"260px"}>
      <Divider orientation="horizontal" />
      <Box py={10} width={"fit-content"}>
        <Image src={Logo} />
      </Box>
      <Grid templateColumns={"repeat(3, 1fr)"} gap={4}>
        <Stack gap={"8px"}>
          <Text fontSize={"16px"} fontWeight={500}>
            Products
          </Text>
          <Box
            fontSize={"14px"}
            lineHeight={"16.8px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            py={"8px"}
            fontWeight={400}
          >
            <Text>Basic Cotton T-Shirt</Text>
            <Text>V-Neck T-Shirt</Text>
            <Text>Polo Shirt</Text>
            <Text>Denim Shirt</Text>
          </Box>
        </Stack>
        <Stack gap={"8px"}>
          <Text>Contact</Text>
          <Text display={"flex"} gap={2} alignItems={"center"}>
            <Icon as={FaLocationPin} />
            Kupondole, Lalitpur
          </Text>
          <Text display={"flex"} gap={2} alignItems={"center"}>
            <Icon as={MdEmail} />
            Info@logoispum.com
          </Text>
          <Text display={"flex"} gap={2} alignItems={"center"}>
            <Icon as={FaPhone} />
            +977 5201115
          </Text>
        </Stack>
        <Stack>
          <Text>Remain Updated</Text>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input bg={"#EDF2F7"} width={"420px"} height={"50px"} />
            <Button
              mt={4}
              bg={"#0A0D12"}
              px={"20px"}
              py={"10px"}
              fontWeight={500}
              color={"#FAFAFA"}
              lineHeight={"16.8px"}
              fontStyle={"14px"}
              borderRadius={"none"}
              _hover={{
                bg: "blackAlpha.800",
              }}
            >
              Sign Up
            </Button>
          </FormControl>
        </Stack>
      </Grid>
      <Divider mt={10} />
      <Flex justifyContent={"space-between"} my={"10"} mx={"150px"}>
        <HStack>
          <Text>PRIVACY</Text>
          <Text>TERMS & CONDITIONS</Text>
          <Text>@2020 E-commerce</Text>
        </HStack>
        <HStack>
          <Text>Follow Us : </Text>
          <Icon as={FaXTwitter} />
          <Icon as={FaYoutube} />
          <Icon as={FaInstagram} />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
