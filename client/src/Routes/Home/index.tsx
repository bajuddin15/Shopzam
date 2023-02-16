import Product from "../../Components/Product";
import Products from "../../Components/Products";

interface IProps {}

const Home: React.FC<IProps> = ({}) => {
  return (
    <div style={{ margin: "50px" }}>
      <Products title="Featured Products" />
    </div>
  );
};

export default Home;
