import React from "react";
import { ColorButton } from "./ButtonElements"

type IProps = {
  submit: (e: React.SyntheticEvent) => void;
  children: string;
}

const Button = ({submit, children}: IProps) => {
  return (
    <ColorButton
      sx={{fontWeight: 'bold'}}
      onClick={submit}
      variant="contained"
    >
      {children}
    </ColorButton>
  )
}

export default Button
