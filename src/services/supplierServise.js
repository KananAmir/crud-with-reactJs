import axios from 'axios';

const REACT_APP_BASE_URL = 'https://northwind.vercel.app/api/';

export const getSuppliers = async () => {
    try {
        let response = await axios.get(`${REACT_APP_BASE_URL}suppliers`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const addSuppliers = async (data) => {
    try {
        await axios.post(`${REACT_APP_BASE_URL}suppliers`, data)
    } catch (error) {
        throw error;
    }
}

export const getSupplierDetail = async (id) => {
    try {
        let response = await axios.get(`${REACT_APP_BASE_URL}suppliers/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const deleteSupplier = async (id) => {
    try {
        await axios.delete(`${REACT_APP_BASE_URL}suppliers/${id}`);
    } catch (error) {
        throw error;
    }
}

