import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Link as LinkChakra,
  Flex,
  Heading,
  Spinner,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import api from '../../api/';
import AuthService from '../../services/auth';

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit, formState } = useForm({ mode: 'onChange' });

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const { data } = await api.post('/user', formData);
      AuthService.setToken(data.token);

      if (data.token) {
        setLoading(false);
        navigate('/task');
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
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
            Registre
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Registre e escreva suas  tarefas ✌️
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
                  isDisabled={loading && !formState.isValid}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  {loading && <Spinner size='sm' mr={2} />} Registre-se

                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  tem um usuario?<LinkChakra color={'blue.400'}> <Link to='/login'>Login</Link></LinkChakra>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Register;