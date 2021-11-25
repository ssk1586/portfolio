import React from 'react'

import PostListItem from '../PostListItem/PostListItem';
import './post-list.css'


const PostList = ({ data, onDelete, onToggleImportant, onToogleLiked }) => {
    const elements = data.map(({ id, ...itemProps }) => {
        return (
            <li className='list-group-item' key={id}>
                <PostListItem {...itemProps}
                    // label={label}
                    // important={important}
                    onDelete={() => { onDelete(id) }}
                    onToggleImportant={() => { onToggleImportant(id) }}
                    onToogleLiked={()=>{onToogleLiked(id)}}
                />
            </li>
        );
    });
    
    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    );
};
export default PostList;
