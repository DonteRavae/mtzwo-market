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
  pattern?: string;
  title?: string;
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
  pattern,
  title,
  required,
  checked,
  handleChange,
}: FormItemProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <FormItemContainer type={type}>
      <FormInputContainer
        id={id}
        name={name}
        type={type ? type : "text"}
        title={title}
        required={required}
        onChange={handleChange}
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
    </FormItemContainer>
  );
};
export default FormItem;
