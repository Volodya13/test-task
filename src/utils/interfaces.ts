import {Status, Type} from "./enums.ts";


export interface Site {
  id: number;
  url: string;
}

export interface Test {
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteId: number;
}



export interface StateProps {
  sites: Site[];
  tests: Test[];
}

export interface ActionProps {
  type: string;
  payload: Site[] | Test[];
}

export type Controls = 'name' | 'type' | 'status' | 'site';
