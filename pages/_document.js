import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="favicon.ico" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        </Head>
        <body
          className="bg-gray-100 text-black gradient
                      font-sans leading-normal tracking-normal"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
