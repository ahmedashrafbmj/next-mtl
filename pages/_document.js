import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/* <link
                        href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext"
                        rel="stylesheet"
                    />
                */}
                {/* <!-- Css --> */}
                <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="/css/animate.min.css" />
                <link rel="stylesheet" type="text/css" href="/css/bootstrap-submenu.css" />
                <link rel="stylesheet" type="text/css" href="/css/bootstrap-select.min.css" />
                <link rel="stylesheet" href="css/leaflet.css" type="text/css" />
                <link rel="stylesheet" href="css/map.css" type="text/css" />
                <link rel="stylesheet" type="text/css" href="/fonts/font-awesome/css/font-awesome.min.css" />
                <link rel="stylesheet" type="text/css" href="/fonts/flaticon/font/flaticon.css" />
                <link rel="stylesheet" type="text/css" href="/fonts/linearicons/style.css" />
                <link rel="stylesheet" type="text/css" href="/css/jquery.mCustomScrollbar.css" />
                <link rel="stylesheet" type="text/css" href="/css/dropzone.css" />
                <link rel="stylesheet" type="text/css" href="/css/slick.css" />
                {/* Custom stylesheet */}
                <link rel="stylesheet" type="text/css" href="/css/style.css" />
                <link rel="stylesheet" type="text/css" id="style_sheet" href="/css/skins/default.css" />
                {/* Favicon icon */}
                {/* <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" /> */}
                {/* Google fonts */}
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700%7CRoboto:300,400,500,700&display=swap" />
                {/* IE10 viewport hack for Surface/desktop Windows 8 bug */}
                <link rel="stylesheet" type="text/css" href="/css/ie10-viewport-bug-workaround.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}