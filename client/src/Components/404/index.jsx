import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Button from '../Button';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, blue.400, blue.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="20px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
      A página que você está procurando parece que não existir :(
      </Text>
   
      <Button
        colorScheme="blue"
        bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
        color="white"
        variant="solid">
        <Link to='/'>Voltar para o login</Link>
      </Button>
    </Box>
  );
}

export default NotFound;