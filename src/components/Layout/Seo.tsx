import Head from 'next/head';
import React from 'react'

interface SeoProps {
    title: string;
    description?: string;
    isSufix?: boolean;
}

function Seo({ title, description, isSufix = true }: SeoProps) {

    const titleSeo = isSufix ? title : `${title} | Baixar músicas grátis e YouTube Downloader`;
    return (
        <Head>
            <head>
                <title>{titleSeo}</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                {description && <meta name="description" content={description} />}
                <meta property="og:type" content={process.env.NEXT_PUBLIC_URL} />
                <meta name="og:title" property="og:title" content={title} />
                {description && <meta name="og:description" property="og:description" content={description} />}
                <meta property="og:site_name" content="" />
                <meta property="og:url" content="" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={titleSeo} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:site" content={process.env.NEXT_PUBLIC_URL} />
                <meta name="twitter:creator" content="KNK Solutions" />
                <link rel="icon" type="image/png" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
                <link rel="stylesheet" href="" />
                <meta property="og:image" content="" />
                <meta name="twitter:image" content="" />
                <link rel="canonical" href={process.env.NEXT_PUBLIC_URL} />
            </head>
        </Head>
    )
}

export default Seo
