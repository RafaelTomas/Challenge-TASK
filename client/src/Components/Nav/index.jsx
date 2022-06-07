import React from 'react';
import {
  Box,
  Flex,
  Link as LinkChakra,
  IconButton,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth';

const NavLink = () => (
  <LinkChakra
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}>
    <Button bg='blue.400' onClick={() => AuthService.logout()} ><Link to='/login'> Sign out</Link></Button>
  </LinkChakra>
);

function Nav() {

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
          />
          <Stack spacing={8} alignItems={'center'}>
            <Stack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <NavLink>{<Link to='/login' />}</NavLink>
            </Stack>
          </Stack>
        </Flex>
      </Box>

    </>
  );
}

export default Nav;