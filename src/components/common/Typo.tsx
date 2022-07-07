import React from 'react';

type TypoProps = {
  children: string;
  center?: boolean;
};

export function Title({ children, center }: TypoProps) {
  return (
    <h1 className={`text-xl sm:text-2xl font-bold ${center && 'text-center'}`}>
      {children}
    </h1>
  );
}

export function Text({ children, center }: TypoProps) {
  return (
    <p className={`text-sm sm:text-base opacity-60 ${center && 'text-center'}`}>
      {children}
    </p>
  );
}
