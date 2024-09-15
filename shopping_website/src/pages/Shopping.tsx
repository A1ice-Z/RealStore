import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styling from '../styles/Shopping.module.css';
import Scrolling from '../components/Scrolling/Scrolling';

const Shopping = () => {
  return (
    <>
      <Navbar />
      <main className={styling.shoppingpage}></main>
      <Scrolling favorite={true} cart={true} />
      <Footer />
    </>
  );
};

export default Shopping;
