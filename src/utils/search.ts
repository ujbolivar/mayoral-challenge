// import { ProductData} from 'types/product_data';

function Search(list, query: string) {
    return list.filter((product) => {
        return product.title.toLowerCase().includes(query.toLowerCase());
    });
}

export default Search;