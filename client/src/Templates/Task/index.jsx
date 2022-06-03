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
import { Controller, useForm } from 'react-hook-form';

function Task() {
  const [tasks, setTasks] = useState([]);
  const { control, handleSubmit, formState } = useForm({ mode: 'onChange' });

  const onSubmit = async (formData) => {
    try {
      console.log(formData);
      const { data } = await api.post('/user/14/task', formData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    const loadTask = async () => {
      try { 
        const { data } = await api.get('/user/14/task');
        console.log(data);
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
              <ListItem>{task.nome}</ListItem>
              <ListItem>{task.descricao}</ListItem>
              <ListItem>{task.data_inicio}</ListItem>
              <ListItem>{task.data_fim}</ListItem>
              <ListItem>{task.status}</ListItem>
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl >
                  <FormLabel>Nome</FormLabel>
                  <InputGroup>
                    <Controller
                      name="nome"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <Input type="text" placeholder="Nome da atividade" {...field} />}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl >
                  <FormLabel>Descrição:</FormLabel>
                  <InputGroup>
                    <Controller
                      name="descricao"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <Textarea resize="none" rows='6' placeholder="ex: Aniversario de Jó"
                        {...field} />}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl >
                  <FormLabel>Status</FormLabel>
                  <InputGroup>
                    <Controller
                      name="status"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <Input
                        type="text"
                        {...field} />}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl >
                  <FormLabel>Data Inicio</FormLabel>
                  <InputGroup>
                    <Controller
                      name="data_inicio"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <Input
                        type="text"
                        {...field} />}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl >
                  <FormLabel>Data Fim</FormLabel>
                  <InputGroup>
                    <Controller
                      name="data_fim"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <Input
                        type="text"
                        {...field} />}
                    />
                  </InputGroup>
                </FormControl>
                <Button
                  type="submit"
                  isDisabled={!formState.isValid}
                  colorScheme="blue"
                  bg="blue.400"
                  color="white"
                  _hover={{
                    bg: 'blue.500',
                  }}
                  isFullWidth>
                  Cadastre sua tarefa!
                </Button>
              </form>
            </VStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Task;