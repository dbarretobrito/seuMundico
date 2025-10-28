import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "./components/Navbar";
import { GlobalStyle } from "./styles/global";
import { AppContainer } from "./layout/AppStyles";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { ContactPage } from "./pages/ContactPage";
import { CartProvider } from "./context/CartProvider";
import PageTransition from "./components/PageTransition";
import { NationalShirts } from "./pages/NationalShirts"; 
import { InternationalShirts } from "./pages/InternationalShirts";
import { SearchPage } from "./pages/SearchPage";

export function App() {
  const location = useLocation();

  return (
    <CartProvider>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AppContainer>
          <GlobalStyle />
          <Header />
          <main>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <PageTransition>
                      <Home />
                    </PageTransition>
                  }
                />
                <Route
                  path="/product/:id"
                  element={
                    <PageTransition>
                      <ProductPage />
                    </PageTransition>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <PageTransition>
                      <CartPage />
                    </PageTransition>
                  }
                />
                <Route path="/search" element={<PageTransition><SearchPage /></PageTransition>} />
                <Route
                  path="/national-shirts"
                  element={
                    <PageTransition>
                      <NationalShirts />
                    </PageTransition>
                  }
                />
                <Route path="/international-shirts" element={<PageTransition><InternationalShirts /></PageTransition>} />
                <Route
                  path="/contact"
                  element={
                    <PageTransition>
                      <ContactPage />
                    </PageTransition>
                  }
                />
              </Routes>
            </AnimatePresence>
          </main>
        </AppContainer>
      </motion.div>
    </CartProvider>
  );
}
