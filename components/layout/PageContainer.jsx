import React from 'react';
import Head from 'next/head';
import Footer from '../shared/footer/Footer';
import Header2 from '../shared/headers/Header2';

const initHeaders = (
    <>
        <Header2 />
    </>
);
const initFooters = (
    <>
        <Footer />
    </>
);

const PageContainer = ({
    header = initHeaders,
    footer = initFooters,
    children,
    title = 'Page',
}) => {
    let titleView;

    if (title !== '') {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <>
            <Head>
                <title>{titleView}</title>
            </Head>
            {header}
            {children}
            {footer}
        </>
    );
};

export default PageContainer;
