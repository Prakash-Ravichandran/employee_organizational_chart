import { configureStore } from "@reduxjs/toolkit";

import { createEmployeApi } from "../services/employee";

export const store = configureStore({
  reducer: {
    [createEmployeApi.reducerPath]: createEmployeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([createEmployeApi.middleware]),
});
