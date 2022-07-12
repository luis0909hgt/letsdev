import React, { ReactNode } from 'react';
import * as s from "./styled-row"

interface RowProps {
    children: ReactNode;
    style?: object;
}

const Row = ({ children, style }: RowProps) => {
  return <s.Row>{children}</s.Row>;
}

export default Row;