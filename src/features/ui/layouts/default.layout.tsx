import React from 'react';

import { Header } from '@app/features/ui/components';
import { AnswerList } from '@app/features/answers/components';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <section className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <AnswerList />
        </div>
        <div className="row-start-1 lg:col-span-2 lg:row-start-auto">
          {children}
        </div>
      </section>
    </>
  );
};
