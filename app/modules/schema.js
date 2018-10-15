import { schema } from 'normalizr';

export const role = new schema.Entity('roles');

export const user = new schema.Entity('users', {
  roles: [role]
});

export const appointment = new schema.Entity('appointments', {
  doctor: user,
  patient: user
});

user.define({
  appointments: [appointment]
});
