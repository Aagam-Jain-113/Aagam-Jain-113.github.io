import Cursor from './components/Cursor'

// Styling
import GlobalStyle from './globalStyles'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './components/Themes'

// Routing

import { Route, Routes } from 'react-router';

// Components

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';


function App() {
  return (
    <div>
      <GlobalStyle />
      <Cursor />
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
