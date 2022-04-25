import React, { useState } from "react";
import {
  FormItemContainer,
  FormInputContainer,
  FormInputLabelContainer,
} from "./FormItem.styled";

type FormItemProps = {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  checked?: boolean;
  placeholder: string;
  id: string;
  required?: boolean;
  handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.KeyboardEvent<{ value: string }>
  ): void;
};

const FormItem = ({
  name,
  type,
  placeholder,
  id,
  required,
  handleChange,
}: FormItemProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <FormItemContainer type={type}>
      <FormInputContainer
        id={id}
        name={name}
        type={type ? type : "text"}
        required={required}
        onChange={handleChange}
        onInput={(event) => setInputValue(event.currentTarget.value)}
      />

      <FormInputLabelContainer
        htmlFor={id}
        className={inputValue && inputValue.length ? "shrink" : ""}
        type={type ? type : "text"}
      >
        <span>{required ? "*" : ""}</span>
        {placeholder}
      </FormInputLabelContainer>
    </FormItemContainer>
  );
};
export default FormItem;
