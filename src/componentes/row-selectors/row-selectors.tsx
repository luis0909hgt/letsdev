import { ReactNode } from 'react';
import * as s from "./style-row-selectors"

interface RowSelectorsProps {
    children: ReactNode;
}

const RowSelectors = ({ children }: RowSelectorsProps) => {
  return <s.RowSelectors>{children}</s.RowSelectors>;
}

export default RowSelectors;