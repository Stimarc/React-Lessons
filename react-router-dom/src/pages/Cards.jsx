import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Cards = ({ cards }) => {
  return (
    <div>
      <h1>Cards</h1>
      {cards.map((card) => (
        <CardContainer key={card.id}>
          <p>Card Number: {card.cardNumber}</p>
          <p>Client ID: {card.clientId}</p>
        </CardContainer>
      ))}
    </div>
  );
};
