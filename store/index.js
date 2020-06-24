import notificationsReducer from '../store/reducers/notificationsReducer';
import messagesReducer from '../store/reducers/messagesReducer';
import smallPieChartsReducer from '../store/reducers/smallPieChartsReducer';
import pieChartReducer from '../store/reducers/pieChartReducer';
import lineChartReducer from '../store/reducers/lineChartReducer';
import mainTableReducer from '../store/reducers/mainTableReducer';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const rootReducer = combineReducers({
    notificationsReducer,
    messagesReducer,
    smallPieChartsReducer,
    pieChartReducer,
    lineChartReducer,
    mainTableReducer
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store;