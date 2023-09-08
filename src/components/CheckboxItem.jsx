"use client";
import { Checkbox, Stack, Input, Button } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { FormContext } from "@/app/providers";
import { Field } from "formik";
import CustomInput from "./CustomInput";
import CustomCheckboxItem from "./CustomCheckboxItem";

export default function CheckboxItem({ span = false, element, area, hasInput = false, index = 1, name }) {
  
    return (
        <Stack
            direction={["column", "row"]}
            spacing={"10px"}
            w="100%"
            className="grid-center-2 checkbox-text"
        >



            <Field name={name} >
                {({ field, form }) => (
                    <label>
                        <input
                            {...field}
                            type="checkbox"
                            checked={field?.value === name ? true : false }
                            onChange={() => {
                                let isChecked = name;
                                console.log(field?.value);
                                if (field?.value == name) {
                                    isChecked ="none";
                
                                } else {
                                    isChecked = name;
                                
                                }
                                console.log(field.name, isChecked);
                                field.onChange(field.name)(isChecked);
                                form.setFieldTouched(field.name, isChecked);
                            }}
                        />
                        {element}
                    </label>
                )}
            </Field>

            {/* <label>
              <Field type="checkbox" name={`${name}`}  />
              {element}
            </label> */}
            {/* <Field component={Checkbox} name={`${name}`} w="100%" display="grid" > */}
            {/* <Checkbox
                onChange={handleEnabled}
                defaultChecked={isChecked}
                name={`${name}`}
                
                w="100%"
                onSelect={form.handleChange}
                display="grid"
                gridTemplateColumn={`${span ? "1fr" : "1fr 1fr"}`}
            > */}
            {/* {element}
            </Field> */}
            {hasInput && (<Stack
                className={`relative-container grid-center${area ? "-3" : ""}`}
                spacing={"10px"}
                w="100%"
                direction={["column", "row"]}
            >
                {/* {!enabled && <div className="disabled"></div>} */}
                <CustomInput
                    placeholder={`${area ? "Investigador" : "Representante"}`}
                    w={"100%"}
                    className="grid-center"
                    /* value={form.values[`${name}`]} */
                    name={`${name}_1`}

                />
            </Stack>)}
        </Stack>
    );
}
