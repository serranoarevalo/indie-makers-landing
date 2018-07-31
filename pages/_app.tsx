import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";
import ReactGA from "react-ga";

class Layout extends React.Component<any> {
  componentDidUpdate() {
    let theWindow = window as any;

    if (!theWindow.GA_INITIALIZED) {
      ReactGA.initialize("UA-123061558-1");
      theWindow.GA_INITIALIZED = true;
    }

    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    const { children } = this.props;
    return (
      <main>
        <Head>
          <title>Indie Makers: Private Beta Sign Up</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="theme-color" content="#f8f5f2" />
          <link rel="manifest" href="static/manifest.json" />
          <meta name="og:title" content="Indie Makers" />
          <meta
            name="og:description"
            content=" Join a community of people building awesome products and learning from
          each other."
          />
        </Head>
        {children}
        <style jsx={true} global>
          {`
            html,
            body,
            div,
            span,
            applet,
            object,
            iframe,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            blockquote,
            pre,
            a,
            abbr,
            acronym,
            address,
            big,
            cite,
            code,
            del,
            dfn,
            em,
            img,
            ins,
            kbd,
            q,
            s,
            samp,
            small,
            strike,
            strong,
            sub,
            sup,
            tt,
            var,
            b,
            u,
            i,
            center,
            dl,
            dt,
            dd,
            ol,
            ul,
            li,
            fieldset,
            form,
            label,
            legend,
            table,
            caption,
            tbody,
            tfoot,
            thead,
            tr,
            th,
            td,
            article,
            aside,
            canvas,
            details,
            embed,
            figure,
            figcaption,
            footer,
            header,
            hgroup,
            menu,
            nav,
            output,
            ruby,
            section,
            summary,
            time,
            mark,
            audio,
            video {
              margin: 0;
              padding: 0;
              border: 0;
              font-size: 100%;
              font: inherit;
              vertical-align: baseline;
            }
            /* HTML5 display-role reset for older browsers */
            article,
            aside,
            details,
            figcaption,
            figure,
            footer,
            header,
            hgroup,
            menu,
            nav,
            section {
              display: block;
            }
            body {
              line-height: 1;
            }
            ol,
            ul {
              list-style: none;
            }
            blockquote,
            q {
              quotes: none;
            }
            blockquote:before,
            blockquote:after,
            q:before,
            q:after {
              content: "";
              content: none;
            }
            table {
              border-collapse: collapse;
              border-spacing: 0;
            }
            @import url("https://fonts.googleapis.com/css?family=Karla:400,700|Open+Sans:400,600");
            a {
              color: inherit;
              text-decoration: none;
              border-bottom: 1.5px solid #113654;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-family: "Karla", sans-serif;
              font-size: 50px;
              font-weight: 600;
            }
            * {
              box-sizing: border-box;
            }
            body {
              font-family: -apple-system, system-ui, BlinkMacSystemFont,
                "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              color: #34495e;
              padding: 0px 144px;
              padding-top: 232px;
              line-height: 1.5;
            }
            @media screen and (max-width: 1200px) {
              body {
                padding-left: 50px;
                padding-right: 50px;
              }
            }
          `}
        </style>
      </main>
    );
  }
}

export default class MyApp extends App<any> {
  render() {
    const { Component, pageProps, online } = this.props;
    return (
      <Container>
        <Layout online={online}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
