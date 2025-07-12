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
    (item.name && item.name.toLowerCase().includes(filterText.toLowerCase())) ||
    (item.email && item.email.toLowerCase().includes(filterText.toLowerCase())),
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
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
        }}
      >
        <h1 style={{ fontSize: '2rem', color: '#4f46e5', marginBottom: '1rem' }}>
          Loading users...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
        }}
      >
        <h1 style={{ fontSize: '2rem', color: '#ef4444', marginBottom: '1rem' }}>
          Error
        </h1>
        <div style={{ color: '#ef4444', fontSize: '1.2rem' }}>{error}</div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#bfd3b7',
        padding: '40px 0',
      }}
    >

      <input
        type="text"
        placeholder="Search users..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{
          marginBottom: '20px',
          padding: '10px',
          width: '320px',
          borderRadius: '6px',
          border: '1px solid #abdf95',
          fontSize: '1rem',
        }}
      />

      <div style={{ width: '95%', background: '#97a791', borderRadius: '12px', boxShadow: '0 2px 12px rgba(79,70,229,0.08)', padding: '24px' }}>
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
    </div>
  );
}

export default UsersListPage;