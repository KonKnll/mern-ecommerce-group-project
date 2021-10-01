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
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUsers = async () => {
    fetch(`http://localhost:5000/api/users/`, {
      method: 'GET',
      headers,
    })
      .then((resp) => resp.json())
      .then((resp) => setData(resp.users));
  };

  const userColumns = [
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' },
    // { title: 'Password', field: 'password' },
    // { title: 'Orders', field: 'orders' },
    { title: 'Admin', field: 'isAdmin', lookup: { true: 'yes', false: 'no' } },
  ];

  return (
    <>
      <MaterialTable
        title={title}
        data={data}
        columns={userColumns}
        editable={{
          // ADD USER
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              console.log(newData, `:: new user: ${newData.name} from table`);
              fetch(`http://localhost:5000/api/users/`, {
                method: 'POST',
                headers,
                body: JSON.stringify({ user: user._id, ...newData }),
              })
                .then((resp) => resp.json())
                .then((resp) => getUsers());
              resolve();
            }),

          // DELETE USER
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              if (user.email === oldData.email) {
                throw new Error('You cant delete your own account');
              }
              console.log(
                oldData,
                `:: user: ${oldData.name} deleted from table`
              );
              fetch(`http://localhost:5000/api/users/${oldData._id}`, {
                method: 'DELETE',
                headers,
                body: JSON.stringify({ user: user._id, ...oldData }),
              })
                .then((resp) => resp.json())
                .then((resp) => getUsers());
              resolve();
            }),

          // UPDATE USER
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              console.log(
                newData,
                `:: updated product: ${newData.name} from table`
              );
              fetch(`http://localhost:5000/api/users/profile/${oldData._id}`, {
                method: 'PUT',
                headers,
                body: JSON.stringify({ user: user._id, ...newData }),
              })
                .then((resp) => resp.json())
                .then((resp) => getUsers());
              resolve();
            }),
        }}
        options={{
          // selection: true,
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
