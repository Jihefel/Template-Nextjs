// import { Button, Form } from "react-bootstrap";
import { Button, Icon, TextInput } from "react-materialize";
import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import { IoMdSend } from "react-icons/io";
import axios from "axios";

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

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(newContact),
      headers: {
        "Content-Type": "application/json",
      },
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
      <h1 className="center">Contact au hasard</h1>
      <div className="center section">
        <Button className="deep-purple center pulse" onClick={newContact} waves="purple">
          Random
        </Button>
      </div>
      <div className="section">
        <ul>
          <li>{randomContact?.name}</li>
          <li>{randomContact?.phone}</li>
          <li>{randomContact?.email}</li>
        </ul>
      </div>
      <div className="divider"></div>

      <form onSubmit={handleSubmit}>
        <TextInput id="TextInput-114" label="Name" ref={newName} />
        <TextInput id="TextInput-1" label="Phone" ref={newPhone} />
        <TextInput email id="TextInput-127" label="Email" ref={newEmail} />

        <Button node="button" type="submit" waves="orange" className="purple">
          Submit
          <Icon right>
            <IoMdSend />
          </Icon>
        </Button>
      </form>
    </>
  );
}

export default Contact;
