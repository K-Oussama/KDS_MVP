


function OrderDetail({detail}) {
    const { order_no, customer_name, creation_date, last_modified, confirmation_status } = detail;
    return (
      <div className="flex flex-col justify-center items-start">
        <p className="text-4xl font-semibold m-4">Customer : {customer_name} with order number : <span className="opacity-50 text-slate-600">{order_no}</span> - <span className="opacity-80 text-green-600">{confirmation_status}</span></p>
      </div>
    );
}


export default OrderDetail
