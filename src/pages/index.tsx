import Head from 'next/head';
import { Box, Flex, Image, Heading, Stack } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>MCA Example App</title>
      </Head>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: '1200px' }}
        m="0 auto"
      >
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          mb={8}
          p={8}
          bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
          color={['white', 'white', 'primary.700', 'primary.700']}
        ></Flex>
        <Flex
          align="center"
          justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
          direction={{ base: 'column-reverse', md: 'row' }}
          wrap="nowrap"
          minH="70vh"
          px={8}
          mb={16}
        >
          <Stack
            spacing={4}
            w={{ base: '80%', md: '40%' }}
            align={['center', 'center', 'flex-start', 'flex-start']}
          >
            <Heading
              as="h1"
              size="xl"
              fontWeight="bold"
              color="primary.800"
              textAlign={['center', 'center', 'left', 'left']}
            >
              MCA Example App
            </Heading>
            <Heading
              as="h2"
              size="md"
              color="primary.800"
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              textAlign={['center', 'center', 'left', 'left']}
            >
              Working with NextJS and Typescript
            </Heading>
          </Stack>
          <Box
            w={{ base: '80%', sm: '60%', md: '50%' }}
            mb={{ base: 12, md: 0 }}
          >
            <Image
              src="mca_square_logo.png"
              alt="image"
              sizes="100%"
              rounded="1rem"
              shadow="2xl"
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
