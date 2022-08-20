import { Box, RadioGroup, Radio, Stack, Input, Button,Text } from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [car, setCar] = useState('');
  const [slot, setSlot] = useState('');
  const [item, setItem] = useState([]);
  const input = {
    name: name,
    car: car,
    slot: slot,
  };
  useEffect(()=>{
    localStorage.setItem('item',JSON.stringify(input));
},[input]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = {
      name: name,
      car: car,
      slot: slot,
    };
    console.log(input);
    
  };
  console.log(item);
  return (
    <Box>
      <form>
        <Text textAlign="center" mb="1rem">
          Enter your Name
        </Text>
        <Input
          placeholder=""
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          border="1px solid green"
          borderRadius="4px"
        />
        <RadioGroup onChange={setCar} value={car}>
          <Text textAlign="center" mb="1rem">
            Choose your kind of car.
          </Text>
          <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction="row"
          >
            <Radio size="lg" name="1" colorScheme="green" value="small">
              Small
            </Radio>
            <Radio size="lg" name="1" colorScheme="green" value="big">
              Big
            </Radio>
          </Stack>
        </RadioGroup>
        <RadioGroup onChange={setSlot} value={slot}>
          <Text textAlign="center" mb="1rem">
            Choose your kind of slot.
          </Text>
          <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction="row"
          >
            <Radio size="lg" name="1" colorScheme="green" value="vip">
              Vip
            </Radio>
            <Radio size="lg" name="1" colorScheme="green" value="regular">
              Regular
            </Radio>
          </Stack>
        </RadioGroup>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Form;
