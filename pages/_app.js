import '../styles/global.css'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import notificationsReducer from '../store/notificationsReducer';
import messagesReducer from '../store/messagesReducer';
import smallPieChartsReducer from '../store/smallPieChartsReducer';
import pieChartReducer from '../store/pieChartReducer';
import lineChartReducer from '../store/lineChartReducer';
import mainTableReducer from '../store/mainTableReducer';
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

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}