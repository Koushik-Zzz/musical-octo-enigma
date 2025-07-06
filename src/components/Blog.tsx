import BlogCard from "./ui/BlogCard"

const BlogCardProps = [
  {
        title: "More productive with an atmosphere of greenery",
        description: "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
        date: "January 20, 2023",
        image: "https://i.ibb.co/tTzNmJTC/image.png"
    },
    {
        title: "The benefits of plants in your room",
        description: "Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being....",
        date: "January 10, 2023",
        image: "https://i.ibb.co/LhQ7YhnZ/image.png"
    },
    {
        title: "How to create a sustainable garden at home",
        description: "Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they....",
        date: "January 15, 2023",
        image: "https://i.ibb.co/HpnmJT87/image.png"
    }
]

const Blog = () => {
  return (
    <div className="w-full p-16">
        <div className="flex flex-col items-center justify-center gap-6">
            <p className="text-[#285A43] text-4xl font-bold">Interesting blog to read</p>
            <div className="flex justify-around h-full w-full">
              {BlogCardProps.map((blog, index) => <BlogCard key={index} {...blog} />)}
            </div>

        </div>
        
    </div>
  )
}

export default Blog