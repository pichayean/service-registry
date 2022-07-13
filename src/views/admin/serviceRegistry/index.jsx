// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,useHistory
} from "react-router-dom";
import React, { useEffect } from "react";
import { create, update, getById } from "../../../apis/registryApi";
import Card from "components/card/Card.js";

export default function ServiceRegistry() {
  // Chakra Color Mode
  const [serviceName, setServiceName] = React.useState("");
  const [port, setPort] = React.useState("");
  const [credential, setCredential] = React.useState("");
  const [serviceType, setServiceType] = React.useState("");
  const [repository, setRepository] = React.useState("");
  const [remark, setRemark] = React.useState("");
  const [todo, setTodo] = React.useState("");

  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const bg = useColorModeValue("white", "navy.700");
  let { id } = useParams();

  let history = useHistory();
  useEffect(() => {
    console.log(id);
    if (id && id !== ':id') {
      getById(id).then((data) => {
        setServiceName(data.serviceName);
        setPort(data.port);
        setCredential(data.credential);
        setServiceType(data.serviceType);
        setRepository(data.repository);
        setRemark(data.remark);
        setTodo(data.todo);
      });
    }
  }, []);
  const handleSaveClick = async () => {
    if (id === ':id') {
      await create({
        serviceName,
        port,
        credential,
        serviceType,
        repository,
        remark,
        todo,
      });
      history.push("/admin/default");
    }else {

      await update({
        id,
        serviceName,
        port,
        credential,
        serviceType,
        repository,
        remark,
        todo,
      });
      history.push("/admin/default");
    }
  };
  return (
    <Card bg={bg} p="14px">
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <FormControl>
        <FormLabel
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="8px"
        >
          Service Name<Text color={brandStars}>*</Text>
        </FormLabel>
        <Input
          isRequired={true}
          variant="auth"
          fontSize="sm"
          ms={{ base: "0px", md: "0px" }}
          type="text"
          placeholder="Service Name"
          value={serviceName}
          onChange={(e) => {
            setServiceName(e.target.value);
          }}
          mb="24px"
          fontWeight="500"
          size="lg"
        />
        <FormLabel
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="8px"
        >
          port<Text color={brandStars}>*</Text>
        </FormLabel>
        <Input
          isRequired={true}
          variant="auth"
          fontSize="sm"
          ms={{ base: "0px", md: "0px" }}
          type="text"
          placeholder="port"
          value={port}
          onChange={(e) => {
            setPort(e.target.value);
          }}
          mb="24px"
          fontWeight="500"
          size="lg"
        />
        <FormLabel
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="8px"
        >
          credential<Text color={brandStars}>*</Text>
        </FormLabel>
        <Input
          isRequired={true}
          variant="auth"
          fontSize="sm"
          ms={{ base: "0px", md: "0px" }}
          type="text"
          placeholder="credential"
          value={credential}
          onChange={(e) => {
            setCredential(e.target.value);
          }}
          mb="24px"
          fontWeight="500"
          size="lg"
        />
        <FormLabel
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="8px"
        >
          serviceType<Text color={brandStars}>*</Text>
        </FormLabel>
        <Input
          isRequired={true}
          variant="auth"
          fontSize="sm"
          ms={{ base: "0px", md: "0px" }}
          type="text"
          placeholder="serviceType"
          value={serviceType}
          onChange={(e) => {
            setServiceType(e.target.value);
          }}
          mb="24px"
          fontWeight="500"
          size="lg"
        />
        <FormLabel
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="8px"
        >
          repository<Text color={brandStars}>*</Text>
        </FormLabel>
        <Input
          isRequired={true}
          variant="auth"
          fontSize="sm"
          ms={{ base: "0px", md: "0px" }}
          type="text"
          placeholder="repository"
          value={repository}
          onChange={(e) => {
            setRepository(e.target.value);
          }}
          mb="24px"
          fontWeight="500"
          size="lg"
        />
        <FormLabel
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="8px"
        >
          remark<Text color={brandStars}>*</Text>
        </FormLabel>
        <Input
          isRequired={true}
          variant="auth"
          fontSize="sm"
          ms={{ base: "0px", md: "0px" }}
          type="text"
          placeholder="remark"
          value={remark}
          onChange={(e) => {
            setRemark(e.target.value);
          }}
          mb="24px"
          fontWeight="500"
          size="lg"
        />
        <FormLabel
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="8px"
        >
          todo<Text color={brandStars}>*</Text>
        </FormLabel>
        <Input
          isRequired={true}
          variant="auth"
          fontSize="sm"
          ms={{ base: "0px", md: "0px" }}
          type="text"
          placeholder="todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          mb="24px"
          fontWeight="500"
          size="lg"
        />
        <Button
          onClick={handleSaveClick}
          fontSize="sm"
          variant="brand"
          fontWeight="500"
          w="100%"
          h="50"
          mb="24px"
        >
          Save
        </Button>
      </FormControl>
    </Box>
    </Card>
  );
}
