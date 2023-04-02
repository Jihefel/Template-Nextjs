import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Row, Col, Collection, CollectionItem } from "react-materialize";

export default function Home(props) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Exo de next pute</title>
      </Head>

      <Row>
        <Col m={6} s={12}>
          <Collection>
            {props.bodies.map((body) =>
              body.isPlanet === true || body.id === "soleil" ? (
                <CollectionItem key={body.id}>
                  <Link href={router.pathname + "/" + body.name.toLowerCase()}>
                    {body.name}
                  </Link>
                </CollectionItem>
              ) : null
            )}
          </Collection>
        </Col>
      </Row>
    </>
  );
}

export async function getStaticProps() {
  const data = await import(`../../data/bodies.json`);
  const bodies = data.bodies;

  return {
    props: { bodies },
  };
}
