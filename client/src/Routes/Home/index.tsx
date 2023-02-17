import Products from "../../Components/Products";
import { ShopDeal } from "../../Components/Organism/Atoms/NewsLetters";
import Product from "../../Components/Product";
import Products from "../../Components/Products";

interface IProps {}

const Home: React.FC<IProps> = ({}) => {
  return (
    <div>
      <Products title="Tab Products" />
      <ShopDeal />
      <Products title="NEW ARRIVALS" />
      <h2>next section</h2>
    <div style={{ margin: "50px" }}>
      <Products title="Featured Products" />
    </div>
  );
};

export default Home;
