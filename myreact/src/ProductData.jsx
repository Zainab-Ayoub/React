import {useState, useEffect} from 'react';
// Create a component that fetches product data from an API when the page loads. 
// How will you handle loading and error states properly?

function ProductData(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async ()=> {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('https://fakestoreapi.cpm/products');

                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setProducts(data);
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if(loading) return <p>Loading products...</p>
    if(error) return <p>Error: {error}</p>

    return (
        <>
            <ul>{products.map((product) => (
                <li key={product.id}>{product.title} - ${product.price}</li>
              ))}
            </ul>
        </>
    );
 }

export default ProductData;