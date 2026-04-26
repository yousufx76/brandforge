import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import Work from './components/Work'
import Process from './components/Process'
import Testimonial from './components/Testimonial'
import CTA from './components/CTA'
import Footer from './components/Footer'


function App() {
  return (
    <div className="bg-white min-h-screen text-bg">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Work />
      <Process />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  )
}

export default App