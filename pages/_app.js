import MasterLayout from '../components/layout/MasterLayout'
import '../styles/globals.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function MyApp({ Component, pageProps }) {
  return (
    <MasterLayout>
      <Component {...pageProps} />
    </MasterLayout>
  )
}

export default MyApp
