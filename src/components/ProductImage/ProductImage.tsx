import Image from "next/image";

const myLoader = ({ src }) => {
    return `${src}`;
    };

const ProductImage = ({ src, alt }) => {
    return (
        <Image loader={myLoader} src={src} layout="fill" alt={alt}/>
    )
};

export default ProductImage;