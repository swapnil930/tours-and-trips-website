import React from 'react'
import blogs from '../../jsonData/blogs'
import { Link } from 'react-router-dom'

const Blog = () => {


    return (
        <>
            <section className='py-12'>
                <div className="flex flex-col items-start px-5 lg:px-10  mb-10">
                    <span className="h-1 w-28 bg-yellow-500 mb-1 rounded-full"></span>
                    <div className="flex w-full justify-between items-center">
                        <p className="text-[1.75rem] leading-normal md:text-3xl lg:text-4xl xl:text-[2.5rem] xl:leading-tight font-semibold text-black">
                            Blog & Stories
                        </p>
                    </div>
                </div>

                {/* Blog Cards */}
                <div className="w-full mx-auto grid gap-10 lg:grid-cols-3 px-5 lg:px-10">
                    {blogs.slice(0, 3).map((blog) => (
                        <Link to={`/blogs/${blog.id}`}>
                        <div
                            key={blog.id}
                            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="h-48 w-full inset-0 object-cover  transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="p-5">
                                <p className="text-sm text-yellow-500 mb-2">{blog.date}</p>
                                <h2 className="text-xl font-bold mb-2 line-clamp-1">{blog.title}</h2>
                                <p className="text-gray-700 mb-4 line-clamp-2">{blog.description}</p>
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                                    Read More
                                </button>
                            </div>
                        </div>
                            </Link>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Blog
