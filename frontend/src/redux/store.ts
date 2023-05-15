import { logger } from "redux-logger";
import {
  AnyAction,
  combineReducers,
  configureStore,
  Dispatch,
  Middleware,
} from "@reduxjs/toolkit";
import { PicturesAPI } from "@/redux/services/PicturesAPI";

const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const rootReducer = combineReducers({
  [PicturesAPI.reducerPath]: PicturesAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(...middlewares)
      .concat(PicturesAPI.middleware),
});
