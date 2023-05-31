import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { slugify } from '../utils';

const BlogCard = ({title, image, description, id, category_label}) => {
    const slugify_title = slugify(title)
    return (
      <>
        <Card style={{ width: '20rem', maxHeight: "27rem", minHeight: "25rem" }}>
            <Card.Img variant="top" src={image} style={{width:"100%", maxHeight:"10rem"}} />
            <Card.Body>
                <Card.Title>{title.slice(0, 30) + (title.length > 30 ? "..." : "")}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{category_label}</Card.Subtitle>
                <Card.Text>{description.slice(0, 210) + (description.length > 210 ? "..." : "")}</Card.Text>
            </Card.Body>
            <Card.Footer>
                  <div className='d-flex justify-content-right'>
                    <NavLink to={`/blog/${id}`}>
                        <Button variant="primary">Read More</Button>
                    </NavLink>
                  </div>
            </Card.Footer>
        </Card>
        <br /> 
        <br /> 
      </>
    )
}

export default BlogCard