import "./styles/main.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "@/App";
import { FavoritesProvider } from "@/context/FavoritesContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
