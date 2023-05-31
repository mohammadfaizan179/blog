import React from 'react'

const TopBlogsPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
    <div
        className={className}
        style={{ 
            ...style,
            display: "flex",
            background: 'black',
            opacity: 0.8,
            width:"50px",
            height:"50px",
            textAlign:"center",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:100,
        }}
        onClick={onClick}
    />
    );
}

export default TopBlogsPrevArrow