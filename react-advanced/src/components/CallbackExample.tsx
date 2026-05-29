import { memo, useCallback, useState } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
};

const products: Product[] = [
    { id: 1, name: "Mechanical Keyboard", price: 89 },
    { id: 2, name: "Wireless Mouse", price: 49 },
    { id: 3, name: "USB-C Hub", price: 39 },
];

type ProductRowProps = {
    product: Product;
    inCart: boolean;
    addToCart: (productId: number) => void;
};

const ProductRow = memo(({ product, inCart, addToCart }: ProductRowProps) => {
    return (
        <li>
            <strong>{product.name}</strong> - ${product.price}
            <button
                type="button"
                onClick={() => addToCart(product.id)}
                disabled={inCart}
                style={{ marginLeft: 12 }}
            >
                {inCart ? "Added" : "Add to cart"}
            </button>
            {new Date().toLocaleTimeString()}
        </li>
    );
});

function CallBackExample() {
    const [notes, setNotes] = useState("");
    const [cartIds, setCartIds] = useState<number[]>([]);

    // Stable function reference prevents memoized children from re-rendering.
    const addToCart = useCallback((productId: number) => {
        setCartIds((prev) => (prev.includes(productId) ? prev : [...prev, productId]));
    }, []);

    return (
        <section>
            <h1>useCallback Applied Example</h1>
            <p>
                Type in the notes field. Product rows are memoized and won't re-render
                while this parent state changes because <code>addToCart</code> keeps the same
                reference.
            </p>

            <label htmlFor="notes">Notes</label>
            <input
                id="notes"
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Try typing here"
            />

            <ul>
                {products.map((product) => (
                    <ProductRow
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        inCart={cartIds.includes(product.id)}
                    />
                ))}
            </ul>

            <p>
                Cart items: {cartIds.length}
            </p>
        </section>
    );
}

export default CallBackExample;