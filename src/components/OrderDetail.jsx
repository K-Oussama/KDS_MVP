


function OrderDetail({detail}) {
    const { order_no, order_token, order_total, currency, payment_status, last_modified, customer_name, site_id, creation_date, confirmation_status } = detail;
    return (<>
      <div className="flex items-center justify-center py-8 dark:bg-gray-900">
            <div className="cursor-pointer rounded-md shadow-lg bg-white dark:bg-gray-800 relative">
                <div className="py-5">
                    <div className="px-6">
                        <p className="text-xs text-gray-400">Customer Name</p>
                        <p className="text-sm leading-none text-justify text-gray-800 dark:text-gray-100 mt-1">{customer_name}</p>
                    </div>
                    <div className="mt-5 px-6">
                        <p className="text-xs text-gray-400">Site Name</p>
                        <p className="text-sm leading-none text-justify text-gray-800 dark:text-gray-100 mt-1">{site_id}</p>
                    </div>
                    <div className="mt-5 px-6">
                        <p className="text-xs text-gray-400">Date</p>
                        <p className="text-sm leading-none text-justify text-gray-800 dark:text-gray-100 mt-1">{last_modified}</p>
                    </div>
                    <div className="mt-5 px-6 flex items-center w-full">
                        <div>
                            <p className="text-xs text-gray-400">Payment Status</p>
                            <p className="text-sm leading-none text-justify text-gray-800 dark:text-gray-100 mt-1">{payment_status}</p>
                        </div>
                        <div className="ml-14">
                            <p className="text-xs text-gray-400">Order Total</p>
                            <p className="text-sm leading-none text-justify text-gray-800 dark:text-gray-100 mt-1">{order_total} {currency}</p>
                        </div>
                    </div>
                    <div className="mt-5 px-6 flex items-center text-gray-700 dark:text-gray-400">
                        <p className="text-xs text-gray-400">Order token:</p>

                        <p className="ml-2 text-xs leading-3 text-gray-600 dark:text-gray-400">{order_token}</p>
                        <p />
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                            <path d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="pt-6 flex justify-between relative items-center w-full">
                        <div className="w-3 h-5  dark:bg-gray-400 rounded-r-3xl" />
                        <div className="w-full border-b-2 border-dashed border-gray-100 dark:border-gray-400" />
                        <div className="w-3 h-5  dark:bg-gray-400 rounded-l-3xl" />
                    </div>
                    <div className="mt-4 px-6 flex flex-col w-full justify-center items-center">
                        <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/barCode.png" alt="barcode" />
                        <p className="text-sm font-bold leading-none text-gray-700 dark:text-gray-400 mt-2">{order_no}</p>
                    </div>
                </div>
            </div>
        </div>



    </>);
}


export default OrderDetail
