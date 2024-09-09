import Navbar from "../components/Navbar/Navbar"
import { useProducts } from "../hooks/useProducts";

const Home = () => {

    const { isLoading, error, data } = useProducts();

    return (
        <>
            <Navbar />
            <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            <div
                style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                }}
            >
                {data &&
                data.map((item) => (
                    <div
                    key={item.id}
                    style={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '8px',
                    }}
                    >
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                    <h2 style={{ fontSize: '18px', margin: '10px 0' }}>
                        {item.title}
                    </h2>
                    <p>
                        <strong>Price:</strong> {item.price}
                    </p>
                    <p>
                        <strong>Category:</strong> {item.category}
                    </p>
                    <p>{item.description}</p>
                    </div>
                ))}
            </div>
            </div>
        </>
    );
}

export default Home;
