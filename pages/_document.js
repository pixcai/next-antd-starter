import Document, {
  Head,
  Main,
  NextScript
} from 'next/document'
import styles from 'css/styles.less'

export default class GlobalDocument extends Document {

  render() {
    return (
      <html lang={process.env.LANGUAGE}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" /> 
          <link rel="shortcut icon" type="images/x-icon" href="/static/favicon.png" />
          <style>{styles}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
