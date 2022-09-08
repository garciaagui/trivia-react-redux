export const NEW_USER = 'NEW_USER';
export const newUser = (payload) => (
  {
    type: NEW_USER,
    payload,
  }
);

export const USER_EMAIL = 'USER_EMAIL';
export const userEmail = (payload) => (
  {
    type: USER_EMAIL,
    payload,
  }
);
