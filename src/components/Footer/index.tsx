import React from 'react';

interface footerProps {
  name: string;
  web?: string;
}

function Footer({ name, web = '#' }: footerProps) {
  return (
    <footer className="text-center text-xs text-rating-100">
      Challenge by{' '}
      <a
        className="text-accent"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a className="text-accent" href={web}>
        {name}
      </a>
      .
    </footer>
  );
}

export default Footer;
