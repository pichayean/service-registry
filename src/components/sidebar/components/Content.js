// chakra imports
import {
  Box,
  Flex,
  Stack,
  HStack,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
//   Custom components
import Brand from "components/sidebar/components/Brand";
import Links from "components/sidebar/components/Links";
import SidebarCard from "components/sidebar/components/SidebarCard";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdLogout } from "react-icons/md";

// FUNCTIONS

function SidebarContent(props) {
  const { routes } = props;
  let textColor = useColorModeValue("secondaryGray.500", "white");
  // SIDEBAR
  return (
    <Flex direction="column" height="100%" pt="25px" borderRadius="30px">
      <Brand />
      <Stack direction="column" mb="auto" mt="8px">
        <Box ps="20px" pe={{ md: "16px", "2xl": "1px" }}>
          <Links routes={routes} />

          <Box>
            <HStack
              py="5px"
              ps="10px"
              onClick={() => {
                localStorage.clear();
                window.location.href = "/";
              }}
            >
              <Flex w="100%" alignItems="center" justifyContent="center">
                <Box me="18px">
                  <Icon
                    as={MdLogout}
                    width="20px"
                    height="20px"
                    color="inherit"
                  />
                </Box>
                <Text me="auto" color={textColor} fontWeight={"normal"}>
                  Logout
                </Text>
              </Flex>
              <Box h="36px" w="4px" bg={"transparent"} borderRadius="5px" />
            </HStack>
          </Box>
        </Box>
      </Stack>

      <Box
        ps="20px"
        pe={{ md: "16px", "2xl": "0px" }}
        mt="60px"
        mb="40px"
        borderRadius="30px"
      >
        <SidebarCard />
      </Box>
    </Flex>
  );
}

export default SidebarContent;
