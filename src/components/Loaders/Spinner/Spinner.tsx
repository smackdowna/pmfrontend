

const Spinner = () => {
    return (
        <div
              className='size-10'
              style={{
              background: `
                  radial-gradient(farthest-side, #051539 92%, transparent) 50% 0,
                  radial-gradient(farthest-side, #051539 92%, transparent) 50% 100%,
                  radial-gradient(farthest-side, #051539 92%, transparent) 100% 50%,
                  radial-gradient(farthest-side, #051539 92%, transparent) 0 50%
              `,
              backgroundSize: '10px 10px',
              backgroundRepeat: 'no-repeat',
              animation: 'spinner-kh173p 1s infinite'
            }}
              >
              <style>
            {`
          @keyframes spinner-kh173p {
            to {
              transform: rotate(0.5turn);
              }
            }
            `}
              </style>
              </div>
    );
};

export default Spinner;