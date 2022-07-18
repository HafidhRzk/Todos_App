import React, { useState } from "react";

import { 
    Box,
    Text,
    Heading,
    VStack,
    Button,
    HStack,
} from "native-base";

export default function Calculator(){

    const [counter, setCounter] = useState(0);

    const Reset = () => {
        setCounter(0);
    };

    const Input = (value) => {
        if(counter == 0){
            setCounter(value)
        }
        else{
            setCounter(counter + '' + value)
        }
    };

    const Hasil = () => {
        setCounter(eval(counter))
    };

    return (
        <Box safeArea bg="error.300" flex={1} p={10} w="100%" h="100" mx="auto" justifyContent="center">
            <Heading p={5}>Display</Heading>
            <Text h={100} bg="error.50" color="black" fontSize={40} textAlign="right" p={5}>{counter}</Text>
            <VStack justifyContent="center">
                <HStack justifyContent="center" p={2}>
                    <Button p={7} m={2} bg="error.500" onPress={()=>Input(1)}>1</Button>
                    <Button p={7} m={2} bg="error.500" onPress={()=>Input(2)}>2</Button>
                    <Button p={7} m={2} bg="error.800" onPress={()=>Input('-')}>-</Button>
                    <Button p={7} m={2} bg="error.800" onPress={()=>Input('+')}>+</Button>
                </HStack>
                <HStack justifyContent="center" p={2}>
                    <Button p={7} m={2} bg="error.500" onPress={()=>Input(3)}>3</Button>
                    <Button p={7} m={2} bg="error.500" onPress={()=>Input(4)}>4</Button>
                    <Button p={7} m={2} bg="error.800" onPress={()=>Input('/')}>/</Button>
                    <Button p={7} m={2} bg="error.800" onPress={()=>Input('*')}>*</Button>
                </HStack>
                <HStack justifyContent="center" p={2}>
                    <Button p={7} m={2} bg="error.500" onPress={()=>Input(5)}>5</Button>
                    <Button p={7} m={2} bg="error.500" onPress={()=>Input(6)}>6</Button>
                    <Button p={7} m={2} bg="error.800" onPress={()=>Input('%')}>%</Button>
                    <Button p={7} m={2} bg="error.800" onPress={()=>Hasil()}>=</Button>
                </HStack>
                <HStack justifyContent="center" p={2}>
                    <Button p={7} m={2} bg="error.500" onPress={()=>Input(7)}>7</Button>
                    <Button p={7} m={2} bg="error.500" onPress={()=>Input(8)}>8</Button>
                    <Button p={7} m={2} bg="error.500" onPress={()=>Input(9)}>9</Button>
                    <Button p={7} m={2} bg="error.500" onPress={()=>Input(0)}>0</Button>
                </HStack>
            </VStack>
            <Button p={2} m={2} bg="error.800" w={200} onPress={Reset}>Clear</Button>
        </Box>
    )
}