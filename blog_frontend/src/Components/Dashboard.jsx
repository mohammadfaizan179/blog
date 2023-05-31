import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import UserBlogs from './UserBlogs';
import UserProfile from './UserProfile';
import BlogWrite from './BlogWrite';

const Dashboard = () => {
    const [writeBlog, setWriteBlog] = useState(false)

    return (
        <>
            <div className='container my-5'>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#profile">
                    <Row>
                        <Col sm={3}>
                            <ListGroup className='text-center'>
                                <ListGroup.Item action href="#profile">
                                    Profile
                                </ListGroup.Item>
                                <ListGroup.Item action href="#blogs" onClick={()=> setWriteBlog(false)}>
                                    Blogs
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='px-5'>
                                <Tab.Pane eventKey="#profile">
                                    <UserProfile />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#blogs">
                                    {
                                        writeBlog ? <BlogWrite setWriteBlog={setWriteBlog} /> : <UserBlogs setWriteBlog={setWriteBlog}/>
                                    }
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    )
}

export default Dashboard