import { useState } from 'react';
import { LoadingScreen } from './Components/LoadingScreen';
import { Layout } from './Components/Layout';
import { Home } from './Components/sections/Home';
import { About } from './Components/sections/About';
import { Projects } from './Components/sections/Projects';
import { FeaturedWork } from './Components/sections/FeaturedWork';
import { Contact } from './Components/sections/Contact';
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <> 
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } bg-black text-gray-100`}>
        <Layout>
          <Home />
          <About />
          <Projects />
          <FeaturedWork />
          <Contact />
        </Layout>
      </div>
    </>
  );
}

export default App;