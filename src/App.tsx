import './App.css'
import AboutUs from './components/AboutUs'
import Benefit from './components/Benefit'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Galery from './components/Galery'
import Hero from './components/Hero'
import Product from './components/Product'
import Testimonial from './components/Testimonial'
import Nav from './components/ui/Nav'

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <AboutUs/>
      <Product />
      <Benefit />
      <Galery />
      <Testimonial />
      <CTA />
      <Blog />
      <Footer />
    </>
  )
}

export default App
