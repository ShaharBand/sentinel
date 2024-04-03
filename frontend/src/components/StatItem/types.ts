import { ReactNode } from "react";

export interface StatItemProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  description: string;
  offset: number;
}
