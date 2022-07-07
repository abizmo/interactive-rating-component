import React, { useContext } from 'react';
import { RatingContext } from '../../App';

import Container from '../common/Container';
import { Text, Title } from '../common/Typo';
import IllustrationThankYou from './illustration-thank-you';

function ThankYou() {
  const { rate } = useContext(RatingContext);

  return (
    <Container>
      <div className="flex justify-center">
        <IllustrationThankYou />
      </div>
      <p
        className={
          'bg-opacity-20 text-opacity-70 bg-rating-500 text-accent  rounded-full text-sm sm:text-base mx-auto px-3 py-1 w-max'
        }
      >
        You selected {rate} out of 5
      </p>
      <Title center>Thank you!</Title>
      <Text center>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </Text>
    </Container>
  );
}

export default ThankYou;
