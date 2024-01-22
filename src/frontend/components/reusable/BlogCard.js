// BlogCard.js

import React from 'react';
import Link from "next/link"; // Asegúrate de importar la librería de enlaces que estás utilizando

const BlogCard = ({ post }) => (
    <div className="fl-blog fl-item2 col-lg-4 col-md-6">
        <article className="tf-card-article">
            <div className="card-media">
                <Link href={post.link || "#"}> {/* También puedes usar "/404" u otra URL por defecto */}
                    <img src={post.image} alt={post.title} />
                </Link>

            </div>
            <div className="meta-info flex">
                <div className="item art active">{post.category}</div>
                <div className="item date">{post.date}</div>
            </div>
            <div className="card-title">
                <h5><Link href={post.detailsLink}><span style={{ color: 'white' }}>{post.title}</span></Link></h5>
            </div>
            <div className="card-bottom flex items-center justify-between">
                <div className="author flex items-center justify-between">
                    <div className="avatar">
                        <img src={post.authorAvatar} alt={post.authorName} />
                    </div>
                    <div className="info">
                        <span style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Arial, sans-serif' }} >Creado Por:</span>
                        <h6><Link href={post.authorLink}> <span style={{ color: 'white' }}>{post.authorName}</span></Link></h6>
                    </div>
                </div>
                <Link className="link" href={post.arrowLink}><i className="icon-arrow-up-right2" style={{ color: 'white' }} /></Link>
            </div>
        </article>
    </div>
);

export default BlogCard;
