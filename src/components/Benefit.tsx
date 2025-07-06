import BenefitCard from "./ui/BenefitCard"

const BenefitCardProps = [
    {
        image: "https://i.ibb.co/N6V86YG8/image.png",
        title: "Quality Product",
        description: "Our flowers are of the highest quality, carefully selected and sourced from reputable",
        bgColor: "#FFFFFF"
    },
    {
        image: "https://i.ibb.co/hFBqT362/image.png",
        title: "Work Smart",
        description: "We work smart, using innovative techniques and technology to streamline our processes",
        bgColor: "#F0F7F4"
    },
    {
        image: "https://i.ibb.co/N658FGyV/image.png",
        title: "Always Fresh",
        description: "Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.",
        bgColor: "#F0F7F4"
    },
    {
        image: "https://i.ibb.co/fGXwMjZd/image.png",
        title: "Excelent Service",
        description: "We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs",
        bgColor: "#FFFFFF"
    },
]

const Benefit = () => {
  return (
    <div className="w-screen h-screen flex">
        <div className="w-1/2" >
            <img className="object-cover w-full h-full" src="https://i.ibb.co/TMFN46YP/image.png" alt="" />
        </div>
        <div className="w-1/2 grid grid-cols-2 grid-rows-2">
        {BenefitCardProps.map((card, index) => (
            <BenefitCard key={index} {...card} />
        ))}
        </div>
    </div>
  )
}

export default Benefit