import { Button, FormControl, FormLabel, Grid, GridItem, Input,Text } from "@chakra-ui/react";
import React from "react";

function Login(){
    return(
        <div>
              <Text marginLeft="600px" fontSize="40px">Login </Text>
            <Grid templateColumns="repeat(3,1fr)" gap={2} w="60%" margin="auto" marginTop="40px" >
               
               {/* -------------------------------------2------------------------------------------ */}
  <GridItem  colSpan={{base:2,lg:1}}>
                    <FormControl>
                   <Text marginLeft="200px" marginTop="0px" fontSize="20px" > Email</Text>
                    </FormControl>
                </GridItem>
            
  <GridItem  colSpan={{base:2,lg:2}}  >
  <FormControl>
  
    <Input  
    type="text"
   
    name="name"
    //value={name}
   // onChange={handleChange}
    />
  </FormControl>

  </GridItem>
  {/* -------------------------------------4------------------------------------------ */}
  <GridItem  colSpan={{base:2,lg:1}}>
                    <FormControl>
                   <Text marginLeft="200px" marginTop="10px" fontSize="20px" > Password</Text>
                    </FormControl>
                </GridItem>
            
  <GridItem  colSpan={{base:2,lg:2}}  >
  <FormControl>
  
    <FormLabel></FormLabel>
    <Input  
    type="text"
   
    name="name"
    //value={name}
   // onChange={handleChange}
    />
  </FormControl>

  </GridItem>


  <GridItem  colSpan={{base:2,lg:1}}>
                    <FormControl>
                   <Text marginLeft="200px" marginTop="10px" fontSize="20px" > </Text>
                    </FormControl>
                </GridItem>
            
  <GridItem  colSpan={{base:2,lg:2}}  >
  <FormControl>
  
  <Button colorScheme='red' size='lg'>
    Login
  </Button>
    
  </FormControl>
  </GridItem>



            </Grid>
        </div>
    )
}
export default Login


