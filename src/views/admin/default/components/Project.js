// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
// Assets
import { MdEdit } from "react-icons/md";

export default function Project(props) {
  const { title, ranking, link, image, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("white", "navy.700");
  return (
    <Card bg={bg} {...rest} p="14px">
      <RouterLink fontWeight="500" color={brandColor} fontSize="sm" to={link}>
        <Flex align="center" direction={{ base: "column", md: "row" }}>
          <Image h="80px" w="80px" src={image} borderRadius="8px" me="20px" />
          <Box mt={{ base: "10px", md: "0" }}>
            <Text
              color={textColorPrimary}
              fontWeight="500"
              fontSize="md"
              mb="4px"
            >
              {title}
            </Text>
            <Text
              fontWeight="500"
              color={textColorSecondary}
              fontSize="sm"
              me="4px"
            >
              Project #{ranking} •{" "}
              {/* <Link fontWeight="500" color={brandColor} fontSize="sm"> */}
              See project details
              {/* </Link> */}
            </Text>
          </Box>
          {/* <Link variant="no-hover" me="16px" ms="auto" p="0px !important"> */}
            {/* <RouterLink to={link}> */}
              <Icon as={MdEdit} color="secondaryGray.500" h="18px" w="18px" variant="no-hover" me="16px" ms="auto" p="0px !important"/>
            {/* </RouterLink> */}
          {/* </Link> */}
        </Flex>
      </RouterLink>
    </Card>
  );
}
