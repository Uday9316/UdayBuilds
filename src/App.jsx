import { Navbar, Welcome, Dock, Home } from '#components'
import { Draggable } from 'gsap/Draggable'
import gsap from 'gsap';
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos } from '#windows';

gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Welcome />
     
    </main>
  )
}

export default App