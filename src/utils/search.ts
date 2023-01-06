import { Product } from 'types/product_data';

function Search(list: Product[], query: string) {
    return list.filter((product) => {
        return product.title.toLowerCase().includes(query.toLowerCase());
    });
}

export default Search;
