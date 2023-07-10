import { RegistrationInterface } from 'interfaces/registration';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  name: string;
  description?: string;
  venue: string;
  director_id?: string;
  coach_id?: string;
  created_at?: any;
  updated_at?: any;
  registration?: RegistrationInterface[];
  user_event_director_idTouser?: UserInterface;
  user_event_coach_idTouser?: UserInterface;
  _count?: {
    registration?: number;
  };
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  venue?: string;
  director_id?: string;
  coach_id?: string;
}
