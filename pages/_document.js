import Document, { Head, Main, NextScript } from 'next/document'
// css/styles.less -> ../assets/css/styles.less
// see .babelrc for more detail
import styles from 'css/styles.less'

export default class GlobalDocument extends Document {

  render() {
    return (
      <html lang={process.env.LANGUAGE}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" /> 
          <link rel="shortcut icon" type="images/x-icon" href="/static/favicon.png" />
          <style dangerouslySetInnerHTML={{ __html: styles }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

