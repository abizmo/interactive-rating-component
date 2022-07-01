import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="container place-self-center flex flex-col
        gap-4 mx-auto px-6 py-8 bg-rating-800 text-rating-100
        rounded-2xl"
    >
      {children}
    </div>
  );
}

export default Container;
