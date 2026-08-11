"use client";

import { AuthProvider } from "./AuthContext";
import { StoreProvider } from "./StoreContext";
import { CartProvider } from "./CartContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <StoreProvider>
        <CartProvider>{children}</CartProvider>
      </StoreProvider>
    </AuthProvider>
  );
}
