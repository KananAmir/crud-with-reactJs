import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/spinner';
import { getSupplierDetail } from '../../services/supplierServise';
import './index.scss'

const SupplierDetail = () => {

    const [supplier, setSupplier] = useState();
    const [isLoading, setIsLoading] = useState(true);

    let { id } = useParams();
    const navigate = useNavigate();

    const getSupplier = async () => {
        setSupplier(await getSupplierDetail(id));
        setIsLoading(false);
    }

    useEffect(() => {
        getSupplier();
        // eslint-disable-next-line
    }, [])

    return (
        <div id='supplier-detail' className='text-center p-12'>
            {isLoading
                ?
                <Spinner />
                :
                <>
                    <h1 className='text-4xl font-extrabold tracking-widest text-[#04aa6d] mb-6'>{supplier?.companyName}</h1>
                    <ul>
                        <li></li>
                        <li>Contact Title: <span>{supplier?.contactTitle}</span></li>
                        <li>Country: <span>{supplier?.address.city},  {supplier?.address.country}</span></li>
                        <li>Street: <span>{supplier?.address.street}</span></li>
                        <li>Phone: <span>{supplier?.address.phone}</span></li>
                        <li>Postal Code: <span>{supplier?.address.postalCode}</span></li>
                    </ul>
                    <button className='px-8 py-3 bg-[#1A2238] border border-current text-white mt-6' onClick={() => navigate(-1)}>Go back</button>
                </>
            }

        </div>
    )
}

export default SupplierDetail