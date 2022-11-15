import Image from "next/image"

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="banner" layout="fill" objectFit='cover'/>
      <div className="absolute top-1/2 text-center w-full">
        <p className="text-sm sm:text-lg text-white">Not sure where to go? Perfect</p>
        <button className="bg-white text-purple-600 px-10 py-4 shadow-md rounded-full
         my-3 hover:shadow-xl active:scale-90 transition duration-150">I`m Flexible</button>
      </div>
    </div>
  )
}

export default Banner