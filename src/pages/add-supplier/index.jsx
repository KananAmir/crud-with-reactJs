import React, { useState } from 'react';
import { addSuppliers } from '../../services/supplierServise';
// import { useNavigate } from 'react-router-dom';
import './index.scss';

const AddSupplier = () => {
    // const navigate = useNavigate();

    const [data, setData] = useState({
        companyName: '',
        contactTitle: '',
        address: {
            country: '',
            phone: '',
            postalCode: '',
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.companyName
            && data.contactTitle
            && data.address.country
            && data.address.phone
            && data.address.postalCode) {
            addSuppliers(data);
            // navigate(-1);
        } else {
            window.alert('You can not add empty supplier, Please fill all fields!!')
        }
    }
    return (
        <div id='add-supplier' className='grid place-items-center p-12'>
            <h2 className='text-5xl font-extrabold tracking-widest text-[#04aa6d]'>Add a New Supplier</h2>

            <form className="w-full max-w-sm mt-6" onSubmit={handleSubmit}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-2/5">
                        <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name"
                        >
                            Company Name
                        </label>
                    </div>
                    <div className="md:w-3/5">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#04aa6d]-500"
                            type="text"
                            value={data.companyName}
                            onChange={(e) => setData({ ...data, companyName: e.target.value })}
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-2/5">
                        <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name"
                        >
                            Contact Title
                        </label>
                    </div>
                    <div className="md:w-3/5">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#04aa6d]-500"
                            type="text"
                            value={data.contactTitle}
                            onChange={(e) => setData({ ...data, contactTitle: e.target.value })}
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-2/5">
                        <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name"
                        >
                            Country
                        </label>
                    </div>
                    <div className="md:w-3/5">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#04aa6d]-500"
                            type="text"
                            value={data.address.country}
                            onChange={(e) => setData({ ...data, address: { ...data.address, country: e.target.value } })}

                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-2/5">
                        <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name"
                        >
                            Phone
                        </label>
                    </div>
                    <div className="md:w-3/5">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#04aa6d]-500"
                            type="number"
                            value={data.address.phone}
                            onChange={(e) => setData({ ...data, address: { ...data.address, phone: e.target.value } })}
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-2/5">
                        <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name"
                        >
                            Postal Code
                        </label>
                    </div>
                    <div className="md:w-3/5">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#04aa6d]-500"
                            type="text"
                            value={data.address.postalCode}
                            onChange={(e) => setData({ ...data, address: { ...data.address, postalCode: e.target.value } })}
                        />
                    </div>
                </div>

                <div className="grid place-items-center">
                    <button
                        className="shadow bg-[#04aa6d] hover:bg-[#04aa6d]-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Add New Supplier
                    </button>
                </div>
            </form>

        </div>
    )
}

export default AddSupplier