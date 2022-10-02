import { Box, Button, Checkbox, FormControl, FormLabel, Grid, GridItem, Input,Select,Stack,Text, } from "@chakra-ui/react";
import React from "react";
const handleChange=()=>{

}

function SignUp(){
    return(
        <div>
          <Box width="80%"margin="auto">
          <Text marginLeft="200px" fontSize="40px">Food Lover? Sign Up Now</Text>
          <Text   marginLeft="200px"fontSize="15px">KindMeal is a fun, exciting and cool new way for you to show your 
          compassion towards animals. We collaborate with kind restaurants and cafes across 
          the nation to bring you delicious meat-free foods that will not only 
          help save precious animal lives, 
          but improve your health and save your money at the same time!</Text>
          </Box>
           
            <Grid templateColumns="repeat(3,1fr)" gap={2} w="80%" margin="auto" marginTop="40px" >
                <GridItem  colSpan={{base:3,lg:1}}>
                    <FormControl>
                   <Text marginLeft="200px" marginTop="40px" fontSize="20px" > Your Name</Text>
                    </FormControl>
                </GridItem>
            
  <GridItem  colSpan={{base:3,lg:1}} >
  <FormControl>
  
    <FormLabel>First Name</FormLabel>
    <Input  
    type="text"
  
    name="name"
    //value={name}
    onChange={handleChange}
    />
  </FormControl>

  </GridItem>
  <GridItem  colSpan={{base:3,lg:1}} >
  <FormControl>
    <FormLabel>Last Name</FormLabel>
    <Input  
    type="text"
   
    name="name"
    //value={name}
    onChange={handleChange}
    />
  </FormControl>

  </GridItem>
{/* -------------------------------------2------------------------------------------ */}
  <GridItem  colSpan={{base:2,lg:1}}>
                    <FormControl>
                   <Text marginLeft="200px" marginTop="40px" fontSize="20px" > Email</Text>
                    </FormControl>
                </GridItem>
            
  <GridItem  colSpan={{base:2,lg:2}}  >
  <FormControl>
  
    <FormLabel>	
Your email must be correct to receive activation email</FormLabel>
    <Input  
    type="text"
   
    name="name"
    //value={name}
    onChange={handleChange}
    />
  </FormControl>

  </GridItem>
  {/* -------------------------------------3------------------------------------------ */}
  <GridItem  colSpan={{base:2,lg:1}}>
                    <FormControl>
                   <Text marginLeft="200px" marginTop="10px" fontSize="20px" > Re-Enter Email</Text>
                    </FormControl>
                </GridItem>
            
  <GridItem  colSpan={{base:2,lg:2}}  >
  <FormControl>
  
   
    <Input  
    type="text"
   
    name="name"
    //value={name}
    onChange={handleChange}
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
    onChange={handleChange}
    />
  </FormControl>

  </GridItem>
  {/* -------------------------------------5------------------------------------------ */}
  <GridItem  colSpan={{base:2,lg:1}}>
                    <FormControl>
                   <Text marginLeft="200px" marginTop="10px" fontSize="20px" > Username</Text>
                    </FormControl>
                </GridItem>
            
  <GridItem  colSpan={{base:2,lg:2}}  >
  <FormControl>
  
    
    <Input  
    type="text"
  
    name="name"
    //value={name}
    onChange={handleChange}
    />
  </FormControl>

  </GridItem>

   {/* -------------------------------------6------------------------------------------ */}
   <GridItem  colSpan={{base:2,lg:1}}>
                    <FormControl>
                   <Text marginLeft="200px" marginTop="10px" fontSize="20px" > Country</Text>
                    </FormControl>
                </GridItem>
            
  <GridItem  colSpan={{base:2,lg:2}}  >
  <FormControl>
  
    
    <Select  
    type="text"
  
    name="name"
    //value={name}
    onChange={handleChange}
    > 
    <option value="india">India</option>
    <option value="china">China</option>
    <option value="usa">USA</option>
    <option value="uae">UAE</option>
    
    
    </Select>
  </FormControl>

  </GridItem>

  {/* -------------------------------------7------------------------------------------ */}
  <GridItem  colSpan={{base:2,lg:1}}>
                    <FormControl>
                   <Text marginLeft="200px" marginTop="10px" fontSize="20px" > State</Text>
                    </FormControl>
                </GridItem>
            
  <GridItem  colSpan={{base:2,lg:2}}  >
  <FormControl>
  
    
    <Select  
    type="text"
  
    name="name"
    //value={name}
    onChange={handleChange}
    > 
    <option value="karnataka">Karnataka</option>
    <option value="kerala">Kerala</option>
    <option value="delhi">Delhi</option>
    <option value="goa">Goa</option>
    
    
    </Select>
  </FormControl>

  </GridItem>

  {/* -------------------------------------8------------------------------------------ */}
  <GridItem  colSpan={{base:2,lg:1}}>
                    <FormControl>
                   <Text marginLeft="200px" marginTop="10px" fontSize="20px" > Gender</Text>
                    </FormControl>
                </GridItem>
            
  <GridItem  colSpan={{base:2,lg:2}}  >
  <FormControl>
  
    
  <Stack spacing={5} direction='row' marginTop="15px">
  <Checkbox  >
    Male
  </Checkbox>
  <Checkbox  >
    Female
  </Checkbox>
</Stack>
  </FormControl>

  </GridItem>

  {/* -------------------------------------9------------------------------------------ */}
  <GridItem  colSpan={{base:2,lg:1}}>
                    <FormControl>
                   <Text marginLeft="200px" marginTop="10px" fontSize="20px" > </Text>
                    </FormControl>
                </GridItem>
            
  <GridItem  colSpan={{base:2,lg:2}}  >
  <FormControl>
  
  <Button colorScheme='red' size='lg'>
    JOIN NOW
  </Button>
    
  </FormControl>

  </GridItem>

  
  
</Grid>



        </div>
    )
}
export default SignUp