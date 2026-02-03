import React, { useState, useEffect } from 'react';

export default function Modalbutton() {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        style={{
          backgroundColor: '#005BB5',
          color: '#fff',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '20px',
          lineHeight: '1.2',
          width: isMobile ? '100%' : 'auto', 
          boxSizing: 'border-box',
        }}
      >
        Subscription
      </button>

      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: isMobile ? '1rem' : '0', 
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: isMobile ? '100%' : '500px',
              width: isMobile ? '100%' : 'auto',
              color: '#000',
              boxSizing: 'border-box',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            <h3>For Subscribers Only</h3>
            <p>
              This link points to the private <code>Github Action</code> repository, which is accessible only to subscribers. Non-subscribers will receive a 404 error.
            </p>
            <div
              style={{
                marginTop: '1.5rem',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '1rem',
                flexDirection: isMobile ? 'column' : 'row',
              }}
            >
              <button
                onClick={() => setShowModal(false)}
                style={{
                  backgroundColor: '#005BB5',
                  color: '#fff',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  lineHeight: '1.2',
                  width: isMobile ? '100%' : 'auto',
                  boxSizing: 'border-box',
                }}
              >
                Cancel
              </button>
              <a
                href="https://github.com/anantacloud/actions/tree/main/iac/terragrunt"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: isMobile ? '100%' : 'auto' }}
              >
                <button
                  style={{
                    backgroundColor: '#005BB5',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    lineHeight: '1.2',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  Continue to GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
