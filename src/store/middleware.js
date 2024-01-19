import { fetchAccessToken } from "./auth/auth.slice";

export const apiTokenErrorMiddleWare = (store) => (next) => async (action) => {
  const state = store.getState();
  if (action.type.endsWith("rejected") && action.payload?.status === 401) {
    if (!state.auth.loading) {
      await store.dispatch(fetchAccessToken);
    }
  }
  next(action);
};
