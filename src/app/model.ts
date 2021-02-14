export interface midObject {
  data1: string;
  period: string;
  data2: string;
  color: string;
  progressBar: boolean;
  img: string;
}

interface kind {
  img: string;
  data: string;
  next: string;
}
export interface sideObject {
  head: string;
  subhead: Array<kind>;
}

export interface topObject {}

export interface customComp {
  button1: string;
}
