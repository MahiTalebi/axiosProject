import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Random from "./Component/Random";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Random />
    </QueryClientProvider>
  );
}

export default App;
