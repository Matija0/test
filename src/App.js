import logo from './logo.svg';
import './App.css';
import Popular from "./pages/Popular"
import Politics from "./pages/Politics"
import Media from "./pages/Media"
import More from "./pages/More"
import Science from "./pages/Science"
import Sport from "./pages/Sport"
import Tech from "./pages/Tech"
import Work from "./pages/Work"
import Recent from "./pages/Recent"
import profile from "./profile_pic.jpg"
import {BsSearch} from "react-icons/bs"; 
import {AiOutlineBell} from "react-icons/ai"
import Sidebar from './Sidebar';
import {Route, Routes} from "react-router-dom"
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';


 function App() {
    return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes> 
        <Route path="/" element={<Recent/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/politics" element={<Politics/>}/>
        <Route path="/media" element={<Media/>}/>
        <Route path="/tech" element={<Tech/>}/>
        <Route path="/science" element={<Science/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/sport" element={<Sport/>}/>
        <Route path="/more" element={<More/>}/>
      </Routes>
     
      
    </div>
  );
}

function Header(){
    return(
      <header className="header" >
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <h1>TODAY<br></br>
            NEWS
        </h1>
        <div className="header-right" >
          <BsSearch/>
          <AiOutlineBell/>
          <img className="profile-el" src={profile} alt="Profile of the user"/>
        </div>
      </header>
    )
}

function Navbar(){

  return(
    <ul className="list-el">
      <li>
        <Link className="link" to="/">Recent Posts</Link>
      </li>
      <li>
        <Link className="link" to="/popular">Popular</Link>
      </li>
      <li>
        <Link className="link" to="/politics">Politics</Link>
      </li>
      <li>
        <Link className="link" to="/Media">Media</Link>
      </li>
      <li>
        <Link className="link" to="/Tech">Tech</Link>
      </li>
      <li>
        <Link className="link" to="/Science">Science</Link>
      </li>
      <li>
        <Link className="link" to="/work">Work</Link>
      </li>
      <li>
        <Link className="link" to="/Sport">Sport</Link>
      </li>
      <li>
        <Link className="link" to="/more">More</Link>
      </li>
    </ul>

  )
}







export default App;
