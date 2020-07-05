import '../styles/global.css'
import '../styles/tag-search-2.scss';
import '../styles/tag-search-3.css';
import { Provider } from 'react-redux';
import store from '../store/index'

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}