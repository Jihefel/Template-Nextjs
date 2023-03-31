function Cours(props) {
  

  return (
    <>
      <h1 className="text-center my-3">Le BTC est à {props.response.data[0].quote.EUR.price.toFixed(2)} €</h1>
    </>
  );
}

export default Cours;

export async function getServerSideProps(context) {
  const amount = 1;
  const convert = "EUR";
  const symbol = "BTC";

console.log(context)

  const data = await fetch(
    `https://pro-api.coinmarketcap.com/v2/tools/price-conversion?amount=${amount}&convert=${convert}&symbol=${symbol}`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": "b8e32f51-9693-4075-8e5d-edad74ac4ac5",
        "Content-Type": "application/json",
      },
    }
  );

  const response = await data.json();

  return {
    props: { response },
  };
}
