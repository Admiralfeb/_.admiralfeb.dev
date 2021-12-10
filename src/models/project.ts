import { IDbItem } from './dbItem';

export interface IProject extends IDbItem {
  name: string;
  url: string;
  gitUrl: string;
  description: string;
  technologies: string[];
}
