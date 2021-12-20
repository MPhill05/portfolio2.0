import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';

import styles from '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='light' attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
