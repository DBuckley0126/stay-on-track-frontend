export const updateAuthentication = object => {
  return {
    type: "UPDATE_AUTHENTICATION",
    payload: object
  };
};

export const loginAsGuest = () => {
  return {
    type: "LOGIN_AS_GUEST"
  };
};

export const syncUser = object => {
  return {
    type: "SYNC_USER",
    payload: object
  };
};

export const syncedUser = () => {
  return {
    type: "SYNCED_USER"
  };
};
