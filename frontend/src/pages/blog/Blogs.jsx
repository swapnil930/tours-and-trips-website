import React from 'react'
import Hero from "../../components/common/hero/Hero";
import blogs from "../../jsonData/blogs";


const Blogs = () => {

    return (
        <div>
            <Hero
                title="Travel News & Articles"
                desc="We strive to create not just trips, but stories of connection, adventure, and shared moments that turn into lifelong memories."
                image="/images/hero/blog-hero.jpg"
            />
            <div className="min-h-screen text-black px-5 py-10">
                {/* Page Title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-6xl font-bold text-yellow-500 mb-4">
                        Our Blogs
                    </h1>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Stay updated with our latest travel stories, tips, and adventure guides.
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <div
                            key={blog?.id}
                            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <img
                                src={blog?.image}
                                alt={blog?.title}
                                className="h-48 w-full inset-0 object-cover  transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="p-5">
                                <p className="text-sm text-yellow-500 mb-2">{blog?.date}</p>
                                <h2 className="text-xl font-bold mb-2">{blog?.title}</h2>
                                <p className="text-gray-700 mb-4">{blog?.description}</p>
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-20">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Want More Travel Tips?
                    </h2>
                    <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter and never miss out on our travel updates.
                    </p>
                    <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Blogs
