interface BenefitCardProps {
    image: string;
    title: string;
    description: string;
    bgColor?: string;
}

const BenefitCard = ({image, title, description, bgColor = '#FFFFFF'}: BenefitCardProps) => {
  return (
    <div className={`w-full h-full p-8 flex flex-col gap-4 justify-center`} style={{ backgroundColor: bgColor}}>
        <div className="h-16 w-16">
            <img className="object-contain h-full w-full" src={image} alt="img" />
        </div>
        <div>
            <p className="text-[#285A43] font-bold text-xl">{title}</p>
        </div>
        <div>
            <p className="text-base text-[#121212] leading-relaxed">{description}</p>
        </div>
    </div>
  )
}

export default BenefitCard