import NavBarComponent from './MyComponents/NavBarComponent';
import './App.css';
import CarouselComponent from './MyComponents/CarouselComponent';
import CardGroupComponent from './MyComponents/CardGroupComponent';
import Introduction from './MyComponents/Introduction';
import FormLayoutComponent from './MyComponents/FormLayoutComponent';

function App() {
  return (
    <>
    <div style={{backgroundImage: "url(https://wallpapercave.com/wp/wp3416333.jpg)"}}>
    <NavBarComponent/>
    <Introduction/>
    <CarouselComponent/>
    <CardGroupComponent/>
    <FormLayoutComponent/>
    </div>
    </>
  );
}

export default App;
