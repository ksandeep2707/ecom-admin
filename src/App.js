import Topbar from "./components/Topbar";
import SideBar from "./components/SideBar.jsx";
import styled from 'styled-components';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes as Switch,Route} from 'react-router-dom';
import UserList from './pages/UserList';
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from './pages/Login'
import { useSelector } from "react-redux";

const Wrapper=styled.div`
display:flex;


`;

const Container=styled.div`

`;

function App() {
  const admin = useSelector((state) => state.user.currentUser?.isAdmin)||false;
  return (
    <Container>
    
    <Router>
      <Switch>
      <Route path="/login" element={<Login/>}/>
      </Switch>
    </Router>
    <Router>
    <>
     <Topbar/>
      <Wrapper>
         <SideBar/>
       <Switch>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<UserList/>}/>
        <Route path="/user/:userId" element={<User/>}/>
        <Route path="/newUser" element={<NewUser/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/newProduct" element={<NewProduct/>}/>
      </Switch>
      </Wrapper>
      </>
    </Router>
    </Container>
  );
}

export default App;
