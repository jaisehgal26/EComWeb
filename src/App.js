import React from "react";
import { AuthProvider } from "./components/Auth";
import Routes from "./components/Routes";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
