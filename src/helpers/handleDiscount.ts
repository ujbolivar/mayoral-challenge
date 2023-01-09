// import { Product } from '@/types/all_typedefs';

const isActive = (id) => (id % 2 === 0 ? true : false);

const applyDiscount = (price, value) => (price - price * (value / 100)).toFixed(2);

export const handleDiscount = (id, price, discount, setFlag, setTotal) => {
    if (isActive(id)) {
        setFlag(true);
        setTotal(applyDiscount(price, discount));
    } else {
        setFlag(false);
        setTotal(price);
    }
};
