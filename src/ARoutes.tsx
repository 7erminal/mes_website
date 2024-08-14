import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; 

import HomePage from "./pages/HomePage";

const ARoutes: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [dataLoaded, setDataLoaded] = useState(false)

  return <AnimatePresence>
              <Routes>
                  {/* <Route path="*" element={<NotFoundPage />} /> */}
                  {/* <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} /> */}
                  <Route path='/' element={<HomePage />} />
              </Routes>
          </AnimatePresence>
}

export default ARoutes;