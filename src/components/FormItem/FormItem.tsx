import React, { useState } from "react";
import {
  FormItemContainer,
  FormInputContainer,
  FormInputLabelContainer,
  InputMessageContainer,
} from "./FormItem.styled";

type FormItemProps = {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  checked?: boolean;
  pattern?: string;
  title?: string;
  message?: string;
  placeholder: string;
  id: string;
  required?: boolean;
  handleInput?(event: React.ChangeEvent<HTMLInputElement>): void;
  handleChange?(event: React.ChangeEvent<HTMLInputElement>): void;
};

const FormItem = ({
  name,
  type,
  placeholder,
  id,
  pattern,
  title,
  message,
  required,
  checked,
  handleChange,
  handleInput,
}: FormItemProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <FormItemContainer type={type} message={message}>
      <FormInputContainer
        id={id}
        name={name}
        type={type ? type : "text"}
        title={title}
        required={required}
        onChange={handleInput}
        onBlur={handleChange}
        pattern={pattern}
        onInput={(event) => setInputValue(event.currentTarget.value)}
        checked={checked}
      />

      <FormInputLabelContainer
        htmlFor={id}
        className={
          inputValue && inputValue.length && type !== "checkbox" ? "shrink" : ""
        }
        type={type ? type : "text"}
      >
        <span>{required ? "*" : ""}</span>
        {placeholder}
      </FormInputLabelContainer>
      <InputMessageContainer>{message}</InputMessageContainer>
    </FormItemContainer>
  );
};
export default FormItem;
