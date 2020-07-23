import React from 'react';
import Button from '@material-ui/core/Button';
import Navigation from './Components/navigation/Navigation'
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container maxWidth="md">
        <h1>Testw</h1>
      </Container>
    </div>
  );
}

export default App;
