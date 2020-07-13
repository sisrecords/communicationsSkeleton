import '../styles/global.css'
import '../styles/tag-search.scss';
import '../styles/autocomplete.css';
import { Provider } from 'react-redux';
import store from '../store/store'

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}