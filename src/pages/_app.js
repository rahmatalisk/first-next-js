import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return <div>
    <Header />
    <Component {...pageProps} />
    <Footer/>
  </div>
}
