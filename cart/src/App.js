import Cart from "./conponents/Cart/Cart";
import Header from "./conponents/Layout/Header";
import Meals from "./conponents/Meals/Meals";
import React, { useState } from "react";
import CartProvier from "./store/CartProvider";

function App() {
  const [open, setOpen] = useState(false);

  const onClickOpen = () => {
    setOpen(true);
  };

  const onClickClose = () => {
    setOpen(false);
  };
  return (
    <CartProvier>
      {open && <Cart onClickClose={onClickClose} />}
      <Header onClickOpen={onClickOpen} />
      <main>
        <Meals />
      </main>
    </CartProvier>
  );
}

export default App;
