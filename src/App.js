import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";


function App() {
  const product = [
    {
      id: Math.random(),
      name: "Cookart Poêle 26cm - Antiadhésive - Noir",
      pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/3707/1.jpg?8246",
      price: 18,
    },
    {
      id: Math.random(),
      name: "Mix Hub USB Gaming pour android",
      pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/4926/1.jpg?7473",
      price: 55,
    },
    {
      id: Math.random(),
      name: "Sokany Hachoir Électrique Avec Bol En Verre 4 Lames - 800 W - 2L - Noir- Garantie 1 an",
      pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/1865/1.jpg?3074",
      price: 185,
    },
    {
      id: Math.random(),
      name: "TWS Écouteur power Bank Sans fil Stéréo - BT Wireless Bluetooth V5.1 Earphone M18",
      pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/3396/1.jpg?3417",
      price: 41,
    },
  ];
  // alert function
  const handleAlert = (x) => alert(` the price of ${x.name}'s cost ${x.price}`);

  return (
    <div className="App">
      <ProductList list={product} alertFunction={handleAlert} />
      <Footer normal="this is a normal props">this is a children props</Footer>
    </div>
  );
}

export default App;