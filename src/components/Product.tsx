import ProductCard from "./ui/ProductCard"

const Image = [
    {
        image: "https://images.pexels.com/photos/9667021/pexels-photo-9667021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        fit: "cover"
    },
    {
        image: "https://assets.architecturaldigest.in/photos/63d90a3966b448b016f06e6a/master/w_1600,c_limit/pexels-dominika-roseclay-4076589.jpg",
        fit: "cover"
    },
    {
        image: "https://images.pexels.com/photos/7214588/pexels-photo-7214588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        fit: "cover"
    },
    {
        image: "https://img.freepik.com/premium-photo/close-up-potted-plant-table-against-white-background_1048944-17946318.jpg",
        fit: "cover"
    },
    {
        image: "https://m.media-amazon.com/images/I/41d+j9KoGGL._UF350,350_QL80_.jpg",
        fit: "cover"  
    },
    {
        image: "https://noveltyhomes.co.in/wp-content/uploads/2023/02/home-1-portfolio-img-12.jpg",
        fit: "cover"
    },
    {
        image: "https://images.pexels.com/photos/8497490/pexels-photo-8497490.jpeg?cs=srgb&dl=pexels-hannaauramenka-8497490.jpg&fm=jpg",
        fit: "cover"
    },
    {
        image: "https://c0.wallpaperflare.com/preview/56/46/456/cactus-flower-pot-houseplant-plant-thumbnail.jpg",
        fit: "cover"
    },
]

const Product = () => {
  return (
    <div className="w-screen min-h-screen px-26 flex flex-col py-10">
        <div className=" flex justify-center mb-10">
            <p className="text-4xl text-[#285A43] font-extrabold">What We Offer To You</p>
        </div>
        <div className="flex w-full flex-wrap justify-center gap-5">
            {
              Image.map((item, index) => <ProductCard key={index} image={item.image} fit={item.fit} /> )
            }
        </div>
    </div>
  )
}

export default Product