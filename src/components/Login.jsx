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
import { useEffect, useState, useContext } from "react";
import { FormContext } from "@/app/providers";
import { useRouter } from "next/navigation";


export default function Login() {
    const form = useContext(FormContext);
    const router = useRouter();
    const [spin, setSpin] = useState(false);
    const auth = async () => {
        setSpin(true);
        setTimeout(() => {
            router.push("/home");
            setSpin(false);
        }, 3000);
    }

    useEffect(() => {
    }, []);
    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            padding="30px"
            spacing={"30px"}

        >
            <h1>Bienvenido a Green Metric</h1>

            <Stack
            >
                <FormControl>
                    <Input
                        name={"cve_rpe"}
                        placeholder={"Usuario"}
                        marginRight="15px"
                        type="number"
                        onChange={form.handleChange}
                    />
                    <FormHelperText color={"gray.400"}>Ingrese su RPE/CVE única</FormHelperText>

                </FormControl>
                <FormControl>
                    <Input
                        name={"pwd_login"}
                        placeholder={"********************"}
                        marginRight="15px"
                        type="password"
                        onChange={form.handleChange}
                    />
                    <FormHelperText color={"gray.400"}>Ingrese su contraseña</FormHelperText>
                </FormControl>
                <Button type="submit" className="login-button" onClick={auth}>{spin ? <Spinner /> : "Iniciar sesión"}</Button>
            </Stack>


        </VStack>
    );
}