import Navbar from "./Components/Navbar/NavBar.jsx"
import './App.css'
import Banner from "./Components/Banner/Banner.jsx"
import RowPost from "./Components/RowPost/RowPost.jsx"
import {originals,action, comedy, horror,document,romance} from './urls.js'


function App() {

  return (
    <>
        <Navbar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals'  />
        <RowPost url={action} title='Action' isSmall/>
        <RowPost url={horror} title='Horror' isSmall/>
        <RowPost url={comedy} title='Comedy' isSmall/>
        <RowPost url={romance} title='Romance' isSmall/>
        <RowPost url={document} title='Documentaries' isSmall/>




    </>
  )
}

export default App
