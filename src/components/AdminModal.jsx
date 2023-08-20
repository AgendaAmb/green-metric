"use client";
import { useEffect, useState, useRef } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Select } from '@chakra-ui/react';
import axios from "axios";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

export default function AdminModal({ isOpen, onClose, dependencies, reloadDB, ...props }) {
    const ref = useRef();
    const [defaultDependency, setDefault] = useState(1);
    const router = useRouter();
    const changeModule = () => {
        const value = ref?.current?.value;
        if (value) {
            console.log(value);
            axios.post("/GreenMetric/api/dependencies", { module: value }).then((res) => {
                reloadDB();
                window.location.reload();
            });

        }
    }

    useEffect(() => {
        try {
            const user = getCookie('user');


            let parsedUser = JSON.parse(user);
            setDefault(parsedUser?.dependency_id || 1);
        }
        catch(e){}
    }, [])
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="admin-modal">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Cambiar módulo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Select ref={ref} defaultValue={defaultDependency} className="admin-select">
                        {
                            dependencies.map(({ dependency_id, dependency_name }) => {
                                return (
                                    <option value={dependency_id}>{dependency_name}</option>
                                )
                            })
                        }
                    </Select>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' className="close-btn" mr={3} onClick={onClose}>
                        Cerrar
                    </Button>
                    <Button onClick={changeModule}>Cambiar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}