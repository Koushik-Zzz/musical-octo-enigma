import InfoCard from "./ui/InfoCard"

const CardInfo = [
    {
        image: "https://i.ibb.co/PvZSQ1Q8/image.png",
        title: "Indoor Plants",
        description: "Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants",
    },
    {
        image: "https://i.ibb.co/LdLP0XMm/image.png",
        title: "Outdoor Plants",
        description: "Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home.",
        bgclr: "#337A5B",
        titclr: "#FFFFFF",
        desclr: "#FFFFFF",
        imgsize: "20",
    },
    {
        image: "https://i.ibb.co/HfbyM8SM/image.png",
        title: "Plants Pots",
        description: "Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor",
    },
]

const AboutUs = () => {
  return (
    <div className='w-screen h-screen flex flex-col px-26 pt-20 pb-24 gap-y-10'>
        <div className='flex-1 flex items-center gap-8'>
            <div className="w-2/3">
            <p className="text-[#285A43] text-4xl font-extrabold mr-8 max-w- leading-tight">We Help Choose The Most Suitable Plants For You</p>
            </div>
            <div className="w-2/3">
                <p className="text-[#121212] text-lg">Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for any occasion, whether you're looking to brighten up your home or send a thoughtful gift. </p>
            </div>
        </div>
        <div className='flex-1 flex gap-15'>
            {CardInfo.map((card) => <InfoCard image={card.image} title={card.title} description={card.description} bgclr={card.bgclr} desclr={card.desclr} titclr={card.titclr} imgsize={card.imgsize}/>)}
        </div>
    </div>
  )
}

export default AboutUs

