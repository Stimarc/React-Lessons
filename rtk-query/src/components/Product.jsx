export const Product = ({product,onDelete}) => {
    const handleDelete =() => {
        onDelete(product.id);
    }
    return (
        <div>
              <div className="product" onMouseEnter={handleDelete}>{ product.name }</div> 
        </div>
    );
};
