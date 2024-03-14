
import { Footer } from './shared/footer';
import { Hero } from './landing/components/hero';
import { Header } from './shared/header';
import { Navbar } from './shared/navbar';

export const Home = () => {
  return (
    
    <div>
        
      <h3 className="text-2xl font-semibold">👓 DynaHunt</h3>
      <p className="text-xl font-medium">Ini adalah staging :D</p>


      {/* <Header /> */}
      <Navbar />
      <Hero />
      <Footer />
 
    </div>



  );
};
