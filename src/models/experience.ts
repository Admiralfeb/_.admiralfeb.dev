import { IDbItem } from './dbItem';

export interface IExperience extends IDbItem {
  title: string;
  place: string;
  startDate: string;
  endDate?: string;
  description: string;
  responsibilities: string[];
  displayOrder: number;
}
