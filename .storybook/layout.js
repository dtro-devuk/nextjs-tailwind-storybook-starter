import React from 'react';
import tw from 'twin.macro';

import '../styles/global.css';

const Layout = ({ children }) => {
  return (
    <div
      css={[tw`px-20 py-10 flex flex-col items-center justify-center bg-transparent font-serif`]}
    >
      {children}
    </div>
  );
};

export default Layout;
