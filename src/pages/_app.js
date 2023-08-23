import "../styles/reset.css";
import "@/styles/globals.css";
import { CartProvider } from "@/context/cartContext";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
