import { Heading, HStack } from "native-base";
import React from "react";

const GeneralHeader = ({ title }) => {
  return (
    <HStack w="full" justifyContent="space-between" mt="12" mb="4" mx="4">
      <Heading size="xl">{title}</Heading>
    </HStack>
  );
};

export default GeneralHeader;
