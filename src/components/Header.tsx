import React from 'react';
import Link from 'next/link';
import { Flex, Image } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      w="100%"
      h="24"
      maxW={1440}
      mx="auto"
      px="6"
      align="center"
      justify="center"
    >
      <Link href="/">
        <a>
          <Image src="/logo.svg" alt="logo" w="44" />
        </a>
      </Link>
    </Flex>
  );
};

export { Header };
