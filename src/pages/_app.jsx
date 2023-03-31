import "../sass/main.sass"
import Container from '../layouts/Container';
import { SSRProvider } from "react-bootstrap";
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';

export default function App({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <SSRProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </SSRProvider>
  </Provider>
  )
}