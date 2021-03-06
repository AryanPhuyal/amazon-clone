// import "./App.css";
import data from "./data";

function App() {
  return (
    <div className='grid-container'>
      <header className='row'>
        <div>
          <a className='brand' href='/'>
            Amazona
          </a>
        </div>
        <div>
          <a href='/cart'>Cart</a>
          <a href='/signin.'> Sign in</a>
        </div>
      </header>
      <main>
        <div className='row center'>
          {data.products.map((product) => (
            <div className='card' key={product._id}>
              <a href={`/product/${product._id}`}>
                <img
                  className='medium'
                  src={`images/${product.image}`}
                  alt='product'
                />
              </a>
              <div className='card-body'>
                <a href={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>
                <div className='rating'>
                  <span>
                    <i className='fa fa-star'></i>
                  </span>
                  <span>
                    <i className='fa fa-star'></i>
                  </span>
                  <span>
                    <i className='fa fa-star'></i>
                  </span>
                  <span>
                    <i className='fa fa-star'></i>
                  </span>
                  <span>
                    <i className='fa fa-star'></i>
                  </span>
                </div>
                <div className='price'>$ {product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className='row center'>All right and reserve</footer>
    </div>
  );
}

export default App;
