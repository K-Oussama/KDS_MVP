import OrderDetail from '../components/OrderDetail';
import LoadingSpinner from '../components/Loadings/LoadingSpinner';
import { getClientAccessToken, searchOrdersByEmail } from '../utils/api';
import { useEffect, useState } from 'react';

function Orders() {
  const [orderDetails, setOrderDetails] = useState([]);
  const [shopId, setShopId] = useState("");
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (validate) {
        const accessToken = await getClientAccessToken();
        const orderDetailsJson = await searchOrdersByEmail(accessToken, shopId, email);
        setOrderDetails(orderDetailsJson);
      }
    }

    fetchData();
  }, [email, shopId, validate]);

  const handleShopIdChange = (e) => {
    setShopId(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email && shopId){setValidate(true);}
  };
  if(!validate){
    return <>
    <div className="container my-8 px-6 mx-auto w-1/3 mt-[10vh]">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Customer Email</label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          </div>
          <input type="text" id="email" value={email} onChange={handleEmailChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="customer@email.com" />
        </div>
        
        <label htmlFor="shopId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shop ID</label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            🎪
          </span>
          <input type="text" value={shopId} onChange={handleShopIdChange} className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="RefArch" />
        </div>
        
        <br/>
        <button type="submit" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">🔍 Search</button>
      </form>
      </div>
    </>
  }

  if (validate && orderDetails.length === 0) {
    return (<LoadingSpinner />)
  }
  return (
    <div>
      <h1>This is Orders page.</h1>
      {orderDetails.query && (<center>Orders by email : <b>{orderDetails.query.text_query.search_phrase}</b></center>)}
      {orderDetails.hits.map((orderDetail) => (
      <OrderDetail key={orderDetail.data.order_no} detail={orderDetail.data} />
      ))}
    </div>
  );
}

export default Orders;
