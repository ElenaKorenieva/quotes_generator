import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import QuotesView from "./components/QuotesView/QuotesView";

function App() {
  const [randomQuote, setRandomQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  const getQuote = async () => {
    const BASE_URL = "https://api.api-ninjas.com/v1/quotes";
    const API_KEY = "nbORZXsk6/44fzMj1SblwA==ivY59hHP2tMIMbNu";

    try {
      const response = await axios.get(`${BASE_URL}?category=education`, {
        headers: {
          "X-Api-Key": API_KEY,
        },
      });
      const data = response.data[0];
      setRandomQuote(data?.quote);
      setQuoteAuthor(data?.author);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  const handleClick = () => {
    getQuote();
  };

  return (
    <>
      <Header />
      {randomQuote && <QuotesView quote={randomQuote} author={quoteAuthor} />}
      <Button text="New Quote" btnClick={handleClick} />
    </>
  );
}

export default App;
