import { createRoot } from "react-dom/client";
import App from "./App";
import { StoreProvider } from "easy-peasy";
import store from "./store";

createRoot(document.getElementById("root")).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
