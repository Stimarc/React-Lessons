import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { Clients, Cards,} from './pages';

const App = () => {
  const cards = [
    { id: 1, clientId: 1, cardNumber: '7434-7878-9012-3056' },
    { id: 2, clientId: 2, cardNumber: '7376-5432-1008-7054' },
    { id: 3, clientId: 3, cardNumber: '7486-5932-1508-9054' },
    { id: 4, clientId: 4, cardNumber: '7036-5032-1908-1254' },
  ];

  const clients = [
    { id: 1, name: 'John Doe', email: 'john.doe@gmail.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@gmail.com' },
    { id: 3, name: 'Frank Sinara', email: 'frank.sinara@gmail.com' },
    { id: 4, name: 'Michale Lidug', email: 'michale.lidug@gmail.com' },

  ];

  return (
    <div className="container full-height">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Cards cards={cards} />} />
          <Route path="/clients" element={<Clients clients={clients} cards={cards} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;