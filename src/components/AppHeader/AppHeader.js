import React from 'react'
import './app-header.css'

function AppHeader({allPosts, likesCount}) {
    return (
        <div className="app-header d-flex">
            <h1>Sasha Kurta</h1>
            <h2>{allPosts} posts, {likesCount} likes</h2>
        </div>
    )
}

export default AppHeader;
