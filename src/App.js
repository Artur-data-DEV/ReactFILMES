import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
import Routes from './Routes';


function App() {
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <Container>
          <Routes/>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
