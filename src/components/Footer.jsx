import {Box,Stack,VStack,Heading,HStack,Button,Input,Text} from '@chakra-ui/react';
import React from 'react'
import {AiOutlineSend} from "react-icons/ai";

const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={'white'}>

<Stack direction={["column",'row',]}> 
<VStack alignItems={"stretch"} w={"full"} px={"4"}>
<Heading size="md" textTransform={"uppercase"} textAlign={'center'}> 
Subscribe to get updates
</Heading>
<HStack
borderBottom={"2px solid white"} py="2">
 <Input placeholder='Enter Email-Here...' border={"none"}
 borderRadius="none" outline={"none"} focousBorderColor="none"/>   
<Button p={"0"}
colorScheme={"purple"} 
variant={"ghost"} 
borderRadius={"0 20px 20px 0"}   >
<AiOutlineSend/>
</Button>
</HStack>
</VStack>
<VStack w={"full"} borderLeft={["none","1px solid white"]} 
borderRight={["none","1px solid white"]}  >


<Heading textTransform={"uppercase"} textAlign={"center"}>
    
    VIDEO HUB </Heading>

    <Text> All right recieved   
    </Text>
</VStack>

<VStack w={'full'}>
<Heading size={"md"} textTransform={'uppercase'}> 
      Social Media
</Heading>
<Button variant={"link"} colorScheme={"whiteAlpha"}> </Button>
<a target={'black'} href="https://youtube.com/6packprogrammer">Youtube  </a>

<Button variant={"link"} colorScheme={"whiteAlpha"}> </Button>
<a target={'black'}  href="https://instagram.com/meanbhisingh">Instagram </a>

<Button variant={"link"} colorScheme={"whiteAlpha"}> </Button>
<a href="https://github.com/meanbhisingh">github  </a>


</VStack>
</Stack>
  </Box>

  
}

export default Footer
