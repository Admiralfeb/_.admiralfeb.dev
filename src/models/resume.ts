import { IExperience } from './experience';
import { ISkill } from './skill';

export interface IResume {
  experience: IExperience[];
  skills: ISkill[];
}
