import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WorkingHoliday from "./pages/WorkingHoliday";
import AuPair from "./pages/AuPair";
import SkiSeason from "./pages/SkiSeason";
import StuderaUtomlands from "./pages/StuderaUtomlands";
import Volontararbete from "./pages/Volontararbete";
import PraktikUtomlands from "./pages/PraktikUtomlands";
import Destination from "./pages/Destination";
import MapPage from "./pages/MapPage";
import Alperna from "./pages/Alperna";
import Sydostasien from "./pages/Sydostasien";
import Sydamerika from "./pages/Sydamerika";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/working-holiday" element={<WorkingHoliday />} />
          <Route path="/au-pair" element={<AuPair />} />
          <Route path="/ski-season" element={<SkiSeason />} />
          <Route path="/studera-utomlands" element={<StuderaUtomlands />} />
          <Route path="/volontararbete" element={<Volontararbete />} />
          <Route path="/praktik-utomlands" element={<PraktikUtomlands />} />
          <Route path="/destination/:slug" element={<Destination />} />
          <Route path="/karta" element={<MapPage />} />
          <Route path="/alperna" element={<Alperna />} />
          <Route path="/sydostasien" element={<Sydostasien />} />
          <Route path="/sydamerika" element={<Sydamerika />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
