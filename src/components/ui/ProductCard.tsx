import { Button } from "./button"
import { Card } from "./card"


const ProductCard = ({image, fit}: {image: string, fit: string}) => {
  return (
    <Card className="w-72 bg-white p-0 relative overflow-hidden border-none shadow-sm">
        <div className="bg-gray-400 rounded-full w-8 h-8 absolute top-4 right-4 z-10 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white hover:text-red-400">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
        </div>
        <div className="h-72 overflow-hidden bg-gray-100">
            <img className={`w-full h-full overflow-hidden object-${fit} object-center`} src={image} alt="image" />
        </div>
        <div className="px-4 pb-4 flex items-center justify-between">
            <div>
                <p className="text-[#337A5B] text-base font-semibold">Cactus Plant</p>
                <div className="flex items-center gap-2">
                    <span className="text-xs line-through text-[#121212]">($10)</span>
                    <span className="text-sm font-bold text-[#337A5B]">$8</span>
                </div>
            </div>
            <Button className="bg-transparent border-2 border-[#337A5B] text-[#337A5B] hover:bg-[#337A5B] hover:text-white px-4 py-2 rounded">
                Buy Now
            </Button>
        </div>
    </Card>
  )
}

export default ProductCard