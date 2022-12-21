import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos:'absolute',
  left:'50%',
  top:'50%',
  transform:'translate(-50%,-50%)',
  textTransform:'uppercase',
  p:'4',
  size: '3xl'
}

const Home = () => {

  const MyCarousel = () =>(
    <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showThumbs={false} showArrows={false}>
     <Box w='full' h={'100vh'}>
       <Image src={img1} h='full' w='full' objectFit={'cover'}/>
       <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
       </Heading>
     </Box>
     <Box w='full' h={'100vh'}>
       <Image src={img2} h='full' w='full' objectFit={'cover'}/>
       <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
       </Heading>
     </Box>
     <Box w='full' h={'100vh'}>
       <Image src={img3} h='full' w='full' objectFit={'cover'}/>
       <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
       </Heading>
     </Box>
     <Box w='full' h={'100vh'}>
       <Image src={img4} h='full' w='full' objectFit={'cover'}/>
       <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
       </Heading>
     </Box>
    </Carousel>
  )

  return (
    <Box>
    <MyCarousel/>
    <Container maxW={'container.xl'} minH={'100vh'} p='16'>
      <Heading textTransform={'uppercase'} py='2' w={'fit-content'} borderBottom={'2px solid'} m='auto'>Services</Heading>
      <Stack
      h='full'
      p={'4'}
      alignItems={'center'}
      direction={['column','row']}
      >
      <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'} />
      <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat omnis, nihil nemo voluptate suscipit sunt ipsum! Corrupti necessitatibus est ea rem excepturi, cum illum cupiditate eligendi impedit! Quidem eaque molestiae error ratione sed quibusdam voluptates accusantium est blanditiis cum, voluptatibus necessitatibus ipsa beatae tempore aut iure rerum nihil maxime possimus et? Perferendis nobis est deserunt fuga commodi. Aspernatur vitae, culpa ducimus iste rerum ratione possimus, impedit id earum ab beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ut. Incidunt facilis quo veniam odit eius fugit nulla vitae ipsam, sequi soluta consequuntur natus velit dignissimos repudiandae asperiores aspernatur eveniet aliquid corporis magnam, omnis, quia vel nemo dolor possimus. Quam reiciendis nihil repellat accusantium quia eaque consequuntur veritatis cum voluptas.
      </Text>
      </Stack>
    </Container>
    </Box>
  )
}

export default Home
