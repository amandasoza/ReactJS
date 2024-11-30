import Logo from "../components/logo";
import Navegacao from "../components/navegacao";
import Principal from "../components/principal";
const Home = () => {
  return (
    <div>
      <header className="topo">
        <Logo />
        <Navegacao />
      </header>
      <Principal />
    </div>
  );
};
export default Home;
