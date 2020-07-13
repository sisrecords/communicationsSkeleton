import notificationsReducer from "./reducers/notificationsReducer";
import messagesReducer from "./reducers/messagesReducer";
import smallPieChartsReducer from "./reducers/smallPieChartsReducer";
import pieChartReducer from "./reducers/pieChartReducer";
import lineChartReducer from "./reducers/lineChartReducer";
import mainTableReducer from "./reducers/mainTableReducer";
import tagsReducer from "./reducers/tagsReducer";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const rootReducer = combineReducers({
  notificationsReducer,
  messagesReducer,
  smallPieChartsReducer,
  pieChartReducer,
  lineChartReducer,
  mainTableReducer,
  tagsReducer
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
