import { useState } from 'react';
import './App.css';
import { NavBar } from './components/users/NavBar';
import Card from './components/users/Card';

function App() {
  const [productDetailP, setProductDetail] = useState({});
  const [listOfProduct, setListOfProduct] = useState([
    {
      title: "Producto 1",
      description: "Descripción del producto 1",
    },
  ]);

  const handleChange = (e) => {
    setProductDetail({
      ...productDetailP,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setListOfProduct([...listOfProduct, productDetailP]);
  };

  return (
    <>
      <NavBar />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Título del producto"
            name="title"
            className="form-input"
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Descripción del producto"
            name="description"
            className="form-input"
          />
          <button type="submit" className="btn btn-info">
            Agregar Producto
          </button>
        </form>
      </div>
      <h1>Lista de compras</h1>
      <div className="products-container">
        {listOfProduct.map((product, index) => {
          return <Card key={index} product={product} />;
        })}
      </div>
    </>
  );
}

export default App;