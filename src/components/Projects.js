import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import atomist from '../images/atomist.png'
import clone1 from '../images/clone1.png'
import drone from '../images/drone.png'
import slider from '../images/slider.png'

const Example = (props) => {
  return (
    <div className="containCards">
      <Card className="cardCon">
        <CardImg className="imagesCard" top width="100%" src={clone1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Initab Clone</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
          <Button>GitHub</Button>
        </CardBody>
      </Card>
      <Card className="cardCon">
        <CardImg className="imagesCard" top width="100%" src={atomist} alt="Card image cap" />
        <CardBody>
          <CardTitle>Atomist</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
          <Button>GitHub</Button>
        </CardBody>
      </Card>
      <Card className="cardCon">
        <CardImg className="imagesCard" top width="100%" src={drone} alt="Card image cap" />
        <CardBody>
          <CardTitle>Drone Landing</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
          <Button>GitHub</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;