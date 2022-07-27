import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Global } from "@emotion/react";
import { RelayEnvironmentProvider } from "react-relay";

import App from "./App";
import Environment from "./relay";
import { GlobalStyle } from "./styles/global";

const queryClient = new QueryClient();

ReactDOM.render(
  <RelayEnvironmentProvider environment={Environment}>
    <QueryClientProvider client={queryClient}>
      <Global styles={GlobalStyle} />
      <App />
    </QueryClientProvider>
  </RelayEnvironmentProvider>,
  document.getElementById("root")
);
