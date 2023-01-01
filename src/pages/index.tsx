import { NextPage } from 'next';
import SearchBar from '../components/SearchBar/SearchBar';
import Sort from '../components/Sort/Sort';

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
