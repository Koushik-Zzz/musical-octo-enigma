import { CalendarDays, MoveRight } from "lucide-react"
import { Button } from "./button"
interface BlogCardProps {
    title: string;
    description: string;
    date: string;
    image: string;
}

const BlogCard = ({title, description, date, image}: BlogCardProps) => {
  return (
    <div className="w-90 h-[518px]">
        <div className="w-full h-84">
            <img className="w-full rounded h-full object-cover object-center" src={image} alt="" />
        </div>
        <div className="w-full pt-4 flex flex-col gap-4">
            <h3 className="text-[#285A43] text-lg font-bold">{title}</h3>
            <p className="font-light">{description}</p>
            <div className="flex items-center justify-between"> 
                <div className="flex items-center">
                    <CalendarDays className="mr-1" />
                <p>{date}</p>
                </div>
                <Button className="font-bold text-[#285A43]" variant="link">Read More<MoveRight /></Button>
            </div>
        </div>
    </div>
  )
}

export default BlogCard
