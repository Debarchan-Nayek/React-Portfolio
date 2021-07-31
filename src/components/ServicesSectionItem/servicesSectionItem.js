import './style.css';
import { Card } from 'react-bootstrap';

const ServicesSectionItem = (props) => {
  return(
    <Card className="service-card" style={{backgroundColor: "#112240"}}> 
      <div className="service-icon">{props.icon}</div>
      <Card.Body>
        <Card.Title className="servicesItem_title">{props.heading}</Card.Title>
        <Card.Text className="servicesItem_para">{props.text}</Card.Text>
      </Card.Body>
    </Card>

   )

 }

export default ServicesSectionItem