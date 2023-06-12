"use client";
import { Input } from "@chakra-ui/input";

import SelectForm from "./SelectForm";
import Modal from "./Modal";

function Form() {
    return (
        <div className="form">
            <div className="basic-data self-start">
                <h1 className="subtitle self-start">Datos básicos</h1>
                <Input placeholder="Dependencia Universitaria" />
                <Input placeholder="Dirección de la Dependencia" />
                <Input placeholder="Nombre del Responsable" />
                <SelectForm
                    options={[
                        "Infraestructura y escenarios",
                        "Energía y cambio climático",
                        "Residuos",
                        "Agua",
                        "Transporte",
                        "Educación",
                    ]}
                />
                <Modal />
            </div>
        </div>
    );
}

export default Form;
