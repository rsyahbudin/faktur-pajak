import React, { useState, useRef, useEffect } from "react";

const CustomModal = ({ isOpen, onClose, transactionId }) => {
   if (!isOpen) {
      return null;
   }

   // State untuk menyimpan nilai dari form input
   const [formData, setFormData] = useState({
      name: "aaa",
      idTrx: transactionId,
      phone: "",
      npwp: "",
   });

   // Fungsi untuk menangani perubahan pada form input
   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   const modalRef = useRef(); // Buat referensi untuk elemen modal

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
         }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [onClose]);

   // Fungsi untuk menangani submit form
   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData); // Atau lakukan apa yang Anda inginkan dengan data form
      onClose(); // Tutup modal setelah submit
   };

   return (
      <div className="fixed z-10 inset-0 overflow-y-auto" ref={modalRef}>
         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
               className="fixed inset-0 transition-opacity"
               aria-hidden="true"
            >
               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
               className="hidden sm:inline-block sm:align-middle sm:h-screen"
               aria-hidden="true"
            >
               &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                     <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                           className="text-lg leading-6 font-medium text-gray-900"
                           id="modal-title"
                        >
                           Form Input
                        </h3>
                        <div className="mt-2">
                           <form onSubmit={handleSubmit}>
                              <div className="mb-4">
                                 <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                 >
                                    Nama
                                 </label>
                                 <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                 />
                              </div>
                              <div className="mb-4">
                                 <label
                                    htmlFor="idTrx"
                                    className="block text-sm font-medium text-gray-700"
                                 >
                                    ID Transaksi
                                 </label>
                                 <input
                                    type="text"
                                    name="idTrx"
                                    id="idTrx"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={formData.idTrx}
                                    onChange={handleInputChange}
                                    required
                                 />
                              </div>
                              <div className="mb-4">
                                 <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                 >
                                    Email
                                 </label>
                                 <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                 />
                              </div>
                              <div className="mb-4">
                                 <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700"
                                 >
                                    Nomor Telepon
                                 </label>
                                 <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                 />
                              </div>
                              <div className="mb-4">
                                 <label
                                    htmlFor="npwp"
                                    className="block text-sm font-medium text-gray-700"
                                 >
                                    NPWP
                                 </label>
                                 <input
                                    type="text"
                                    name="npwp"
                                    id="npwp"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={formData.npwp}
                                    onChange={handleInputChange}
                                    required
                                 />
                              </div>
                              <div className="flex justify-end">
                                 <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                 >
                                    Submit
                                 </button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CustomModal;
