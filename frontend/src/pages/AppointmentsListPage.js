import React, { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';

function AppointmentsListPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [frequencyFilter, setFrequencyFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');

  const frequencyOptions = [
    { value: '', label: 'All Frequencies' },
    { value: 'one time', label: 'One Time' },
    { value: 'recurring', label: 'Recurring' },
  ];
  const timeOptions = [
    { value: '', label: 'All Times' },
    { value: 'morning', label: 'Morning' },
    { value: 'afternoon', label: 'Afternoon' },
    { value: 'evening', label: 'Evening' },
  ];

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const baseUrl = process.env.REACT_APP_API_BASE_URL || '';
        const response = await fetch(`${baseUrl}/api/appointments`);

        console.log('Fetching appointments from:', `${baseUrl}/api/appointments`);
        console.log('Response status:', response);
        

        if (!response.ok) throw new Error('Failed to fetch appointments');

        const data = await response.json();
        setAppointments(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching appointments:', err);
        setError('Failed to load appointments. Please try again later.');
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const columns = useMemo(() => [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
      width: '80px',
    },
    {
      name: "Dog's Name",
      selector: row => row.dog_name,
      sortable: true,
    },
    {
      name: 'Frequency',
      selector: row => row.frequency,
      sortable: true,
    },
    {
      name: 'Days',
      selector: row => {
        if (Array.isArray(row.days)) return row.days.join(', ');
        try {
          // If days is a JSON string
          const arr = JSON.parse(row.days);
          if (Array.isArray(arr)) return arr.join(', ');
        } catch {}
        return row.days;
      },
      sortable: false,
    },
    {
      name: 'Time',
      selector: row => row.time,
      sortable: true,
    },
    {
      name: 'Notes',
      selector: row => row.notes,
      sortable: false,
    },
    {
      name: 'Appointment Date',
      selector: row => {
        if (!row.appointment_date) return '';
        const date = new Date(row.appointment_date);
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      },
      sortable: true,
    },
  ], []);

  const filteredItems = appointments.filter(item => {
    const search = filterText.toLowerCase();
    const frequencyMatch = frequencyFilter ? (item.frequency && item.frequency.toLowerCase() === frequencyFilter) : true;
    const timeMatch = timeFilter ? (item.time && item.time.toLowerCase() === timeFilter) : true;
    return (
      ((item.dog_name && item.dog_name.toLowerCase().includes(search)) ||
      (item.frequency && item.frequency.toLowerCase().includes(search)) ||
      (item.days && (Array.isArray(item.days) ? item.days.join(', ').toLowerCase().includes(search) : item.days.toLowerCase().includes(search))) ||
      (item.time && item.time.toLowerCase().includes(search)) ||
      (item.notes && item.notes.toLowerCase().includes(search)))
      && frequencyMatch && timeMatch
    );
  });

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
          Loading appointments...
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

      <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', width: '100%', maxWidth: '900px' }}>
        <input
          type="text"
          placeholder="Search appointment..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          style={{
            padding: '10px',
            flex: 1,
            borderRadius: '6px',
            border: '1px solid #abdf95',
            fontSize: '1rem',
          }}
        />
        <select
          value={frequencyFilter}
          onChange={e => setFrequencyFilter(e.target.value)}
          style={{
            padding: '10px',
            width: '180px',
            borderRadius: '6px',
            border: '1px solid #abdf95',
            fontSize: '1rem',
            background: '#fff',
          }}
        >
          {frequencyOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <select
          value={timeFilter}
          onChange={e => setTimeFilter(e.target.value)}
          style={{
            padding: '10px',
            width: '180px',
            borderRadius: '6px',
            border: '1px solid #abdf95',
            fontSize: '1rem',
            background: '#fff',
          }}
        >
          {timeOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', padding: '0' }}>
        <DataTable
          columns={columns}
          data={filteredItems}
          pagination
          highlightOnHover
          pointerOnHover
          customStyles={customStyles}
          noDataComponent="No appointments found."
          progressPending={loading}
          striped
        />
      </div>
    </div>
  );
}

export default AppointmentsListPage;