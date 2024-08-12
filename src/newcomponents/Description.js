import React from 'react';
import styled from 'styled-components';
import WorkProgress from '@/sections/WorkProgress';

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* margin: 10vw 0; */
   /* Equivalent to my-40 */
`;

const Text = styled.p`
  text-transform: uppercase;
  text-align: center;
  max-width: 50vw;
  font-size: 7.5vw;
  line-height: 1; /* Equivalent to leading-none */
`;

export default function Description() {
  return (
    <Container>
      <WorkProgress/>
      {/* <Text>The quick brown fox jumps over the lazy dog</Text> */}
    </Container>
  );
}