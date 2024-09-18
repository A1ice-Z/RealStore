import ActionBox from "../components/Clothe/ActionBox";


const Clothe = (productId: number, image: string, title: string, price: string, description: string) => {
    return (
        <ActionBox productId={productId} image={image} title={title} price={price} description={description} />
    )
}

export default Clothe;