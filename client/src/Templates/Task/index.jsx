import React, { useEffect, useState } from 'react';
import {
  Box,
  Stack,
  Heading,
  Container,
  Input,
  Button,
  SimpleGrid,
  useColorModeValue,
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  Textarea,
  ListItem
} from '@chakra-ui/react';
import api from '../../services/api';
import Cards from '../../components/Cards';

function Task() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTask = async () => {
      try {
        const { status, data } = await api.get('/user');
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadTask();
  }, []);

  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          {tasks.length != 0 && tasks.map(task => (
            <Cards key={task.id} >
              <ListItem>{task.login}</ListItem>
              <ListItem>{task.senha}</ListItem>
              {/* <ListItem>{task.dataInicio}</ListItem>
                <ListItem>{task.dataFim}</ListItem>
                <ListItem>{task.status}</ListItem> */}
            </Cards>
          ))}
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Crie sua tarefa
            </Heading>
          </Stack>
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            borderRadius="lg"
            p={8}
            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
            shadow="base">
            <VStack spacing={5}>
              <FormControl >
                <FormLabel>Nome</FormLabel>
                <InputGroup>

                  <Input type="text" name="nome" placeholder="Nome da atividade" />
                </InputGroup>
              </FormControl>

              <FormControl >
                <FormLabel>Descrição:</FormLabel>
                <Textarea
                  name="descricao"
                  placeholder="ex: Aniversario de Jó"
                  rows={6}
                  resize="none"
                />
              </FormControl>
              <FormControl >
                <FormLabel>Data Inicio</FormLabel>
                <InputGroup>

                  <Input
                    type="date"
                    name="dataInicio"
                  />
                </InputGroup>
              </FormControl>
              <FormControl >
                <FormLabel>Data Fim</FormLabel>
                <InputGroup>
                  <Input
                    type="date"
                    name="DataFim"
                  />
                </InputGroup>
              </FormControl>

              <Button
                colorScheme="blue"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: 'blue.500',
                }}
                isFullWidth>
                Cadastre sua tarefa!
              </Button>
            </VStack>


          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Task;