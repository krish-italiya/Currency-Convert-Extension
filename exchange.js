document.addEventListener("DOMContentLoaded", () => {
  const amount = document.querySelector("#amount");
  console.log(amount);
  const currency = document.querySelector("#currency");
  console.log(currency);
  const convert = document.querySelector("#convert");
  console.log(convert);
  const result = document.querySelector("#result");
  console.log(result);

  const apiKey = "5ObMnAb7OXw7ONQqrjOH+A==WOteBMQkEMmgWcgj";
  const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_";

  convert.addEventListener("click", () => {
    const amountTotal = amount.value;
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;
    fetch(url, {
      headers: {
        "X-API-KEY": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const rate = data.exchange_rate;
        const res = amountTotal * rate;

        result.innerHTML = `${amountTotal} ${currencyTotal} = ${res.toFixed(
          2
        )}USD`;
      })
      .catch((err) => {
        console.error("Error Occured", err);
        result.innerHTML = "Some Error Occured!!";
      });
  });
});
