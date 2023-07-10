import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  venue: yup.string().required(),
  director_id: yup.string().nullable(),
  coach_id: yup.string().nullable(),
});
