import { Button, Form } from "react-bootstrap";
import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";

function Contact() {
  const [data, setData] = useState();

  useEffect(() => {
    newContact();
  }, []);

  const newContact = () => {
    fetch("/api/contact")
      .then((result) => result.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  };

  let randomContact;
  if (data) {
    randomContact = data[~~(Math.random() * data.length)];
  }

  const newName = useRef();
  const newPhone = useRef();
  const newEmail = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      name: newName.current.value,
      phone: newPhone.current.value,
      email: newEmail.current.value,
    };

    // fetch("/api/contact", {
    //   method: "POST",
    //   body: JSON.stringify(newContact),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((result) => result.json());
    // newName.current.value = "";
    // newPhone.current.value = "";
    // newEmail.current.value = "";

    axios({
      method: "post",
      url: "/api/contact",
      body: JSON.stringify(newContact),
    }).then((result) => result.json());
    newName.current.value = "";
    newPhone.current.value = "";
    newEmail.current.value = "";
  };

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact</title>
      </Head>
      <h1 className="text-center">Contact au hasard</h1>
      <Button className="btn d-block mx-auto" onClick={newContact}>
        Random
      </Button>

      <ul>
        <li>{randomContact?.name}</li>
        <li>{randomContact?.phone}</li>
        <li>{randomContact?.email}</li>
      </ul>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Complete name" ref={newName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="phone" placeholder="Phone" ref={newPhone} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" ref={newEmail} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Contact;
