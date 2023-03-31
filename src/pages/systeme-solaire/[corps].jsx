import { useRouter } from "next/router";
import React from "react";
import { Card, Accordion } from "react-bootstrap";

export default function Corps(props) {
  const planete = props.planeteActuelle;
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Chargement...</h1>;
  }

  return (
    <Card className="text-center">
      <Card.Header>
        <Card.Title>{planete.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <dl>
          <dt>Masse : </dt>
          <dd>
            {planete.mass.massValue}&times;10<sup>{planete.mass.massExponent}</sup> kg
          </dd>
          {planete.gravity !== 0.0 ? (
            <>
              <dt>Gravité : </dt>
              <dd>{planete.gravity} N/kg</dd>
            </>
          ) : (
            ""
          )}
        </dl>
      </Card.Body>
    </Card>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.corps;
  const data = await import("../../data/bodies.json");

  const planeteActuelle = data.bodies.find(
    (body) => body.name.toLowerCase() === slug
  );

  // Si pas de planete valide envoyée en url
  if (!planeteActuelle) {
    return { notFound: true };
  }

  return {
    props: { planeteActuelle },
  };
}

export async function getStaticPaths() {
  const data = await import("../../data/bodies.json");

  const paths = data.bodies.map((body) => ({
    params: { corps: body.name.toLowerCase() },
  }));

  return {
    // paths: [{params : {corps: "la Terre"}}],
    // fallback: true,
    paths,
    fallback: false,
  };
}
