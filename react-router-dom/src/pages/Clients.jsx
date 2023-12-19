import React from 'react';
import styled from 'styled-components';

const ClientContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Clients = ({ clients, cards }) => {
  return (
    <div>
      <h1>Clients</h1>
      {clients.map((client) => (
        <ClientContainer key={client.id}>
          <h2>{client.name}</h2>
          <p>Email: {client.email}</p>
          <p>
            Card Number: {cards.find((card) => card.clientId === client.id)?.cardNumber || 'N/A'}
          </p>
        </ClientContainer>
      ))}
    </div>
  );
};