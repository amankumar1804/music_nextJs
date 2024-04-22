import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"
import { SparklesCore } from "@/components/ui/sparkles";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] width-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 ms:py-10">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
           <div className="p-4 relative z-10 w-full text-center">  
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">Master the art of music
            <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
          </h1>
         
            <p className="mt-4 font-normal text-base md:text-lg text-neutrl-300 max-w-lg mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti velit illo nulla aliquam, molestias ea ex possimus, repellendus, officia tenetur provident quibusdam quasi quis eaque fugit rem beatae eos ipsum?</p>
            <div className="mt-4">
                <Link href={"/courses"}> <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore Courses
      </Button>
                </Link>
             
            </div>
           
            </div> 
           
    </div>
    
  )
}

export default HeroSection