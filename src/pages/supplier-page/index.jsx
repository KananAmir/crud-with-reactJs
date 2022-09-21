import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss'
import { deleteSupplier, getSuppliers } from '../../services/supplierServise';
import Spinner from '../../components/spinner';

const SupplierListPage = () => {

    const [suppliers, setSuppliers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        setSuppliers(await getSuppliers());
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, [])

    const handleDelete = (id) => {
        deleteSupplier(id).then(() => { getData() });   
    }

    return (
        <div id='supplier-list-page' className='grid place-items-center'>
            {isLoading
                ?
                <Spinner />
                :
                <table>
                    <thead>
                        <tr>
                            <th>Company ID</th>
                            <th>Company Name</th>
                            <th>Contact Title</th>
                            <th>Country</th>
                            <th>Phone</th>
                            <th>Postal Code</th>
                            <th>Detail</th>
                            <th>Delete Supplier</th>
                        </tr>
                    </thead>
                    <tbody>
                        {suppliers && suppliers.map(supplier => (
                            <tr key={supplier.id} >
                                <td>{supplier.id}</td>
                                <td>{supplier.companyName}</td>
                                <td> {supplier.contactTitle}</td>
                                <td> {supplier.address?.country}</td>
                                <td> {supplier.address?.phone}</td>
                                <td> {supplier.address?.postalCode}</td>
                                <td> <Link to={`${supplier.id}`}>Link to Supplier</Link></td>
                                <td style={{ color: 'red', fontWeight: '600' }} onClick={() => handleDelete(supplier.id)}> Delete</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            }

        </div>
    )
}

export default SupplierListPage