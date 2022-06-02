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
} from '@chakra-ui/react';
import { useEffect,useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import api from '../../services/api';
import { use } from 'express/lib/router';

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [login, setLogin] = useState([])
    const [senha, setSenha] = useState([])
    
    useEffect(() => {
        const registerUser = async () => {
          try {
            const { status, data } = await api.post('/user', {
                login: login
                senha: senha
            })
            setUser(data)
          } catch (error) {
            console.error(error)
          }
        }
        registerUser()
      }, [])

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Registre-se
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        Crie sua conta para acessar suas tarefas ✌️
                    </Text>
                </Stack>
                <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4} >
                <FormControl id="login" isRequired>
                    <FormLabel>Login</FormLabel>
                    <Input type="login" onChange={({})} />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Senha</FormLabel>
                    <InputGroup>
                        <Input type={showPassword ? 'text' : 'password'} />
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
                        loadingText="Submitting"
                        size="lg"
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Inscrever-se
                    </Button>
                </Stack>
                <Stack pt={6}>
                    <Text align={'center'}>
                        Já tem um usuario?<LinkChakra color={'blue.400'}> Login </LinkChakra>
                    </Text>
                </Stack>
            </Stack>
        </Box>
            </Stack>
        </Flex>
    );
}

export default Register;