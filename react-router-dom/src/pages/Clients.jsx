import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const ClientContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Clients = ({ clients, onAddClient, onDeleteClient }) => {
  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
  });

  const handleAddClient = () => {
    onAddClient(newClient);

    setNewClient({
      name: '',
      email: '',
    });
  };

  return (
    <Container>
      <h1>Clients</h1>
      <div>
        <h2>Add a New Client</h2>
        <Input
          type="text"
          placeholder="Name"
          value={newClient.name}
          onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Email"
          value={newClient.email}
          onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
        />
        <Button onClick={handleAddClient}>Add Client</Button>
      </div>

      {clients.map((client) => (
        <ClientContainer key={client.id}>
          <p>Name: {client.name}</p>
          <p>Email: {client.email}</p>
        </ClientContainer>
      ))}
    </Container>
  );
};