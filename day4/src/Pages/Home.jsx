import React, { useEffect } from "react";
import {Box, Flex, Image, Spacer,Text,Button}  from "@chakra-ui/react";

function Home(){
   
    return(
        <div>
          
           <Box width='80%' margin='auto'  boxShadow='dark-lg'>
            <Flex>
         
                <Image src="https://www.kindmeal.my/photos/deal/6/696-5075-m.jpg" alt="" width="70%" height="400px"/>
         
          
                <Image src="https://www.kindmeal.my/photos/shop/3/335-2150-m.jpg" alt="" width="30%" height="400px"/>
          
            </Flex>
            <Box  p="20px">
            <Flex>
            <Spacer />
    <Box width="12%">
    <Image src="https://www.kindmeal.my/photos/deal/6/696-5075-m.jpg" alt=""  height="100px"/>
    </Box>
    <Spacer />
    <Box  width="12%">
    <Image src="https://www.kindmeal.my/photos/deal/7/715-5155-m.jpg" alt=""  height="100px"/>
    </Box>
    <Spacer />
    <Box  width="12%">
    <Image src="https://www.kindmeal.my/photos/deal/5/529-2478-m.jpg" alt=""  height="100px"/>
    </Box>
    <Spacer />
    <Box  width="12%">
    <Image src="https://www.kindmeal.my/photos/deal/7/720-5195-m.jpg" alt=""  height="100px"/>
    </Box>
    <Spacer />
    <Box width="12%">
    <Image src="https://www.kindmeal.my/photos/deal/4/457-2109-m.jpg" alt=""  height="100px"/>
    </Box>
    <Spacer />
    <Box width="12%">
    <Image src="https://www.kindmeal.my/photos/deal/7/724-5208-m.jpg" alt=""  height="100px"/>
    </Box>
    <Spacer />
    <Box  width="12%">
    <Image src="https://www.kindmeal.my/photos/deal/7/704-4734-m.jpg" alt=""  height="100px"/>
    </Box>
    <Spacer />
  </Flex>
  </Box>
  </Box>
{/* ---------------------------------------------2------------------------------------------------ */}
  <Box width="80%" margin="auto" marginTop="30px"  boxShadow='dark-lg'>
    <Box marginTop="10px" marginLeft="20px">
        <Text fontSize='3xl'>Latest News & Videos
          
        </Text>
    </Box>
    <Flex gap={3}>
            <Spacer />
    <Box  width="200px" br="10px">
    <Image  borderRadius='10px' width="200px" src="https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-6/307583882_5740056329387938_8686180043837495004_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=8024bb&_nc_ohc=EpA93b8Qy7sAX-i9ff4&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT8BN50NAJKEGUEDMU7YrJ_d8RlU9YQ2vjcSmZDR1dNVgg&oe=633A00FC" alt=""  height="200px"/>
    <Text fontSize='xs'>Indulge In Bings Banting''s Decadent Desserts Of Bingsu, Cub..</Text>
    </Box>
    <Spacer />
    <Box  width="200px">
    <Image borderRadius='10px'width="200px" src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/302450409_1447446119095671_650723446000958095_n.jpg?stp=dst-jpg_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=ksp6O1xUXLIAX-JRuNS&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT_YjIg6GLP99RntFqoNhAakGcKMveUZ_Vbs96I0zaq3hg&oe=63397C80" alt=""  height="200px"/>
    <Text fontSize='xs'>Ethel The Tortoise''s Bedtime Routine 🐢</Text>
    </Box>
    <Spacer />
    <Box width="200px" >
    <Image borderRadius='10px'width="200px" src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/304779427_454113786736771_1344955773046935629_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=IIpGL-F38DYAX9XgIEC&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT9f5z2KCcTf5KQCrREW8oGIYeYlMOOMy8m9_czOVkoy-A&oe=633ADE6D" alt=""  height="200px"/>
    <Text fontSize='xs'>Watch Sally''s Incredible Transformation</Text>
    </Box>
    <Spacer />
    <Box width="200px" >
    <Image borderRadius='10px'width="200px"src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/74671980_573691586712442_6808626047337103360_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=PQqO7lMlEmMAX9vFzOm&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT9qAr0SUfIZopMak2hR9kwAhVbzILhErGSrFCHCEwAS7Q&oe=633A48D7" alt=""  height="200px"/>
    <Text fontSize='xs'>Nature''s Miracle Orphans: Orphan Koala Plays With Carer</Text>
    </Box>
    <Spacer />
    <Box width="200px">
    <Image borderRadius='10px'width="200px"src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/299563258_384697190303446_2038493280203195929_n.jpg?stp=dst-jpg_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=hBktGk0BERQAX9k15eF&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT8Rr32fPtAmaYL63xhZBNM5371Irkp3MMmxbE342RqzMQ&oe=6339CFC6" alt=""  height="200px"/>
    <Text fontSize='xs'>Unlikely Animal Friendships 🐻‍❄️</Text>
    </Box>
    <Spacer />
    </Flex>



  </Box>

  {/* ---------------------------------------------3------------------------------------------------ */}
  <Box width="80%" margin="auto" marginTop="30px"  boxShadow='dark-lg'>
    <Box marginTop="10px" marginLeft="20px">
        <Text fontSize='3xl'>Yummylicious Moments
          
        </Text>
    </Box>
    <Flex gap={3}>
            <Spacer />
    <Box  width="200px" br="10px">
    <Image  borderRadius='10px' width="200px" src="https://www.kindmeal.my/photos/moment/24/24454-47170-s.jpg" alt=""  height="200px"/>
    <Text textAlign="center" fontSize='md'>Good Food By Gan</Text>
   
    <Text textAlign="center" fontSize='xs'>YeeHuanGan</Text>
    </Box>
    <Spacer />
    <Box  width="200px">
    <Image borderRadius='10px'width="200px" src="https://www.kindmeal.my/photos/moment/24/24451-47163-s.jpg" alt=""  height="200px"/>
    <Text textAlign="center" fontSize='md'>Raw Chef Yin</Text>
   
   <Text textAlign="center" fontSize='xs'>YinYinBoey</Text>
    </Box>
    <Spacer />
    <Box width="200px" >
    <Image borderRadius='10px'width="200px" src="https://www.kindmeal.my/photos/moment/12/12813-16605-s.jpg" alt=""  height="200px"/>
    <Text textAlign="center" fontSize='md'>A Delicious KindMoment</Text>
   
   <Text textAlign="center" fontSize='xs'>CindyChang</Text>
    </Box>
    <Spacer />
    <Box width="200px" >
    <Image borderRadius='10px'width="200px" src="https://www.kindmeal.my/photos/moment/24/24440-47121-s.jpg" alt=""  height="200px"/>
    <Text textAlign="center" fontSize='md'>Ador Cafe</Text>
   
   <Text textAlign="center" fontSize='xs'>ChewLengLeng</Text>
    </Box>
    <Spacer />
    <Box width="200px">
    <Image borderRadius='10px'width="200px" src="https://www.kindmeal.my/photos/moment/24/24439-47120-s.jpg" alt=""  height="200px"/>
    <Text textAlign="center" fontSize='md'>Davina Da Vegan</Text>
   
   <Text textAlign="center" fontSize='xs'>DavinaGoh</Text>
    </Box>
    <Spacer />
    </Flex>
    </Box>

    {/* ---------------------------------------------4------------------------------------------------ */}
  <Box width="80%" margin="auto" marginTop="30px"  boxShadow='dark-lg'>
    <Box marginTop="10px" marginLeft="20px">
        <Text fontSize='3xl'>
      Discover Restaurants
          
        </Text>
    </Box>
    <Flex gap={3}>
            <Spacer />
    <Box  width="200px" br="10px">
    <Image   borderRadius='10px' width="200px" src="https://www.kindmeal.my/photos/item/0/603-9052-s.jpg" alt=""  height="200px"/>
    <Text textAlign="center" fontSize='md'>Bak Kut Teh</Text>
    </Box>
    <Spacer />
    <Box  width="200px">
    <Image  borderRadius='10px'width="200px" src="https://www.kindmeal.my/photos/item/0/498-6302-s.jpg" alt=""  height="200px"/>
    <Text textAlign="center" fontSize='md'>Wild Mushroom Spaghetti</Text>
    </Box>
    <Spacer />
    <Box width="200px" >
    <Image  borderRadius='10px'width="200px" src="https://www.kindmeal.my/photos/item/0/201-1916-s.jpg" alt=""  height="200px"/>
    <Text textAlign="center" fontSize='md'>Bun Family</Text>
    </Box>
    <Spacer />
    <Box width="200px" >
    <Image   borderRadius='10px'width="200px" src="https://www.kindmeal.my/photos/item/0/381-4198-s.jpg" alt=""  height="200px"/>
    <Text textAlign="center" fontSize='md'>Green Tea Latte</Text>
    </Box>
    <Spacer />
    <Box width="200px">
    <Image   borderRadius='10px'width="200px" src="https://www.kindmeal.my/photos/item/0/530-6878-s.jpg" alt=""  height="200px"/>
    <Text textAlign="center" fontSize='md'>Black Bean Fish</Text>
    </Box>
    <Spacer />
    </Flex>



  </Box>


    {/* ---------------------------------------------5------------------------------------------------ */}
    <Box width="80%" margin="auto" marginTop="30px"  boxShadow='dark-lg'>
    <Box marginTop="10px" marginLeft="20px">
        <Text fontSize='3xl'>
        Amazing Superheroes
          
        </Text>
    </Box>
    <Flex gap={3}>
            <Spacer />
    <Box  width="200px" br="10px">
    <Image  borderRadius='10px' width="200px" src="https://www.kindmeal.my/photos/member/38/38866-m.jpg" alt=""  height="200px"/>
    <Text textAlign="center" fontSize='md'>QinShu</Text>
    </Box>
    <Spacer />
    <Box  width="200px">
    <Image borderRadius='10px'width="200px" src="https://www.kindmeal.my/photos/member/11/11296-m.jpg" alt=""  height="200px"/>
    <Text textAlign="center" fontSize='md'>LimEwe</Text>
    </Box>
    <Spacer />
    <Box width="200px" >
    <Image borderRadius='10px'width="200px" src="https://www.kindmeal.my/photos/member/17/17901-m.jpg" alt=""  height="200px"/>
    <Text textAlign="center" fontSize='md'>StanleyWong</Text>
    </Box>
    <Spacer />
    <Box width="200px" >
    <Image borderRadius='10px'width="200px" src="https://www.kindmeal.my/photos/member/16/16140-m.jpg" alt=""  height="200px"/>
    <Text  textAlign="center" fontSize='md'>KenixKua</Text>
    </Box>
    <Spacer />
    <Box width="200px">
    <Image borderRadius='10px'width="200px" src="https://www.kindmeal.my/photos/member/11/11296-m.jpg" alt=""  height="200px"/>
    <Text textAlign="center" fontSize='md'>JacquelineHeng</Text>
    </Box>
    <Spacer />
    </Flex>



  </Box>
  <Box width="full" margin="auto" marginTop="60px"  boxShadow='dark-lg'>
    <Box  p="50px" >
    <Text  textAlign="center" fontSize='4xl'>Introducing Malaysia's Pioneering Meat-Free Lifestyle Platform</Text>
    </Box>
    <Box   display="flex"  marginLeft="400px">
    <Text   marginTop="10px"fontSize='xl'>Brought to you by</Text>
    <Image  marginLeft="50px" width="300px" src="https://www.kindmeal.my/images/logo-petfinder-v2.png" alt=""/>
    </Box>
    <Box  p="30px" >
    <Text  textAlign="center" fontSize='3xl'>Instant coupon & dining. No upfront coupon payment, booking or printing.</Text>
    </Box>
    {/* ------------------------6-----------------------------------------------------------------*/}
    <Box>
    <Flex gap={8} width="80%" margin="auto" marginRight="200px">
            <Spacer />
    <Box  width="200px" br="10px" boxShadow='dark-lg' borderRadius='10px'>
    <Image marginLeft="30px"    borderRadius='10px' width="150px"p="10px" src="https://www.kindmeal.my/images/intro_deal.png" alt=""  height="150px"/>
    <Text textAlign="center" fontSize='md' fontWeight="bold">Get Great Deals</Text>
    <Text textAlign="center"  fontSize='sm'>Show our FREE digital coupons to instantly enjoy exciting deals</Text>
    </Box>
    <Box  width="200px" br="10px"  boxShadow='dark-lg'borderRadius='10px'>
    <Image marginLeft="30px"  borderRadius='10px' p="10px" width="150px" src="https://www.kindmeal.my/images/intro_kindmoment.png" alt=""  height="150px"/>
    <Text textAlign="center" fontSize='md' fontWeight="bold">Share KindMoments</Text>
    <Text textAlign="center" fontSize='sm'>Spread the joy by sharing your yummy dining moments</Text>
    </Box>
    <Box  width="200px" br="10px"  boxShadow='dark-lg'borderRadius='10px'>
    <Image marginLeft="30px"  borderRadius='10px' p="10px" width="150px" src="https://www.kindmeal.my/images/intro_menu.png" alt=""  height="150px"/>
    <Text textAlign="center" fontSize='md'fontWeight="bold">Discover Delicious Food</Text>
    <Text textAlign="center" fontSize='sm'>Explore the latest exquisite offerings and creative menus</Text>
    </Box>
    <Box  width="200px" br="10px"  boxShadow='dark-lg'borderRadius='10px'>
    <Image marginLeft="30px"  borderRadius='10px' p="10px" width="150px" src="https://www.kindmeal.my/images/intro_friends.png" alt=""  height="150px"/>
    <Text textAlign="center" fontSize='md'fontWeight="bold">Meet Food Lovers</Text>
    <Text textAlign="center" fontSize='sm'>Make new, compassionate friends and share great food tips</Text>
    </Box>
    

   </Flex>
    </Box>
<Box width="85%" margin="auto" marginTop="80px">
  <Text textAlign="center" fontSize='xl'>Any restaurant or cafe can join KindMeal, vegetarian or not, 
  as long as the deals and menu featured are meat-free.</Text>
  <Text textAlign="center" fontSize='xl'>Enjoy a great meat-free dining experience. Easily save animal lives, health, environment and money now!</Text>
</Box>
<Box>
<Box background='red' width="40%" margin="auto" marginTop="80px" borderRadius="10px">
  <Box marginTop="20px">
<Text textAlign="center" color="white" fontWeight="bold" fontSize='4xl'>Join KindMeal Now</Text>
</Box>
<Spacer />
<Box>
<Text textAlign="center" color="white" fontSize='xl'>Your tasty journey begins here</Text>
</Box>
  </Box>
</Box>

<Box width="full" marginLeft="150px" marginTop="80px">
  <Image width="1000px" src="https://www.kindmeal.my/images/media-feature2.png" alt=""/>
</Box>

  </Box>




 
        </div>
    )
}
export default Home