import React, { useState, useEffect } from 'react';

export default function Modulebutton() {
  const [showModal, setShowModal] = useState(null); // null | 'subscription' | 'release'
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
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => setShowModal('subscription')}
          style={{
            backgroundColor: '#0033A0',
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

        <button
          onClick={() => setShowModal('release')}
          style={{
            backgroundColor: '#0033A0',
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
          Release Notes
        </button>
      </div>

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
            <h3>
              {showModal === 'subscription'
                ? 'For Subscribers Only'
                : 'Release Notes'}
            </h3>
            <p>
              {showModal === 'subscription'
                ? `This link points to the private terraform-aws-ecs-service-catalog repository, which is accessible only to subscribers. Non-subscribers will receive a 404 error.`
                : `Here you can view the latest release notes, updates, and changes related to this module visible only to subscribers; everyone else will see a 404.`}
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
                onClick={() => setShowModal(null)}
                style={{
                  backgroundColor: '#0033A0',
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
                href={
                  showModal === 'subscription'
                    ? 'https://github.com/anantacloud/terraform-aws-kafka-module.git'
                    : 'https://github.com/anantacloud/terraform-aws-kafka-module/releases'
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: isMobile ? '100%' : 'auto' }}
              >
                <button
                  style={{
                    backgroundColor: '#0033A0',
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

