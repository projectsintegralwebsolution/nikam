"use client";

import React, { createContext, useContext, useState } from "react";

interface QuoteModalContextType {
  isOpen: boolean;
  productCategory: string;
  openQuoteModal: (category?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType>({
  isOpen: false,
  productCategory: "",
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
});

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [productCategory, setProductCategory] = useState("");

  const openQuoteModal = (category = "") => {
    setProductCategory(category);
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        productCategory,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}
