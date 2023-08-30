import Head from "next/head"
import { DrupalNode } from "next-drupal"
import { Layout } from "components/layout"

interface IndexPageProps {
  nodes: DrupalNode[]
}

export default function IndexPage({ nodes }: IndexPageProps) {
  return (
    <Layout>
      <Head>
        <title>Reload but it's headless</title>
        <meta
          name="description"
          content="Reload er et arbejdssted."
        />
      </Head>
      <pre>Hej</pre>
    </Layout>
  )
}
