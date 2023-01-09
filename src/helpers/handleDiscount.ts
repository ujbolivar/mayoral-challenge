// Checks product and assigns a discount flag

const isActive = (id) => (id % 2 === 0 ? true : false);

// Applies discount to price

const applyDiscount = (price, value) => (price - price * (value / 100)).toFixed(2);

// Handles discount

export const handleDiscount = (id, price, discount, setFlag, setTotal) => {
    if (isActive(id)) {
        setFlag(true);
        setTotal(applyDiscount(price, discount));
    } else {
        setFlag(false);
        setTotal(price);
    }
};
