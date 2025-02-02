export const selectUser = (state) => state.auth.user.name;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefresh = (state) => state.auth.isRefreshing;
