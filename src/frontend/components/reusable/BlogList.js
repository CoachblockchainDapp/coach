// Tu componente principal

import React from 'react';
import BlogCard from './BlogCard'; // Asegúrate de ajustar la ruta según la ubicación de tu componente BlogCard

const BlogList = ({ blogPosts }) => (
    <div className="row">
        {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
        ))}
        
    </div>
);

export default BlogList;
