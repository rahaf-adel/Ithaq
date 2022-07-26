import React , {useState} from 'react'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
export default function AddEmployee() {
  const toast = useToast()
  const [img, setImg] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [job, setJob] = useState("")
  const [linkedin, setlinkedIn] = useState("")

  const putImg = (e) => {
    setImg(e.target.value);
  };
  const putName = (e) => {
    setName(e.target.value);
  };
  const putCompany = (e) => {
    setCompany(e.target.value);
  };
  const putJob = (e) => {
    setJob(e.target.value);
  };
  const putLinkedIn= (e)=>{
    setlinkedIn(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted from ------>");
    axios
      .post("https://62d3e391cd960e45d44f818f.mockapi.io/Ithaq", {
        img: img,
        name: name,
        company:company,
        job:job,
        linkedin:linkedin
      })
      .then((respons) => {
        console.log(respons.data);
        // alert(respons.data.msg);
        toast({
          title: 'Added Succesfully.',
          status: 'success',
          position: "top",
          duration: 7000,
          isClosable: true,
        })
          redirect();
      })
      .catch((err) => {
        console.log(err);
        console.log("err");
        alert(err.respons.data.error.message);
      });
  };
  
  const navigate = useNavigate();
  function redirect() {
    navigate("/Employees");
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Add Employee</Heading>
        </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white')}
            boxShadow={'lg'}
            p={20}
          >
             <form>
            <Stack spacing={4}>
              <FormControl id="name">
                <FormLabel>Employee Name</FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="text"
                  name="name"
                  onChange={putName}
                  required
                />
              </FormControl>
              <FormControl id="job">
                <FormLabel> Position </FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="text"
                  name="job"
                  onChange={putJob}
                  required
                />
              </FormControl>
              <FormControl id="company">
                <FormLabel> Company </FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="text"
                  name="company"
                  onChange={putCompany}
                  required
                />
              </FormControl>
              <FormControl id="linkedin">
                <FormLabel> Linked In </FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="url"
                  name="linkedin"
                  onChange={putLinkedIn}
                  required
                />
              </FormControl>
              <FormControl id="img">
                <FormLabel> Avatar </FormLabel>
                <input 
                  type="file"
                  name="img"
                   onChange={putImg}
                  required
                />
              </FormControl>
              <Stack spacing={10}>
               
                <Button
                  bg={'#1B668E'}
                  color={'white'}
                  _hover={{
                    bg: '#1B668E',
                    color:"white"
                  }}
                  onClick={handelSubmit}
                >
                 Add Employee
                </Button>
              </Stack>
            </Stack>
            </form>
          </Box>
      </Stack>
    </Flex>
  )
}
