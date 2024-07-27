"use client";
import { getQueryClient } from "@/lib/query";
import { QueryClientProvider } from "@tanstack/react-query";
const QuertyProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QuertyProvider;
