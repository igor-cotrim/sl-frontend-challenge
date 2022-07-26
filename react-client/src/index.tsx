import ReactDOM from "react-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Global } from "@emotion/react";

import App from "./App";
import { GlobalStyle } from "./styles/global";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Global styles={GlobalStyle} />
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);
