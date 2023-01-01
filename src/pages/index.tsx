import { NextPage } from 'next';
import SearchBar from '../components/SearchBar/SearchBar';
import Sort from '../components/Sort/Sort';
import ProductList from '../components/ProductList/ProductList';

const HomePage: NextPage = () => {
  const handleSearch = (searchTerm: string) => {
    console.log(searchTerm);
  };

  const handleSort = (sortMethod: 'asc' | 'desc') => {
    sortMethod === 'asc' ?
      console.log('Ascending') :
    sortMethod === 'desc' ?
      console.log('Descending') :
    console.log('Invalid sort method');
  };

  return (
    <div>
      <nav>
        <SearchBar onSearch={handleSearch} />
        <Sort onSort={handleSort} />
      </nav>
      <section>
        <ProductList />
      </section>
    </div>
  );
};

export default HomePage;
