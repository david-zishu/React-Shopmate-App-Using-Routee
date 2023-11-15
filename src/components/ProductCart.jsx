import "./ProductCart.css";
export const ProductCart = ({ product }) => {
  const { id, name, price, image } = product;
  return (
    <div className="productCard">
      <img alt={name} src={image} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};
