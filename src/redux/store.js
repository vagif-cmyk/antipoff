import { configureStore } from "@reduxjs/toolkit";
import specialistsReducer from "./slices/teamSlice";
import registeredReducer from "./slices/registrationSlice";

export const store = configureStore({
  reducer: {
    specialists: specialistsReducer,
    registered: registeredReducer,
  },
});
