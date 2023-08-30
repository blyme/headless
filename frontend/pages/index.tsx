import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"

interface IndexPageProps extends LayoutProps {}

export default function IndexPage({ menus }: IndexPageProps) {
  return (
    <Layout menus={menus} >
      <Head>
        <title>Reload</title>
        <meta
          name="description"
          content="Reload er et arbejdssted."
        />
      </Head>
      <pre>Hej</pre>
    </Layout>
  )
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {
  return {
    props: {
      menus: await getMenus(context),
    },
  }
}