import Cursor from './components/Cursor'

// Styling
import GlobalStyle from './globalStyles'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './components/Themes'

// Routing

import { Route, Routes, useLocation } from 'react-router';

// Components

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
      <Cursor />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
