import {Container,VStack,Input,Heading,Text,Link,Button} from "@chakra-ui/react"
import React from 'react'


const Login = () => {
  return(
   <Container maxw={"container.xl"} h={"100vh"} p={"16"}>



    <form> 
   
   <VStack 
   alignItems={"stretch"} 
   spacing={"8"} 
   w={['full','96']}
   m={"auto"}
    my={"16"}>
        <Heading>Welcome Back</Heading>

        <Input
       placeholder={"Name"} 
       type={"name"}
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
Log In
</Button>

<Text textAlign={'right'}>
New User?
<Button variant={'link'} colorScheme={'purple'}>  
<Link to={'/signup'}>Sign Up</Link>
</Button>


</Text>
    </VStack>

   </form>
   </Container>
  )
};
export default Login