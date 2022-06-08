import React, { useEffect, useState } from 'react';
import {
  Box,
  Stack,
  Heading,
  Container,
  SimpleGrid,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import api from '../../api/';
import Card from '../../Components/Cards';
import TaskForm from '../../Components/TaskForm';

function Task() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onDelete = async (task) => {
    await api.delete(`/task/${task.id}`);
    setRefresh(!refresh);
  };

  const onOpenModal = (task) => {
    setEditingTask(task);
    onOpen();
  };

  const onCreate = async (formData) => {
    try {
      const { data } = await api.post('/task/', formData);
      console.log(data);
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
    }
  };

  const onEdit = async (formData) => {
    try {
      const { data } = await api.put(`/task/${editingTask.id}`, formData);
      console.log(data);
      setRefresh(!refresh);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      try {
        const { data } = await api.get('/task/');
        console.log(data);
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadTask();
  }, [refresh]);

  return (
    <Box position={'relative'}
      bg="gray.600">
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ md: 2 }}
        py={{ base: 10, sm: 20, }}>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'm' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ md: '4xl' }}>
              Crie sua tarefa
            </Heading>
          </Stack>
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            borderRadius="m"
            p={4}
            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
            shadow="base">
            <TaskForm onSubmit={onCreate} />
          </Box>
        </Stack>
        <Box>
          {tasks.length != 0 && tasks.map(task => (
            <Card handleEdit={() => onOpenModal(task)} handleDelete={() => onDelete(task)} key={task.id} task={task} />
          ))}
        </Box>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar tarefa: {editingTask && editingTask.nome}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {editingTask && <TaskForm onSubmit={onEdit} task={editingTask} />}
          </ModalBody>
        </ModalContent>
      </Modal>


    </Box>
  );
}

export default Task;