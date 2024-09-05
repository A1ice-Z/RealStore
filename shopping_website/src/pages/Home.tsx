import Navbar from "../components/Navbar/Navbar"
import {useQuery} from '@tanstack/react-query'

const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch('https://fakestoreapi.com/products').then((res) =>
        res.json(),
      ),
    })

const Home = () => {
    return (
        <>
            <Navbar />
            <div>
            {isPending && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {data && data.map((item: any) => (
                    <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
                    <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                    <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{item.title}</h2>
                    <p><strong>Price:</strong> {item.price}</p>
                    <p><strong>Category:</strong> {item.category}</p>
                    <p>{item.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}

export default Home;
