import React, { useEffect, useState } from 'react'
import { Container, Box, Tabs, Heading, TabList, Tab, Flex, VStack, Img, Text } from '@chakra-ui/react'
import { Circle } from 'rc-progress';


const Timer = () => {

    const [time, setTime] = useState(2 * 60);
    const [breaktime, setBreaktime] = useState(5 * 60);
    const [isTimeStart, setIsTimeStart] = useState(false);
    const [isbreaktimestart, setIsbreaktimestart] = useState(false);

    const [value, setValue] = useState(100);



    const timerFunction = (time) => {
        let min = Math.floor(time / 60);
        let sec = time % 60;
        return `${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`
    }


    const activateFuction = () => {
        setIsTimeStart(!isTimeStart)

    }

    const resetFunction = () => {
        setTime(25 * 60)
        setIsTimeStart(false)
    }


    const breakTimerFunction = (breaktime) => {
        let min = Math.floor(breaktime / 60);
        let sec = breaktime % 60;
        return `${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`
    }

    const breakactivateFuction = () => {
        setIsbreaktimestart(true)

    }

    const worktimeFuction = () => {
        setBreaktime(5 * 60)
        setIsbreaktimestart(false)
    }


    const resetBreaktimeFunction = () => {
        setBreaktime(5 * 60)
    }




    useEffect(() => {
        if (isTimeStart && time > 0) {
            let timer = setInterval(() => {
                setTime((time) => time - 1)
                setValue(time)
            }, 1000);

            return () => clearInterval(timer)
        }

    }, [time, isTimeStart, setValue])



    useEffect(() => {
        if (isbreaktimestart && breaktime > 0) {
            let timer = setInterval(() => {
                setBreaktime((breaktime) => breaktime - 1)
            }, 1000);

            return () => clearInterval(timer)
        }

    }, [breaktime, isbreaktimestart])




    return (
        <>

            <Container h='100vh' maxW='100vw' centerContent bg="black">

                <Flex minWidth='max-content' gap='2' bg="white" display="flex" flexDirection="row">
                    <VStack w='100vw' h="8vh" >
                        <Box w='100vw' h="8vh" bg="RGBA(0, 0, 0, 0.30)" css={{
                            display: "flex",
                            justifyContent: 'sapce-around',
                            alignItems: "center",
                        }}>

                            <Box w='80%' h="8vh"  css={{
                                display: "flex",
                                justifyContent: 'flex-start',
                                alignItems: "center",
                            }}>
                                <Heading as="h5" > Pomodoro Timer </Heading>
                            </Box>

                            <Text  fontSize='md' >{localStorage.getItem("name")}</Text>
                            <Img src={localStorage.getItem("imgsrc")} margin="2rem" borderRadius='50%' w="4vw" h="90%" />



                        </Box>



                    </VStack>
                </Flex>

                <Flex minWidth='max-content' flexDirection="column" alignItems='center' gap='1'>
                    <VStack w='full' align="center">
                        <Box css={{
                            backgroundColor: 'white',
                            color: 'white',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            // borderRadius: '2%',
                            borderTopRightRadius: "5%",
                            borderTopLeftRadius: "5%",
                            marginTop: '2rem',
                            width: "20rem",
                            height: "32rem",
                            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px"


                        }}>
                            <Box css={{
                                backgroundColor: 'black',
                                color: 'white',
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "19rem",
                                height: "28rem",

                            }}>

                                <Box css={{
                                    position: "relative",
                                    color: 'white',
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "14rem",
                                    width: "14rem",
                                    // border: "2px solid white",
                                    borderRadius: '50%',

                                }}>

                                    <Circle percent={value} strokeLinecap='circle' gapPosition="left" gapDegree={0} trailWidth={1} strokeWidth={5} strokeColor="blue" />


                                    <Box css={{
                                        position: 'absolute',
                                        backgroundColor: 'black',
                                        color: 'white',
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // boxShadow: "0px 0px 3px 3px white"
                                        borderRadius: '50%',
                                        width: "12rem",
                                        height: "12rem",
                                        fontSize: "3rem"
                                    }}>

                                        {isbreaktimestart ? breakTimerFunction(breaktime) : timerFunction(time)
                                        }
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </VStack>
                </Flex>


                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <VStack w='full' align="center" >
                        <Tabs isFitted top='1rem' color="white" boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)" variant='enclosed' w='30vw' borderRadius="10px">
                            <TabList mb='1em'  >



                                {isbreaktimestart ? <>
                                    <Tab _selected={{ color: 'white', bg: 'yellow.500' }} onClick={worktimeFuction}> Work Time</Tab>
                                    <Tab _selected={{ color: 'white', bg: 'blue.500' }} onClick={resetBreaktimeFunction}>Reset</Tab>
                                </> : <>
                                    <Tab _selected={{ color: 'white', bg: 'green.500' }} onClick={activateFuction}>{isTimeStart ? "Pause" : "Start"}</Tab>
                                    <Tab _selected={{ color: 'white', bg: 'blue.500' }} onClick={resetFunction}>Reset</Tab>
                                    <Tab _selected={{ color: 'white', bg: 'yellow.500' }} onClick={breakactivateFuction}>5 min break</Tab>
                                </>}
                            </TabList>
                        </Tabs>
                    </VStack>
                </Flex>

            </Container>
        </>
    )
}

export default Timer
