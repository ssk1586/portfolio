import React, { Component } from 'react'

import './post-list-item.css'


export default class PostListItem extends Component {

    render() {
        const { label, onDelete, onToggleImportant, onToogleLiked, important, like} = this.props;

        let classNameStyle = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNameStyle += ' important';
        };
        if (like) {
            classNameStyle += ' like';
        };

        return (
            <div className={classNameStyle}>
                <span className="app-list-item-label"
                onClick={onToogleLiked}
                >{label}
                </span>
                
                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        onClick={onToggleImportant}

                        type="button"
                        className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick = {onDelete}
                    >    
                        <i className="fa fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        );
    }
};
