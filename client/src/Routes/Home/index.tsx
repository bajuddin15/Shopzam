import Products from "../../Components/Products";
import { ShopDeal } from "../../Components/Organism/Atoms/NewsLetters";

interface IProps {}

const Home: React.FC<IProps> = ({}) => {
  return (
    <div>
      <Products title="Tab Products" />
      <ShopDeal />
      <Products title="NEW ARRIVALS" />
    </div>
  );
};

export default Home;
