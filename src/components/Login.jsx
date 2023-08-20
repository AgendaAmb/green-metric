"use client";
import {
    VStack,
    Stack,
    StackDivider,
    Button,
    Input,
    Spinner,
    FormHelperText,
    FormControl,
} from "@chakra-ui/react";
import { useEffect, useState, useContext, useRef } from "react";
import { FormContext } from "@/app/providers";
import { useRouter } from "next/navigation";
import axios from "axios";
import { hasCookie } from "cookies-next";
export default function Login() {
    const form = useContext(FormContext);
    const passRef = useRef(null);
    const userRef = useRef(null);
    const router = useRouter();
    const [spin, setSpin] = useState(false);
    const auth = () => {
        let password, user;

        if (passRef?.current) {
            password = passRef.current.value;
        }
        if (userRef?.current) {
            user = userRef.current.value;
        }

        if(!user || !password){
    
        }else{

            const interval = setInterval(() => {
                if (hasCookie("user")) {
                    clearInterval(interval);
                    window.location.href = "/GreenMetric/home";
                }
                else {
                    
                    axios.post("/GreenMetric/api/auth", { params: { user_id: user, password: password } }).then((res) => {
                        if(res.status === 200){
                            console.log("hi")
                        }

                        window.location.reload();
                    });
                }
            }, 1000);
        }

        setSpin(true);
        setTimeout(() => {
            setSpin(false);
        }, 3000);
    }

    useEffect(() => {
        //router.refresh();
    }, []);
    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            padding="30px"
            spacing={"30px"}
            placeItems={"center"}
            className="grid-center"
            alignSelf={"center"}

        >
            <h1 width="100%">Bienvenid@ a Green Metric</h1>

            <Stack
            >
                <FormControl>
                    <Input
                        name={"cve_rpe"}
                        ref={userRef}
                        placeholder={"Usuario"}
                        marginRight="15px"
                        type="number"

                    />
                    <FormHelperText color={"gray.400"}>Ingrese su RPE/CVE única</FormHelperText>

                </FormControl>
                <FormControl>
                    <Input
                        ref={passRef}
                        name={"pwd_login"}
                        placeholder={"********************"}
                        marginRight="15px"
                        type="password"

                    />
                    <FormHelperText color={"gray.400"}>Ingrese su contraseña</FormHelperText>
                </FormControl>
                <Button className="login-button" alignSelf="center" onClick={auth}>{spin ? <Spinner /> : "Iniciar sesión"}</Button>
            </Stack>


        </VStack>
    );
}