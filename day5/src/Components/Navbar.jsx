import { background, Box, Flex, Spacer ,Text,Image, Button,HStack} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";

function Navbar(){

    return(
        <div>
        <Flex>
        <Spacer />
    <Box w="300px">
        <Image src="https://www.kindmeal.my/images/logo-kindmeal.png" alt=""/>
    </Box>
    <Spacer />
    <Box w='190px' h='10' p='20px'  >
    <Flex >
    <Box  w='40px' alignItems='center' cursor="pointer">
        <Image src="https://www.kindmeal.my/images/follow_blog_grey.png" alt=""/>
    </Box>
    <Spacer />
    <Box  w='40px' cursor="pointer">
        <Image src="https://www.kindmeal.my/images/follow_facebook_grey.png" alt=""/>
    </Box>
    <Spacer />
    <Box  w='40px' cursor="pointer">
   <Image src="https://www.kindmeal.my/images/follow_twitter_grey.png" alt=""/>
       </Box>
  </Flex>
    </Box>
    <Spacer />

    <Box w='380px' h='10' p='30px'pr="400px" >
       <HStack spacing='35px'>
       <Box  w='40px' alignItems='center'  >
       <Link to={"/login"}>
      Login
       </Link>
       
    </Box>
    <Spacer />
    <Box  w='20px' alignItems='center' cursor="pointer"  >
    <Button colorScheme='facebook' size='xs' pl="10px" pr="10px" fontSize="13px">Facebook</Button>
       
    </Box>
    <Spacer />
    <Box  w='20px' alignItems='center' cursor="pointer"  >
    <Button colorScheme='twitter' size='xs' pl="10px" pr="10px" fontSize="13px">Twitter</Button>
       
    </Box>
    <Spacer />
    <Box  w='60px' alignItems='center' cursor="pointer" >
       <Link to={"/signup"}>
      SignUp
       </Link>
       
    </Box>
    <Spacer />
       </HStack>

    </Box>
    <Spacer />
  </Flex>
        
        <Flex margin="auto" 
        width="100%" 
        background="#68D391"
       fontSize="20px"
       height="40px"
       alignItems='center'
     >
        <Spacer />
 <Link to={"/"}><Text color="white">Home</Text></Link>

<Spacer />
<Link   color="white" to={"/mealdeals"}><Text color="white">Meal Deals</Text></Link>
<Spacer />
<Link to={"/kindmoments"}><Text color="white">KindMoments</Text></Link>
<Spacer />
<Link to={"/hotpicks"}><Text color="white">Hot Picks</Text></Link>
<Spacer />
<Link to={"/recipes"}><Text color="white">Recipes</Text></Link>
<Spacer />
<Link to={"/directory"}><Text color="white">Directory</Text></Link>
<Spacer />
<Link to={"/articles"}><Text color="white">Articles</Text></Link>
<Spacer />
<Link to={"/help"}><Text color="white">Help</Text></Link>
<Spacer />
</Flex>
</div>
    )
}
export default Navbar