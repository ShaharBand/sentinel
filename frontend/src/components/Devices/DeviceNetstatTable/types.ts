export interface RowData {
  Proto: string;
  LocalAddress: string;
  ForeignAddress: string;
  State: string;
  PID: number;
}

export interface Props {
  data: RowData[];
}
