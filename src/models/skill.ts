import { IDbItem } from './dbItem';

export interface ISkill extends IDbItem {
  skill: string;
  ul?: string[];
}
