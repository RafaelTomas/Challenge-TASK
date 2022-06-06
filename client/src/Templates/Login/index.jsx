import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link as LinkChakra,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Controller, useForm } from 'react-hook-form';
import api from '../../services/api';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit, formState } = useForm({ mode: 'onChange' });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post('/login', formData);
      localStorage.setItem('auth.token', data.token);
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Login
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            acesse suas tarefas ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="login" isRequired>
                <FormLabel>Login</FormLabel>
                <Controller
                  name="login"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <Input type="text" {...field} />}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Controller
                    name="senha"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input type={showPassword ? 'text' : 'password'} {...field} />}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  isDisabled={!formState.isValid}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  <Link to='/task'> Login </Link>
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Não tem um usuario?<LinkChakra color={'blue.400'}> <Link to='/register'>Registre-se</Link></LinkChakra>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login;