import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Container } from './components/Layout';
import { ThemeProvider } from './contexts/theme';

import { HomePage } from './pages/Home';
import { MoviePage } from './pages/Movie';

import { AppBar } from './components/AppBar';
import { Content } from './components/Content';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <AppBar />
          <Content>
            <Container direction="vertical">
              <Switch>
                <Route exact path="/movie/:id" component={MoviePage} />
                <Route exact path="/" component={HomePage} />
                <Route path="/">
                  <h1>404</h1>
                </Route>
              </Switch>
            </Container>
          </Content>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
