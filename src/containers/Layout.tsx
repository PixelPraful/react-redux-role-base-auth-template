import React from 'react';

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {

  return (
    <div>{children}</div>
  );
};

export default Layout;
