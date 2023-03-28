import { Container, Row, Col, Image} from 'react-bootstrap'
import {Fragment} from "react"
import '../css/storelist.css'
export default function StoreListing(props) {
    return <div>
    <h2 className="location-header">Choose your store in <span>Las Vegas</span></h2>
    <Container>
        <Row>
            {
                props.stores.map((store, i, arr) => {
                    return <Fragment key={i}>
                        <div className="store-link">
                            <Col xs='.5'>
                                <Image src={store.imgUrl} roundedCircle className="store-image"/>
                            </Col>
                            <Col className="store-info">
                                <h5>{store.storeName}</h5>
                                <p>Delivery + Pickup</p>
                            </Col>
                        </div>
                        {i < arr.length-1 && <Col sm='1'></Col>}
                    </Fragment>
                })
            }
        </Row>
    </Container>
</div>
}