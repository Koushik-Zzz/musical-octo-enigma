import { Card } from "./card"

interface InfoCardProps {
    image: string;
    title: string;
    description: string;
    bgclr?: string;
    titclr?: string;
    desclr?: string;
    imgsize?: string;
}

const InfoCard = ({image, title, description, bgclr="#FFFFFF", titclr="#285A43", desclr="#121212", imgsize="32"}: InfoCardProps) => {
  return (
    <Card className={`shadow w-88 h-96 p-8`} style={{ backgroundColor: bgclr }}>
        <img className={`pl-3 ${imgsize === "20" ? "w-20" : "w-32"}`} src={image} alt={title} />
        <h3 className="text-lg font-bold" style={{ color: titclr }}>{title}</h3>
        <p style={{ color: desclr }}>{description}</p>
    </Card>
  )
}

export default InfoCard