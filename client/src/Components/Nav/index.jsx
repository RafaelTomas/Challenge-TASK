import React from 'react';
import {
  Box,
  Link as LinkChakra,
  Stack,
} from '@chakra-ui/react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth';

const NavLink = () => (
  <LinkChakra
    px={2}
    py={1}
    rounded={'full'}
    _hover={{
      textDecoration: 'none',
    }}>
    <Button bg='blue.400' onClick={() => AuthService.logout()} ><Link to='/login'> Sign out</Link></Button>
  </LinkChakra>
);

function Nav() {

  return (
    <>
      <Box px={4}>
        <Stack >
          <Stack
            as={'nav'}
            spacing={4}>
            <NavLink>{<Link to='/login' />}</NavLink>
          </Stack>
        </Stack>
      </Box>

    </>
  );
}

export default Nav;