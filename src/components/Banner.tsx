import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';

const Banner: React.FC = () => {
  return (
    <Flex
      w="100%"
      h="72"
      px="32"
      align="center"
      justify="space-between"
      bgImg="url('/background.svg')"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Flex direction="column">
        <Text
          as="span"
          color="#F5F8FA"
          fontSize="32"
          fontWeight="medium"
          display="block"
          mb="4"
        >
          5 Continentes,
          <br />
          infinitas possibilidades.
        </Text>

        <Text
          color="#DADADA"
          fontSize="18"
          fontWeight="normal"
          display="block"
          maxW="480px"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>

      <Image src="/airplane.svg" alt="Banner" mt="16" />
    </Flex>
  );
};

export { Banner };
