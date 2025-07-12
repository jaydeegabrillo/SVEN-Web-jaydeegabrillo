import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

function UsersListPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users');
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to load users. Please try again later.');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const columns = useMemo(() => [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
      width: '80px',
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Created At',
      selector: row => new Date(row.created_at).toLocaleDateString(),
      sortable: true,
      hide: 'sm',
    },
  ], []);

  const filteredItems = users.filter(item =>
    item.name && item.name.toLowerCase().includes(filterText.toLowerCase()) ||
    item.email && item.email.toLowerCase().includes(filterText.toLowerCase()),
  );

  const customStyles = {
    headCells: {
      style: {
        fontWeight: 'bold',
        fontSize: '14px',
        backgroundColor: '#e0e0e0',
      },
    },
    cells: {
      style: {
        fontSize: '13px',
      },
    },
    rows: {
        highlightOnHover: {
            backgroundColor: '#f0f0f0',
        },
    },
  };

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Users List</h1>

      <input
        type="text"
        placeholder="Search users..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{ marginBottom: '15px', padding: '8px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
      />

      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        highlightOnHover
        pointerOnHover
        customStyles={customStyles}
        noDataComponent="No users found."
        progressPending={loading}
      />
    </div>
  );
}

export default UsersListPage;