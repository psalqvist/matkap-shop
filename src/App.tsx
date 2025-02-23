import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./contexts/StoreContext";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "./components/Layout/Header";
import CategorySidebar from "./components/Layout/CategorySidebar";
import Cart from "./components/Cart/Cart";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <StoreProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-[#F6F6F6]">
            <Header />
            <div className="flex-1 flex lg:px-[100px] px-[20px] pt-[35px]">
              <CategorySidebar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                </Routes>
              </main>
            </div>
            <Cart />
          </div>
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </StoreProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;