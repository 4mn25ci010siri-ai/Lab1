import logo from './logo.svg';
import './App.css';
//import Course from './Components/Course';
// import Student from './Components/Student';
import Home from './Components/Home';



function App() {
  return (
    // <div className="container">
    //   <h2 className="text-primary">React Default App</h2>
    //   {/* <Course/> */}
    //   <Student/>
    // </div>

    <>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="login" elemen={<LoginPage/>}>
      <Route path="/dashborad" classname="btn btn-primary">Dashborad</Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
