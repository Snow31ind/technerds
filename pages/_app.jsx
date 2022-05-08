import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import '../styles/globals.css';
import reducers from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SnackbarProvider>
  );
}

export default MyApp;
