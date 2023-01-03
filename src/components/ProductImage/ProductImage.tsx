import Image from "next/image";

const ProductImage = ({ src, alt }) => {
    return (
        <Image src={src} unoptimized={true} layout="fill" alt={alt}/>
    )
};

export default ProductImage;