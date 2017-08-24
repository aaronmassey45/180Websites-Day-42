import React from 'react';
import { Image, Grid, Row, Col } from 'react-bootstrap'

const AstronomyCard = (props) => {
  const {
    title,
    url,
    hdurl,
    explanation,
    date,
    copyright,
    media_type
  } = props.data;

  function renderContent() {
    switch (media_type) {

      case('video'):
        return (
          <iframe allowFullScreen frameBorder="0" height="520" width="720" src={url} title={title}></iframe>
        )

      case('image'):
        return (
          <a href={hdurl} className="astronomy-image-wrapper">
            <Image src={url} alt={title} responsive thumbnail/>
          </a>
        )

      default:
        return null
    }
  }

  return (
    <div className='AstronomyCard'>
      <h2 className="astronomy-title">{title}</h2>
      <Grid>
        <Row className="show-grid">
          <Col sm={6}>{renderContent()}</Col>
          <Col sm={6}>
            <Col sm={12}><h4>Taken on {date}, by {copyright}</h4></Col>
            <br/>
            <Col sm={12}><p>{explanation}</p></Col>
          </Col>


        </Row>
      </Grid>
    </div>
  );
}

export default AstronomyCard;
