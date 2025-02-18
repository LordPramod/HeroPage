import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";

import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { CartImage, FavImage, Logo, SearchImage } from "../assets";

const NavBar = () => {
  return (
    <>
      <Box width={"100%"} height={"120px"}>
        <Flex
          height={"48px"}
          justifyContent={"space-between"}
          px={"260px"}
          bg={"#121212"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            fontSize={"13px"}
            width={"303px"}
            height={"29px"}
            color={"#E9EAEB"}
            alignItems={"center"}
          >
            <Text
              width={"134px"}
              height={"21px"}
              columnGap={"8px"}
              display={"flex"}
              fontWeight={400}
            >
              Contact: +01 5201115
            </Text>
            <Text width={"134px"} height={"21px"} fontWeight={400}>
              Mail: Logo@gmail.com
            </Text>
          </Box>
          {/* Social */}
          <Box width={"310px"} height={"29px"} display={"flex"} gap={"12px"}>
            <Box
              display={"flex"}
              color={"white"}
              width={"176px"}
              height={"29px"}
              py={"4px"}
              px={"8px"}
              gap={"10px"}
            >
              <Text
                width={"64px"}
                height={"21px"}
                fontSize={"14px"}
                lineHeight={"21px"}
                color={"#E9EAEB"}
                fontWeight={400}
              >
                Follow us:
              </Text>
              <Box width={"76px"} gap={"8px"} display={"flex"} height={"21px"}>
                <Icon
                  as={FaXTwitter}
                  w={"20px"}
                  h={"16px"}
                  mt={"4px"}
                  ml={"4px"}
                />
                <Icon
                  as={FaYoutube}
                  w={"20px"}
                  h={"16px"}
                  mt={"4px"}
                  ml={"4px"}
                />
                <Icon
                  as={FaInstagram}
                  w={"20px"}
                  h={"16px"}
                  mt={"4px"}
                  ml={"4px"}
                />
              </Box>
            </Box>
            <Box
              width={"64px"}
              height={"29px"}
              display={"flex"}
              gap={"10px"}
              py={"4px"}
              px={"8px"}
              color={"#E9EAEB"}
            >
              <Text
                fontWeight={400}
                fontSize={"14px"}
                width={"46px"}
                height={"21px"}
              >
                Join us
              </Text>
              {/* <Text fontSize={"14px"}>Join us</Text> */}
            </Box>
            <Box
              width={"60px"}
              height={"29px"}
              display={"flex"}
              py={"4px"}
              px={"8px"}
              color={"#E9EAEB"}
            >
              <Text
                fontSize={"14px"}
                width={"46px"}
                height={"21px"}
                fontWeight={400}
              >
                Sign In
              </Text>
            </Box>
          </Box>
        </Flex>
        {/* Logo Nav */}

        <Box
          height={"72px"}
          display={"flex"}
          px={"260px"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Image src={Logo} width={"104px"} height={"24px"} />
          </Box>
          {/* Navigation */}
          <Box width={"488px"} height={"34px"} display={"flex"} gap={"12px"}>
            <Box
              width={"103px"}
              height={"34px"}
              py={"8px"}
              px={"12px"}
              display={"flex"}
              gap={"4px"}
              color={"#0A0D12"}
            >
              <Text
                width={"57px"}
                height={"17px"}
                fontSize={"14px"}
                fontWeight={400}
                lineHeight={"16.8px"}
              >
                Category
              </Text>
            </Box>
            <Box
              width={"103px"}
              height={"34px"}
              py={"8px"}
              px={"12px"}
              display={"flex"}
              gap={"4px"}
              color={"#0A0D12"}
            >
              <Text
                width={"57px"}
                height={"17px"}
                fontSize={"14px"}
                fontWeight={400}
                lineHeight={"16.8px"}
              >
                Products
              </Text>
            </Box>
            <Box
              width={"59px"}
              height={"33px"}
              py={"8px"}
              px={"12px"}
              display={"flex"}
              gap={"10px"}
              color={"#0A0D12"}
            >
              <Text
                width={"57px"}
                height={"17px"}
                fontSize={"14px"}
                fontWeight={400}
                lineHeight={"16.8px"}
              >
                FAQ’s
              </Text>
            </Box>
            <Box
              width={"82px"}
              height={"33px"}
              py={"8px"}
              px={"12px"}
              display={"flex"}
              gap={"10px"}
              color={"#0A0D12"}
            >
              <Text
                width={"58px"}
                height={"17px"}
                fontSize={"14px"}
                fontWeight={400}
                lineHeight={"16.8px"}
              >
                About Us
              </Text>
            </Box>
            <Box
              width={"99px"}
              height={"33px"}
              py={"8px"}
              px={"12px"}
              display={"flex"}
              gap={"10px"}
              color={"#0A0D12"}
            >
              <Text
                w={"80px"}
                height={"17px"}
                fontSize={"14px"}
                fontWeight={400}
                lineHeight={"16.8px"}
              >
                Contact Us
              </Text>
            </Box>
          </Box>
          {/* Cart */}
          <Flex width={"128px"} height={"32px"} gap={"16px"}>
            <Image src={SearchImage} w={"32px"} height={"32px"} />
            <Image src={FavImage} w={"32px"} height={"32px"} />
            <Image src={CartImage} w={"32px"} height={"32px"} />
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
