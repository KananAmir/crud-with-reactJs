import React from 'react';
import { Route, Routes } from "react-router-dom";
import AddSupplier from '../pages/add-supplier';
import ErrorPage from '../components/error';
import HomePage from '../pages/home-page'
import SupplierList from '../pages/supplier-page'
import SupplierDetail from '../pages/supplier-detail-page'

export const Routing = () => {
  return (
    <div className="container mx-auto px-4">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/supplier-list' element={<SupplierList />} />
        <Route path='/supplier-list/:id' element={<SupplierDetail />} />
        <Route path='/supplier-add' element={<AddSupplier />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>

  )
}
