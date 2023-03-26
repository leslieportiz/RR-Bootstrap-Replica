import { Card } from 'react-bootstrap'
import '../css/background-image.css'
export default function Banner() {
    return <Card className="intro-banner">
        <Card.ImgOverlay>
            {/* <Card.Title>Order groceries for delivery or pick up today</Card.Title>
             */}
             <h1>Order groceries for delivery or pick up today</h1>
             <p>Whatever you want from local stores, brought tight to your door</p>
        </Card.ImgOverlay>
        <Card.Img src="../assets/background.webp" className='card-img' />
</Card>
}

