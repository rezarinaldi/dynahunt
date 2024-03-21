"use client";

import { useState } from "react";
import { Toaster } from "react-hot-toast";

export const ProviderToast = ({ children }) => {
  const [toastShown, setToastShown] = useState(false);
  return (
    <>
      {children}
      <Toaster
        position="top-left"
        reverseOrder={false}
        toastOptions={{
          style: { boxShadow: "none", border: "solid 1px #E5E7EB" },
        }}
        toastFn={({ message }) => {
          // Show the toast only if it hasn't been shown before
          if (!toastShown) {
            setToastShown(true);
            return message;
          }
        }}
      />
    </>
  );
};
