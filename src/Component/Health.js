import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import NoImage from '../images/no-images.jpg'

export const Health = (props) => {

const {title, description, image, url, date, authorName} = props;

  return (
    <Col lg={3}>
              <Card className="health-card shadow" style={{ width: '18rem' }}>
                  <Card.Img variant="top" className='health-img' src={image ? image : NoImage} />
                  <Card.Body>
                    <Card.Title className='health-title'>{title.length > 100 ? title.slice(0, 100) + '...' : title}</Card.Title>
                    <Card.Text>
                    {description ? (description.length > 100 ? description.slice(0, 100) + '...' : description)
                      : 'No description available.'}                   
                    </Card.Text>
                    <div className='health-ref'>
                      <div className='publish-at'><h6>Publish At: </h6><small>{date}</small></div>
                      <div className='publish-at author'><h6>Author: </h6><em><small>{authorName ? authorName : 'Anonymous'}</small></em></div>
                    </div>
                    <a href={url} target="_blank" rel="noopener noreferrer" className='btn btn-primary btn-sm mt-3'>
                      Learn More
                    </a>                  
                </Card.Body>
                </Card>
                </Col>
  );
}