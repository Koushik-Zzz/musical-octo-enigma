import { Button } from "./ui/button"

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center relative w-screen h-screen bg-cover bg-center bg-no-repeat gap-y-10" style={{backgroundImage: 'url("https://i.ibb.co/ycVjd0SB/image.png")'}}>
        <h1 className="text-white text-5xl font-bold">Nature's Beauty Delivered to You</h1>
        <div>
            <p className="text-white max-w-2xl text-center">Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers that will bring a touch of nature to your home!</p>
        </div>
        <div className="w-screen gap-x-4 flex items-center justify-center">
          <Button className="px-12 py-3 text-white rounded-[3px] bg-[#285A43]">Book Now</Button>
          <Button variant={"outline"} className="px-9 py-2 text-white bg-transparent rounded-[3px] hover:text-green-800 hover:bg-transparent">
            <svg  width="20" height="20" viewBox="0 0 20 20" className="fill-white transition-colors duration-200" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 7.325V12.675C7.5 13.075 7.675 13.3667 8.025 13.55C8.375 13.7333 8.71667 13.7167 9.05 13.5L13.2 10.85C13.5167 10.6667 13.675 10.3833 13.675 10C13.675 9.61667 13.5167 9.33333 13.2 9.15L9.05 6.5C8.71667 6.28333 8.375 6.26667 8.025 6.45C7.675 6.63333 7.5 6.925 7.5 7.325ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2167 18 14.1043 17.221 15.663 15.663C17.221 14.1043 18 12.2167 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.1043 2.779 12.2167 2 10 2C7.78333 2 5.896 2.779 4.338 4.337C2.77933 5.89567 2 7.78333 2 10C2 12.2167 2.77933 14.1043 4.338 15.663C5.896 17.221 7.78333 18 10 18Z"/>
            </svg>
            Watch Video
          </Button>
        </div>
    </div>
  )
}

export default Hero