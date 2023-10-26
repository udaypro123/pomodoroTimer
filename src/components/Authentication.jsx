import React from 'react'
import { Container, Box, Flex, VStack, Img, Text, Heading } from '@chakra-ui/react'
import {getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import { app } from '../Firebase';
import { useNavigate } from 'react-router-dom';


const Authentication = () => {

    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const signInWithgoole = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const name=result.user.displayName
                const imgsrc=result.user.photoURL
                localStorage.setItem("name",name)
                localStorage.setItem("imgsrc",imgsrc)
                alert("suuceesful")
                navigate("/pomodoro")
            }).catch((error) => {
                alert(error)
            })
    }



    return (
        <>
            <Container h='100vh' maxW='100vw' centerContent display="flex" justifyContent="center" alignItems='center'>
                <Flex minWidth='max-content' flexDirection="column" justifyContent="center" alignItems='center' gap='1'>
                    <Heading as="h6" marginBottom="2rem"> Sign in With Google</Heading>

                    <VStack w='full' align="center">
                        <Box css={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            width: "15vw",
                            borderRadius: "3rem",
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                            height: "4rem",

                        }} onClick={signInWithgoole}>


                            <Img h="85%" borderRadius="3rem" width="25%" src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=w240-h480-rw" />
                            <Text fontSize="md">Sign in with Google </Text>
                        </Box>
                    </VStack>
                </Flex>
            </Container>
        </>
    )
}

export default Authentication
