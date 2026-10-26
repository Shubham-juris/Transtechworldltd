import React from 'react';

export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: '30px',
        boxSizing: 'border-box',
        fontFamily: 'Arial, Helvetica, sans-serif',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: 'clamp(80px, 12vw, 110px)',
          lineHeight: 1,
          fontWeight: 700,
          color: '#222222',
        }}
      >
        404
      </h1>

      <h2
        style={{
          margin: '25px 0 10px',
          fontSize: 'clamp(23px, 4vw, 28px)',
          fontWeight: 600,
          color: '#222222',
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          margin: 0,
          fontSize: '16px',
          lineHeight: 1.6,
          color: '#666666',
          maxWidth: '500px',
        }}
      >
        The requested page could not be found.
      </p>
    </div>
  );
}
