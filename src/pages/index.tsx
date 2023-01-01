import { NextPage } from "next";
import SearchBar from "../components/SearchBar/SearchBar";

const HomePage: NextPage = () => {
  return (
    <div>
      <nav>
        <SearchBar />
      </nav>
      <section>
        <h2>Items</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
