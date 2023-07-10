import { PlayerInterface } from 'interfaces/player';
import { EventInterface } from 'interfaces/event';
import { GetQueryInterface } from 'interfaces';

export interface RegistrationInterface {
  id?: string;
  player_id?: string;
  event_id?: string;
  created_at?: any;
  updated_at?: any;

  player?: PlayerInterface;
  event?: EventInterface;
  _count?: {};
}

export interface RegistrationGetQueryInterface extends GetQueryInterface {
  id?: string;
  player_id?: string;
  event_id?: string;
}
