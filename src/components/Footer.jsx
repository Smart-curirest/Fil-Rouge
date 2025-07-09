import React from 'react';

function Footer() {
  return (
    <>
      <footer style={{
        backgroundColor: 'white',
        color: 'black',
        padding: '40px 20px 0',
        fontFamily: '"Roboto", sans-serif',
        width: '100%'
      }}>
        {/* Contenu principal du footer */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}>
          {/* Section A propos */}
          <div style={{
            flex: 1,
            minWidth: '250px',
            marginBottom: '30px',
            padding: '0 15px'
          }}>
            <h3 style={{
              marginBottom: '20px',
              fontSize: '1.2rem',
              position: 'relative',
              paddingBottom: '10px',
              width: 'fit-content'
            }}>
              A propos de Gestion Logi
              <span style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '50px',
                height: '2px',
                backgroundColor: '#c35656'
              }}></span>
            </h3>
            <p style={{
              color: '#666',
              maxWidth: '300px',
              textAlign: 'left',
              padding: '16px 0'
            }}>
              Gestion Logi est une solution innovante pour la gestion immobilière.
              Notre plateforme simplifie la recherche et la gestion de logements.
            </p>
            <div style={{ marginTop: '15px' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
                Gestion Logi
              </h2>
            </div>
          </div>

          {/* Section Liens rapides */}
          <div style={{
            flex: 1,
            minWidth: '200px',
            marginBottom: '30px',
            padding: '0 15px'
          }}>
            <h3 style={{
              marginBottom: '20px',
              fontSize: '1.2rem',
              position: 'relative',
              paddingBottom: '10px',
              width: 'fit-content'
            }}>
              Liens rapides
              <span style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '50px',
                height: '2px',
                backgroundColor: '#c35656'
              }}></span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button style={{
                margin: '8px 0',
                textDecoration: 'none',
                color: 'black',
                transition: 'color 0.3s',
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: 0,
                cursor: 'pointer'
              }}>Accueil</button>
              <button style={{
                margin: '8px 0',
                textDecoration: 'none',
                color: 'black',
                transition: 'color 0.3s',
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: 0,
                cursor: 'pointer'
              }}>Logements</button>
              <button style={{
                margin: '8px 0',
                textDecoration: 'none',
                color: 'black',
                transition: 'color 0.3s',
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: 0,
                cursor: 'pointer'
              }}>Contact</button>
            </div>
          </div>

          <div style={{
            flex: 1,
            minWidth: '200px',
            marginBottom: '30px',
            padding: '0 15px'
          }}>
            <h3 style={{
              marginBottom: '20px',
              fontSize: '1.2rem',
              position: 'relative',
              paddingBottom: '10px',
              width: 'fit-content'
            }}>
              Suivez-nous
              <span style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '50px',
                height: '2px',
                backgroundColor: '#c35656'
              }}></span>
            </h3>
            <div style={{ 
              display: 'flex', 
              gap: '15px',
              marginTop: '10px'
            }}>
              <span style={{ fontSize: '1.5rem' }}>FB</span>
              <span style={{ fontSize: '1.5rem' }}>TW</span>
              <span style={{ fontSize: '1.5rem' }}>IG</span>
              <span style={{ fontSize: '1.5rem' }}>IN</span>
            </div>
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '30px',
          padding: '20px 0',
          borderTop: '1px solid #ddd',
          fontSize: '0.9rem',
          color: '#666',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <span style={{ fontStyle: 'italic' }}>@Murielle</span>
          <span style={{ fontStyle: 'italic' }}>
            &copy; Tout droits réservés - {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;