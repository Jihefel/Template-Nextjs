export default function contact(props) {
  return (
    <div>
      <h1>ISR</h1>
      <div>
        <h4>
          <q>{props.quote.quote}</q>
        </h4>
        <p>{props.quote.author}</p>
      </div>
    </div>
  );
}

// https://goquotes-api.herokuapp.com/api/v1/random?count=1

export async function getStaticProps() {
  const category = "business";
  const response = await fetch(
    `https://api.api-ninjas.com/v1/quotes?category=${category}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": "t/k5se3hkFdfhrEQIaxjhA==OUEdBnPA0Hugt7pJ",
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  // if (data.length === 0) {
  //   return {notFound: true}
  // }
  
  if (data.length === 0) {
    return {
      redirect: {
        destination: "/isr",
      },
    };
  }

  return {
    props: { quote: data[0] },
    revalidate: 10,
  };
}
