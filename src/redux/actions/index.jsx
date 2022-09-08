export const NEW_USER = 'NEW_USER';
export const newUser = (payload) => (
  {
    type: NEW_USER,
    payload,
  }
);
