import Head from 'next/head'
import { useRouter } from 'next/router'

const SEO = ({ title, description }) => {
  const router = useRouter()
  return (
    <Head>
      <title>
        {title} | {process.env.NEXT_PUBLIC_APP_NAME}
      </title>
      <meta name='description' content={description} />
      <link
        rel='canonical'
        href={
          process.env.NODE_ENV === 'production'
            ? `${process.env.NEXT_PUBLIC_APP_DOMAIN_PROD}${router.asPath}`
            : `${process.env.NEXT_PUBLIC_APP_DOMAIN_DEV}${router.asPath}`
        }
      />
      <meta
        property='og:title'
        content={`${title} | ${process.env.NEXT_PUBLIC_APP_NAME}`}
      />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='webiste' />
      <meta
        property='og:url'
        content={
          process.env.NODE_ENV === 'production'
            ? `${process.env.NEXT_PUBLIC_APP_DOMAIN_PROD}${router.asPath}`
            : `${process.env.NEXT_PUBLIC_APP_DOMAIN_DEV}${router.asPath}`
        }
      />
      <meta
        property='og:site_name'
        content={`${process.env.NEXT_PUBLIC_APP_NAME}`}
      />

      {/* <meta property='og:image' content={`${process.env.APP_DOMAIN_DEV}/static/images/seoblog.jpg`} />
	  <meta
		property='og:image:secure_url'
		content={`${process.env.APP_DOMAIN_DEV}/static/images/seoblog.jpg`}
	  /> */}
      <meta property='og:image:type' content='image/jpg' />
      <meta property='fb:app_id' content={`${process.env.NEXT_PUBLIC_FB_ID}`} />
    </Head>
  )
}

export default SEO
