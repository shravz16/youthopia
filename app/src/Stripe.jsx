import React, { useState, useEffect } from "react";
import FollowSocials from "./FollowSocials";
import '../styles/FollowSocials.css';
import '../styles/Stripe.css';
 
const ProductDisplay = () => (
  <section className="main">
    <div className="product">
      <div className="description">
        <h2 id="Stripe-title">Donate using Stripe Payments </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, maiores?</p>
        <div className="donation-area">
          
          <form action="https://donate.stripe.com/test_eVa16Z1z02dm1GweUU" method="GET">
            <button type="submit">
              Donate using Stripe
            </button>
          </form>
        </div>

      </div>
    </div>
    <FollowSocials />
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}