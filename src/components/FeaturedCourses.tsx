'use client'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient';

interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

    return (
        <div className='py-12 bg-gray-900'>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-bold tracking-wide uppercase'>Featured Courses</h2>
                <p className='text-base text-gray-400 font-bold tracking-wide'>Learn with the best</p>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className='flex justify-center'>
                            {/* Display course details */}
                            <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900
                            overflow-hidden h-full max-w-sm' >
                                <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                    <p>{course.title}</p>
                                    <img src={course.image} alt={course.title} className='w-full h-full object-cover mb-4' style={{ maxWidth: '150px', maxHeight: '80px' }} />
                                    <p>{course.description}</p>
                                    <Link href={`/courses/${course.slug}`}>Learn</Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className='text-center mt-20'>
                <Link href='/courses' className='px-4 py-2 border-2 rounded-full border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 hover:border-gray-400 hover:text-gray-800 transition duration-200'>
                    View all courses
                </Link>
            </div>
        </div>
    );
}

export default FeaturedCourses;
