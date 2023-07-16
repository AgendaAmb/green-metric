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
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { FormContext } from "@/app/providers";
import { usePathname } from "next/navigation";
import { setCookie } from "cookies-next";
export default function Login() {
    const form = useContext(FormContext);
    const pathname = usePathname()
    const [spin, setSpin] = useState(false);
    const setPath = () => {
        setCookie("path", pathname);
    }
    const auth = async () => {
        /*  const [user, pwd] = [document.getElementsByName("cve_rpe"), document.getElementsByName("pwd_login")];
         console.log(user, pwd);
         let userParam = user;
         let pwdParam = pwd;
         pwdParam ??= "";
         userParam ??= "";
         axios.get("/GreenMetric/api/auth", { params: { user_id: userParam, password: pwdParam } });
         //console.log("res", res);
         setSpin(true);
         setTimeout(() => {
             //window.location.reload();
         }, 2000); */
    }

    useEffect(() => {
    },[]);
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
                        name={"pwd-login"}
                        placeholder={"********************"}
                        marginRight="15px"
                        type="password"
                        onChange={form.handleChange}
                    />
                    <FormHelperText color={"gray.400"}>Ingrese su contraseña</FormHelperText>
                </FormControl>
                <Button type="submit" onClick={setPath} className="login-button">{spin ? <Spinner /> : "Iniciar sesión"}</Button>
            </Stack>


        </VStack>
    );
}