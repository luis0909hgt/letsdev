import { FormEvent, ReactNode, ChangeEvent } from 'react';
import * as s from "./styled-input-button";

interface InputButtonProps {
    type?: "file" | "submit" | "button";
    name?: string;
    value?: any;
    onChange?: (event: any) => void;
    outlined?: boolean;
    onClick?: (event: FormEvent) => void;
    title?: string;
}

const InputButton = ({
    type,
    name,
    value,
    onChange,
    outlined,
    onClick,
    title,
}: InputButtonProps) => {
  return(
    <s.InputButton
    className={outlined ? "outlined" : ""}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    onClick={onClick}
    title={title}
    />
  );
}

export default InputButton;