import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a QueryClient instance for TanStack Query
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap the entire Router with QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;

