import React,{useState} from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
export default function AddJopOffer() {
  const toast = useToast()
  const [img, setImg] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [job, setJob] = useState("")
  const [linkedin, setlinkedIn] = useState("")
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Job Offer</Heading>
        </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white')}
            boxShadow={'lg'}
            p={20}
          >
             {/* <form onClick={handleSubmit}> */}
             <form>

            <Stack spacing={4}>
              <FormControl id="position">
                <FormLabel> Position </FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="text"
                  name="position"
                  // value={"formValue.password"}
                  // onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl id="Description">
                <FormLabel> Description </FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="url"
                  name="Description"
                  // value={"formValue.password"}
                  // onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl id="date">
                <FormLabel> date </FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="date"
                  name="date"
                  // value={"formValue.password"}
                  // onChange={handleChange}
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
                  as={NavLink}
                  to="#"
                >
                 Add Job
                </Button>
              </Stack>
            </Stack>
            </form>
          </Box>
      </Stack>
    </Flex>
  )
}
