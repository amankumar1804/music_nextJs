// import React from 'react'
'use client'
import Link from "next/link"
import { HoverEffect } from "@/components/ui/card-hover-effect";

function UpcommingWebinar() {
    const projects = [
        {
          title: "Stripe",
          description:
            "A technology company that builds economic infrastructure for the internet.",
          link: "https://stripe.com",
        },
        {
          title: "Netflix",
          description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
          link: "https://netflix.com",
        },
        {
          title: "Google",
          description:
            "A multinational technology company that specializes in Internet-related services and products.",
          link: "https://google.com",
        },
        {
          title: "Meta",
          description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
          link: "https://meta.com",
        },
        {
          title: "Amazon",
          description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
          link: "https://amazon.com",
        },
        {
          title: "Microsoft",
          description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
          link: "https://microsoft.com",
        },
      ];
  return (
    <div className="py-12 bg-gray-900">
        <div className="max-2-7xl mx-auto px-4 sm:px-6"> 
        <div className="text-center">
        <h2 className='text-base text-teal-600 font-bold tracking-wide uppercase'>Upcomming Webinars</h2>
                <p className='text-base text-gray-400 font-bold tracking-wide'>Enhance Your Musical Journey</p>
        </div>
        <div className="mt-10">

        </div>
        <div className="text-center mt-10">
             
                     <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={projects.map(webinar=>(
                        {
                            title:webinar.title,
                            description:webinar.description,
                            link:'/'
                        }
                    ))} />
                     </div>
                     <Link href='/courses' className='px-4 py-2 border-2 rounded-full border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 hover:border-gray-400 hover:text-gray-800 transition duration-200'>view all webinar
                </Link>
        </div>
        </div>
        </div>
  )
}
 
  

export default UpcommingWebinar