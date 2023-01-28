import React from 'react';

import { Header } from '@app/features/ui/components';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <section>
        <div>{children}</div>
      </section>
    </>
  );
};
