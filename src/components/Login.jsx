"use client";
import {
    VStack,
    Stack,
    StackDivider,
    Button,
    Text,
} from "@chakra-ui/react";
import LoginInput from "./LoginInput"

export default function Login() {
    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            padding="30px"
            spacing={"30px"}
        >
            <h1>Bienvenido a Green Metric</h1>
            <Stack>
            <LoginInput 
                title={"RPE/Clave única"}
                elements={[{ holder: "example@mail", type: "text", inputName: "cve_rpe"}]}
            />

            <LoginInput 
                title={"Contraseña"}
                elements={[{ type: "password", inputName: "password"}]}/>
            </Stack>

            <Button className="login-button">Iniciar sesión</Button>
        </VStack>
    );
}