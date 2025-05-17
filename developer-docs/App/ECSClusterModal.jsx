import React, { useState } from 'react';

export default function ECSClusterModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        style={{
          backgroundColor: '#0033A0',
          color: '#fff',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '20px',
          lineHeight: '1.2',
        }}
      >
        View Source
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
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '500px',
              color: '#000',
            }}
          >
            <h3>For Subscribers Only</h3>
            <p>
              This link leads to the private <code>terraform-aws-service-catalog</code> repository visible only to
              subscribers; everyone else will see a 404.
            </p>
            <div
              style={{
                marginTop: '1.5rem',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '1rem',
              }}
            >
              <button
                onClick={() => setShowModal(false)}
                style={{
                  backgroundColor: '#0033A0',
                  color: '#fff',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  lineHeight: '1.2',
                }}
              >
                Cancel
              </button>
              <a
                href="https://github.com/anantacloud/github-actions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  style={{
                    backgroundColor: '#0033A0',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    lineHeight: '1.2',
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

