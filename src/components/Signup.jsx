import {Container,VStack,Input,Heading,Text,Link,Button,} from "@chakra-ui/react"
import React from 'react'


const Signup = () => {
  return(
   <Container maxw={"container.xl"} h={"100vh"} p={"16"}>



    <form> 
   
   <VStack 
   alignItems={"stretch"} 
   spacing={"8"} 
   w={['full','96']}
   m={"auto"}
    my={"16"}>
        <Heading>VIDEO HUB</Heading>


        <Input
       placeholder={"Name"} 
       type={"text"}
        required focusBorderColor={'purple.500'}/>

      <Input
       placeholder={"Email"} 
       type={"email"}
        required focusBorderColor={'purple.500'}/>
<Input
       placeholder={"Password"} 
       type={"password"}
        required focusBorderColor={'purple.500'}/>

<Button colorScheme={'purple'} type={'submit'}>
Sign up
</Button>

<Text textAlign={'right'}>
Already Signed Up?{}
<Button variant={'login'} colorScheme={'purple'}>  
<Link to={'/signup'}>Login In </Link>
</Button>
</Text>
</VStack>
</form>
</Container>
  )
};

export default Signup;
