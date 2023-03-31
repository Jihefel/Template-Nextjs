import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ListGroup } from "react-bootstrap";

export default function Home(props) {

  const router = useRouter();

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Exo de next pute</title>
      </Head>

      <ListGroup>
        {props.bodies.map((body) =>
          body.isPlanet === true || body.id === "soleil" ? (
            <ListGroup.Item key={body.id}>
              <Link href={router.pathname + "/" + body.name.toLowerCase()}>{body.name}</Link>
            </ListGroup.Item>
          ) : null
        )}
      </ListGroup>
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