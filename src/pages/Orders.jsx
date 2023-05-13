import OrderDetail from '../components/OrderDetail';
import { getClientAccessToken, searchOrder } from '../utils/api';
import { useEffect, useState } from 'react';

function Orders() {
  const [orderDetails, setorderDetails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const accessToken = await getClientAccessToken();
      const orderDetailsJson = await searchOrder(accessToken);
      setorderDetails(orderDetailsJson);
    }

    fetchData();
  }, []);

  if (orderDetails.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>This is Orders page.</h1>
      <center>Searched order : <b>{orderDetails.query.text_query.search_phrase}</b></center>
      {orderDetails.hits.map((orderDetail) => (
      <OrderDetail key={orderDetail.data.order_no} detail={orderDetail.data} />
      ))}
    </div>
  );
}

export default Orders;
