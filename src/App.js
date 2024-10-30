import "./App.css";
import Tabs from "./components/Tabs";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Tabs />
      </div>
    </QueryClientProvider>
  );
}

export default App;
