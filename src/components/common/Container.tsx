import React from 'react';

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="container flex flex-col
        gap-6 mx-auto px-8 py-10 bg-rating-800 text-rating-100
        rounded-2xl max-w-sm"
    >
      {children}
    </div>
  );
}

export default Container;
