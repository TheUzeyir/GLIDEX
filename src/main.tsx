  import { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';
  import './global.css';
  import App from './App.tsx';
  import { store } from "./store/store.ts";
  import { Provider } from "react-redux";
  import { ClerkProvider } from '@clerk/clerk-react';

  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string;
  console.log(PUBLISHABLE_KEY);

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }

  const root = createRoot(document.getElementById('root')!);

  root.render(
    <StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      afterSignInUrl="/"     // Girişten sonra ana sayfaya yönlendir
      afterSignOutUrl="/"    // Çıkıştan sonra ana sayfa
    >        <Provider store={store}>
          <App />
        </Provider>
      </ClerkProvider>
    </StrictMode>
  );
