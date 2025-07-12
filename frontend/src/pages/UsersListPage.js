import React, { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';

function UsersListPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const baseUrl = process.env.REACT_APP_API_BASE_URL || '';
        const response = await fetch(`${baseUrl}/api/users`);

        if (!response.ok) throw new Error('Failed to fetch users');

        const data = await response.json();

        setUsers(data);
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
    table: {
      style: {
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        background: '#f7f7f7',
        margin: '40px auto',
        width: '90%',
        overflow: 'hidden',
      },
    },
    headRow: {
      style: {
        backgroundColor: '#bfc7d1',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#6b7280',
        borderBottom: 'none',
      },
    },
    headCells: {
      style: {
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#6b7280',
        borderBottom: 'none',
      },
    },
    rows: {
      style: {
        fontSize: '16px',
        backgroundColor: '#fff',
        borderBottom: 'none',
        minHeight: '56px',
        transition: 'background 0.2s',
      },
      stripedStyle: {
        backgroundColor: '#f3f4f6',
      },
    },
    cells: {
      style: {
        fontSize: '16px',
        color: '#222',
        borderBottom: 'none',
        padding: '18px 12px',
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        background: '#f7f7f7',
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

      <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', padding: '0' }}>
        <DataTable
          columns={columns}
          data={filteredItems}
          pagination
          highlightOnHover
          pointerOnHover
          customStyles={customStyles}
          noDataComponent="No users found."
          progressPending={loading}
          striped
        />
      </div>
    </div>
  );
}

export default UsersListPage;