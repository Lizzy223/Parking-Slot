import { Box, Text, Stack, RadioGroup, Radio, Grid } from '@chakra-ui/react';
import React from 'react';

const Small = () =>{
    const [Open, setOpen] = React.useState(false);
    const openMobil= () => {
        setOpen(true);
      };
    return(
        <>
         <Text textAlign="center" mt='1.5rem' mb='1rem' >Choose your kind of parking space.</Text>
        <RadioGroup >
          <Stack direction="row" display='flex' justifyContent='center' alignItems='center'>
            <Radio size='lg' name='1'onClick={()=>setOpen(false)} colorScheme='green' value="1">Vip</Radio>
            <Radio size='lg' name='1' onClick={()=>openMobil()}colorScheme='green' value="2">Regular</Radio>
          </Stack>
        </RadioGroup>
        {Open ? <Regular/> :<Vip/>}
        </>
    )
}

const Park =(props)=>{
    const {price, time} = props;
    const [isActive, setIsActive] = React.useState(false);
    const handleClick = () => {
       
        setIsActive(current => !current);
    
      
      };
    return(
        <>
            <Box shadow='0 2px 8px 0 rgba(0, 0, 0, 0.15)' onClick={handleClick} bg={isActive ? 'red.500':'white'} _hover={{transform:'scale(1.1)'}} borderRadius='4px' cursor='pointer' p='1rem' w='full' minH='7rem' display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
                <Text fontSize='1.5rem' color={isActive ? '#fff' : '#333'} fontWeight='600'>${price}</Text>
                <Text bg='#fff' display={isActive ? 'block': 'none'} mt='.5rem' fontWeight='500' color='green' borderRadius='24px' fontSize='.75rem' p='.25rem'>{time}min</Text>
            </Box>
        </>
    )
}

const VipPark =(props)=>{
    const {price, time} = props;
    const [isActive, setIsActive] = React.useState(false);
    const handleClick = () => {
       
        setIsActive(current => !current);
    
      
      };
    return(
        <>
            <Box borderBottom='2px solid green' shadow='0 2px 8px 0 rgba(0, 0, 0, 0.15)' onClick={handleClick} bg={isActive ? 'red.500':'white'} _hover={{transform:'scale(1.1)'}} borderRadius='4px' cursor='pointer' p='1rem' w='full' minH='7rem' display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
                <Text fontSize='1.5rem' color={isActive ? '#fff' : '#333'} fontWeight='600'>${price}</Text>
                <Text bg='#fff' display={isActive ? 'block': 'none'} mt='.5rem' fontWeight='500' color='green' borderRadius='24px' fontSize='.75rem' p='.25rem'>{time}min</Text>
            </Box>
        </>
    )
}

const Vip =()=>{
    return(
        <>
            <Box w='full' mt='1rem' >
                <Grid gap='6' w='full' templateColumns='repeat(5,1fr)'>
                    <VipPark price='100' time='30' />
                    <VipPark price='100' time='30'/>
                    <VipPark price='100' time='30'/>
                    <VipPark price='100' time='30'/>
                    <VipPark price='100' time='30'/>
                </Grid>

            </Box>
        </>
    )
}

const Regular =()=>{
    return(
        <>
            <Box w='full' mt='1rem' >
                <Grid gap='6' w='full' templateColumns='repeat(5,1fr)'>
                    <Park price='60' time='30' />
                    <Park price='60' time='30'/>
                    <Park price='60' time='30'/>
                    <Park price='60' time='30'/>
                    <Park price='60' time='30'/>
                    <Park price='60' time='30'/>
                    <Park price='60' time='30'/>
                    <Park price='60' time='30'/>
                    <Park price='60' time='30'/>
                    <Park price='60' time='30'/>
                </Grid>

            </Box>
        </>
    )
}

const Slot = () => {
  const [value, setValue] = React.useState('2');
  const [isOpened, setIsOpened] = React.useState(false);
    const openMobile= () => {
      setIsOpened(true);
    };
  return (
    <Box
      display="flex"
      flexDirection='column'
      justifyContent="space-evenly"
      alignItems="center"
      mb="2rem"
      w="full"
      h="100%"
    >
      <Text textAlign="center" fontWeight='600' mt='4rem' fontSize={["1.75rem","3rem"]} textTransform="capitalize">
        Welcome to{' '}
        <Text
          color="green"
          textTransform="uppercase"
          textShadow="blue"
          as="span"
        >
          Deku
        </Text>{' '}
        parking slot.
      </Text>
      <Box mt="2rem" >
        <Text textAlign="center"mb='1rem'>Choose your kind of car.</Text>
        <RadioGroup onChange={setValue} value={value}>
          <Stack display='flex' justifyContent='center' alignItems='center' direction="row">
            <Radio size='lg' onClick={()=>openMobile()} name='1' colorScheme='green' value="1">Small</Radio>
            <Radio size='lg' onClick={()=>setIsOpened(false)} name='1' colorScheme='green' value="2">Big</Radio>
          </Stack>
        </RadioGroup>

        {isOpened  ? <Small/> :<Vip/>}


        
      </Box>
    </Box>
  );
};

export default Slot;
