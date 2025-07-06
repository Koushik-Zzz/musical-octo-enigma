const Galery = () => {
  return (
    <div className="w-full h-full py-8">
        <div className="w-full mb-8 flex items-center justify-center">
            <p className="text-[#285A43] font-bold text-4xl">Our Gallery View</p>
        </div>

        <div className="w-full grid grid-cols-3 gap-2 h-[745px]">
          <div className="row-span-2">
            <img className="w-full h-full object-cover" src="https://i.ibb.co/1Yk8Gdgw/image.png" alt="alt" />
          </div>

          <div>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/DfSj7j4w/image.png" alt="img" />
          </div>
          <div>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/mrtK6WQM/image.png" alt="img" />
          </div>

          <div>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/MDvRrmM0/image.png" alt="img" />
          </div>
          <div>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/bRRJCthB/image.png" alt="img" />
          </div>

        </div>
    </div>
  )
}

export default Galery


// const Galery = () => {
//   return (
//     <div className="w-full min-h-screen py-8 px-8">
//         <div className="max-w-7xl mx-auto grid grid-cols-3 grid-rows-3 gap-4 h-[600px]">
//           <div className="row-span-3">
//             <img className="w-full h-full object-cover rounded-lg" src="https://i.ibb.co/1Yk8Gdgw/image.png" alt="alt" />
//           </div>

//           <div className="col-span-1 row-span-1">
//             <img className="w-full h-full object-cover rounded-lg" src="https://i.ibb.co/DfSj7j4w/image.png" alt="img" />
//           </div>
//           <div className="col-span-1 row-span-1">
//             <img className="w-full h-full object-cover rounded-lg" src="https://i.ibb.co/mrtK6WQM/image.png" alt="img" />
//           </div>

//           <div className="col-span-1 row-span-1">
//             <img className="w-full h-full object-cover rounded-lg" src="https://i.ibb.co/MDvRrmM0/image.png" alt="img" />
//           </div>
//           <div className="col-span-1 row-span-1">
//             <img className="w-full h-full object-cover rounded-lg" src="https://i.ibb.co/bRRJCthB/image.png" alt="img" />
//           </div>

//         </div>
//     </div>
//   )
// }

// export default Galery