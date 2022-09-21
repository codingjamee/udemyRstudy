import Cart from "./conponents/Cart/Cart";
import Header from "./conponents/Layout/Header";
import Meals from "./conponents/Meals/Meals";
import React, { useState } from "react";
import CartProvier from "./store/CartProvider";

function App() {
  const [open, setOpen] = useState(false);

  const onClickOpen = receivedState => {
    setOpen(receivedState);
  };
  return (
    <CartProvier>
      {open && <Cart onClickOpen={onClickOpen} />}
      <Header onClickOpen={onClickOpen} />
      <main>
        <Meals />
      </main>
    </CartProvier>
  );
}

export default App;
