import { Button } from "./ui/button"

const CTA = () => {
  return (
    <div className="w-full h-96 bg-cover bg-center relative" style={{ backgroundImage: "url('https://i.ibb.co/6721WkQ9/image.png')" }}>
      {/* Dark overlay filter */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="absolute inset-0 z-10 h-full flex justify-center items-center gap-4 px-8">
        <p className="text-white text-lg font-medium max-w-md">
          Enter Your Email Address for Our Mailing Promo or Other Interesting Things
        </p>
        <input
          type="email"
          className="backdrop-blur-xs bg-transparent text-white border-2 border-white placeholder-gray-300 px-4 py-3 rounded min-w-[447px] h-11 focus:outline-none focus:border-white"
          placeholder="Enter your email"
        />
        <Button className="bg-[#285A43] text-white rounded px-11 py-3 hover:bg-[#1e4332]">Submit</Button>
      </div>
    </div>
  )
}

export default CTA
