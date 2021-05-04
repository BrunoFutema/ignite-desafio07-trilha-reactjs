import React from 'react';
import Head from 'next/head';
import { Flex, Image, Text } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

const Home: React.FC = () => {
  return (
    <Flex direction="column" h="100vh">
      <Head>
        <title>Bem-vindo ao World Trip</title>
      </Head>

      <Header />

      <Banner />

      <Flex as="main" w="100%" h="100%" px="32" py="16" direction="column">
        <Flex
          as="section"
          w="100%"
          h="32"
          align="center"
          justify="space-between"
        >
          <Flex direction="column" align="center" justify="center" minW="140px">
            <Image src="/cocktail.svg" alt="Cocktail" w="14" h="16" />

            <Text as="strong" color="#47585B" mt="6">
              vida noturna
            </Text>
          </Flex>

          <Flex direction="column" align="center" justify="center" minW="140px">
            <Image src="/surf.svg" alt="Surf" w="14" h="16" />

            <Text as="strong" color="#47585B" mt="6">
              praia
            </Text>
          </Flex>

          <Flex direction="column" align="center" justify="center" minW="140px">
            <Image src="/building.svg" alt="Building" w="14" h="16" />

            <Text as="strong" color="#47585B" mt="6">
              moderno
            </Text>
          </Flex>

          <Flex direction="column" align="center" justify="center" minW="140px">
            <Image src="/museum.svg" alt="Museum" w="14" h="16" />

            <Text as="strong" color="#47585B" mt="6">
              clássico
            </Text>
          </Flex>

          <Flex direction="column" align="center" justify="center" minW="140px">
            <Image src="/earth.svg" alt="Earth" w="14" h="16" />

            <Text as="strong" color="#47585B" mt="6">
              e mais...
            </Text>
          </Flex>
        </Flex>

        <Flex
          as="hr"
          bg="#47585B"
          borderWidth="1px"
          borderColor="#47585B"
          w="16"
          mx="auto"
          my="10"
        />

        <Flex as="section" w="100%" h="32" align="center" justify="center">
          <Text
            fontSize="32"
            fontWeight="medium"
            textAlign="center"
            color="#47585B"
          >
            Vamos nessa?
            <br />
            Então escolha seu continente
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
