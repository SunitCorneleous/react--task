import React, { useEffect, useState } from 'react';

const Problem1 = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState('all');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const sortByStatus = (a, b) => {
    const statusOrder = { active: 1, completed: 2 };
    const statusA = statusOrder[a.status];
    const statusB = statusOrder[b.status];

    if (statusA === statusB) {
      return 0;
    }

    return statusA < statusB ? -1 : 1;
  };

  useEffect(() => {
    if (show === 'completed') {
      const newUsers = users?.filter(user => user.status === 'completed');

      setFilteredUsers(newUsers);
    } else if (show === 'active') {
      const newUsers = users?.filter(user => user.status === 'active');

      setFilteredUsers(newUsers);
    } else if (show === 'all') {
      let activeAndCompleted = users.filter(
        user => user.status === 'active' || user.status === 'completed'
      );

      activeAndCompleted = activeAndCompleted.sort(sortByStatus);

      const restUsers = users?.filter(
        user => user?.status !== 'active' && user?.status !== 'completed'
      );

      setFilteredUsers([...activeAndCompleted, ...restUsers]);
    }
  }, [show, users]);

  const handleClick = val => {
    setShow(val);
  };

  const handleAdd = e => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const status = form.status.value.toLowerCase();

    setUsers([...users, { name, status }]);

    form.reset();
  };

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
        <div className='col-6 '>
          <form
            className='row gy-2 gx-3 align-items-center mb-4'
            onSubmit={handleAdd}
          >
            <div className='col-auto'>
              <input
                type='text'
                className='form-control'
                placeholder='Name'
                name='name'
                required
              />
            </div>
            <div className='col-auto'>
              <input
                type='text'
                className='form-control'
                placeholder='Status'
                name='status'
                required
              />
            </div>
            <div className='col-auto'>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className='col-8'>
          <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
            <li className='nav-item'>
              <button
                className={`nav-link ${show === 'all' && 'active'}`}
                type='button'
                onClick={() => handleClick('all')}
              >
                All
              </button>
            </li>
            <li className='nav-item'>
              <button
                className={`nav-link ${show === 'active' && 'active'}`}
                type='button'
                onClick={() => handleClick('active')}
              >
                Active
              </button>
            </li>
            <li className='nav-item'>
              <button
                className={`nav-link ${show === 'completed' && 'active'}`}
                type='button'
                onClick={() => handleClick('completed')}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className='tab-content'></div>
          <table className='table table-striped '>
            <thead>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers?.map((user, i) => (
                <tr key={i}>
                  <td>{user.name}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
