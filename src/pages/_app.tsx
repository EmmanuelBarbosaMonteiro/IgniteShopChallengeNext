import { globalStyles } from '@/styles/global'
import { AppProps } from 'next/app'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
