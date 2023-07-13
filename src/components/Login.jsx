"use client";
import {
    VStack,
    Stack,
    StackDivider,
    Button,
    Text,
} from "@chakra-ui/react";
import LoginInput from "./LoginInput"
import {useRouter} from "next/navigation";
import axios from "axios";

export default function Login() {
    const router = useRouter();
    const auth = async () => {
        const res = axios.get("/GreenMetric/api/auth");
        console.log("res", res);
    }
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
                    elements={[{ holder: "Ingrese su usuario", type: "text", inputName: "cve_rpe" }]}
                />

                <LoginInput
                    title={"Contraseña"}
                    elements={[{ type: "password", inputName: "password" }]} />
            </Stack>

            <Button onClick={auth} className="login-button">Iniciar sesión</Button>
        </VStack>
    );
}