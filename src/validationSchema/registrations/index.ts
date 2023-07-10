import * as yup from 'yup';

export const registrationValidationSchema = yup.object().shape({
  player_id: yup.string().nullable(),
  event_id: yup.string().nullable(),
});
