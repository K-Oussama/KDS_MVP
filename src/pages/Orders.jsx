import OrderDetail from '../components/OrderDetail';
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="shopId">Shop ID: </label>
        <input type="text" id="shopId" value={shopId} onChange={handleShopIdChange} />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" value={email} onChange={handleEmailChange}/>
        <br/>
        <button type="submit">Submit</button>
      </form>
      <hr/>
    </>
  }

  if (validate && orderDetails.length === 0) {
    return <>
      <hr/>
    <div>Loading...</div>
    </>
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
