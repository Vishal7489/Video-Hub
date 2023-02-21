import {Box,Heading,Image,Container,Stack,Text} from '@chakra-ui/react';
import React from 'react';
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";

const Home = () => {
  return (
  <Box>
 <MyCarousel/>
<Container maxW={'container.xl'}  minH={"100vh"} p="16">
<Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Services</Heading>
<Stack h="full" p={"4"} alignItems={"center"}
direction={['column','row']}
>
  <Image src={img5} h={["40","400"]} filter={'hue-rotate(-130deg)'}/>

<Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
There are many variations of passages of Lorem Ipsum available, 
but the majority have suffered alteration in some form, by injected humour,
 or randomised words which don't look even slightly believable. 
 If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
   combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

</Text>

</Stack>


</Container>
  </Box>
  );
};
const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4xl",

}




  

const MyCarousel = ()=>(
    <Carousel 
autoPlay
infiniteLoop
interval={1000} 
 showStatus={false} 
 showThumbs={false} 
>
<Box w="full" h={'100vh'}>
<Image src={img1}/>
<Heading bgColor={"blackAlpha.600"} color={'white'}{...headingOptions}>Watch The Furture</Heading>
</Box>

<Box w="full" h={'100vh'}>
<Image src={img2}/>
<Heading bgColor={"Alphawhite.900"} color={'black'}{...headingOptions}>Future is Gaming</Heading>
</Box>

<Box w="full" h={'100vh'}>
<Image src={img3}/>
<Heading bgColor={"Alphawhite.900"} color={'black'}{...headingOptions}>Gaming on Console</Heading>
</Box>

<Box w="full" h={'100vh'}>
<Image src={img4}/>
<Heading bgColor={"Alphawhite.900"} color={'black'}{...headingOptions}>Night life is Cool</Heading>
</Box>



    </Carousel>
);

export default Home;
