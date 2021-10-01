import { useState, useEffect, useContext } from 'react';
import MaterialTable from 'material-table';

import { UserContext } from '../context/UserContext';

const Table = ({ title }) => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  const headers = {
    'Content-type': 'application/json',
    Authorization: `Bearer ${user.token}`,
  };

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOrders = async () => {
    fetch(`http://localhost:5000/api/orders/`, {
      method: 'GET',
      headers,
    })
      .then((resp) => resp.json())
      .then((resp) => setData(resp.orders));
  };

  const orders = [
    // { title: '#', field: 'id', sorting: false, editable: false },
    { title: 'user', field: 'user' },
    { title: 'Address', field: 'shippingAddress.address' },
    { title: 'City', field: 'shippingAddress.city' },
    { title: 'PostalCode', field: 'shippingAddress.postalCode' },
    { title: 'Country', field: 'shippingAddress.country' },
    { title: 'totalPrice', field: 'totalPrice' },

    // {
    //   title: 'Order items',
    //   field: 'orderItems',
    //   render: (rowData) =>
    //     rowData.orderItems ? rowData.orderItems.join() : 'mpikan!',
    // },
  ];

  return (
    <>
      <MaterialTable
        title={title}
        data={data}
        columns={orders}
        editable={{
          // // ADD ORDER
          // onRowAdd: (newData) =>
          //   new Promise((resolve, reject) => {
          //     console.log(newData, `:: new Order: ${newData.name} from table`);
          //     fetch(`http://localhost:5000/api/orders/`, {
          //       method: 'POST',
          //       headers,
          //       body: JSON.stringify({ user: user._id, ...newData }),
          //     })
          //       .then((resp) => resp.json())
          //       .then((resp) => getOrders());
          //     resolve();
          //   }),

          // DELETE ORDER
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              console.log(
                oldData,
                `:: Order: ${oldData.name} deleted from table`
              );
              fetch(`http://localhost:5000/api/orders/${oldData._id}`, {
                method: 'DELETE',
                headers,
                body: JSON.stringify({ user: user._id, ...oldData }),
              })
                .then((resp) => resp.json())
                .then((resp) => getOrders());
              resolve();
            }),

          // UPDATE ORDER
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              console.log(
                newData,
                `:: updated Order: ${newData.name} from table`
              );
              fetch(`http://localhost:5000/api/orders/${oldData._id}`, {
                method: 'PUT',
                headers,
                body: JSON.stringify({ user: user._id, ...newData }),
              })
                .then((resp) => resp.json())
                .then((resp) => getOrders());
              resolve();
            }),
        }}
        options={{
          selection: true,
          actionsColumnIndex: -1,
          searchAutoFocus: true,
          // filtering: true,
          pageSizeOptions: [5, 10, 25, 50],
          pageSize: 10,
          paginationType: 'stepped',
          paginationPosition: 'both',
          addRowPosition: 'first',
          exportButton: true,
          exportAllData: true,
          tableLayout: 'auto',
        }}
      />
    </>
  );
};

export default Table;
