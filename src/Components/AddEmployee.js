import React from 'react'
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
import { NavLink } from 'react-router-dom';
export default function AddEmployee() {
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
             {/* <form onClick={handleSubmit}> */}
             <form>

            <Stack spacing={4}>
              <FormControl id="name">
                <FormLabel>Employee Name</FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="text"
                  name="name"
                  // value={"formValue.username"}
                  // onChange={handleChange}
                  required
                />
              </FormControl>
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
              <FormControl id="linkedin">
                <FormLabel> Linked In </FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="url"
                  name="linkedin"
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
              <FormControl id="avatar">
                <FormLabel> Avatar </FormLabel>
                <input
                  type="file"
                  name="avatar"
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
