// /* eslint-disable linebreak-style */
// /* eslint-disable react/no-unescaped-entities */
// /* eslint-disable import/extensions */
// /* eslint-disable react/jsx-filename-extension */

// import React, { Component } from 'react';

// import Button from 'elements/Button';

// import NotFound from 'assets/images/NotFound.png';

// // eslint-disable-next-line react/prefer-stateless-function
// export default class NotFoundPage extends Component {
//   render() {
//     return (
//       <div className="flex flex-col w-full h-screen justify-center bg-gray-800">
//         <div className="flex w-full justify-center">
//           <img src={NotFound} alt="Not Found" className="sm:w-3/4 xl:w-5/12" />
//         </div>
//         <h1 className="text-white text-2xl text-center mt-5">
//           You weren't supposed to find this place...
//         </h1>
//         <div className="flex justify-center">
//           <Button href="/" type="link" className="flex w-30 h-10 px-5 mt-5 bg-gray-600 text-white items-center rounded transform transition duration-500 hover:bg-gray-900">
//             Go Back
//           </Button>
//         </div>
//       </div>
//     );
//   }
// }

/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */


/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */

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
