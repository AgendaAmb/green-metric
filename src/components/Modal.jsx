import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from "@chakra-ui/react";

function CustomModal({ title, bodyComponents, footerComponents }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    let count = 0;
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose} color="blue.500">
                <ModalOverlay />
                <ModalContent className="modal">
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {bodyComponents?.map((Component) => {
                            return <Component key={count++} />;
                        })}
                    </ModalBody>

                    <ModalFooter>
                        {footerComponents?.map((Component) => {
                            return <Component key={count++} />;
                        })}
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                        <Button variant="outline">Enviar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CustomModal;
