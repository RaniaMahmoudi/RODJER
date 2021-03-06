import React from 'react';
import {Container, Col, Row, Carousel, Card, Badge} from "react-bootstrap";

export class UsabilityCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            index: this.props.activeIndex,
            direction: this.props.direction,
        };
    }

    render() {
        return (
            <Carousel interval={null} activeIndex={this.props.activeIndex} direction={this.props.direction}
                      onSelect={this.props.onSelect}>
                <Carousel.Item>
                    <Container>
                        <Col md={{span: 8, offset: 2}}>
                            <Row>
                                <Card className="text-center">
                                    <Card.Header>Étude d'utilisabilté</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Étude centrée-utilisateur</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    - 15 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Permet de vérifier l'adaptation du produit au client et son utilisabilité
                                            réelle. Ce type d'étude permet de faire des retours rapides et pertinents à
                                            chaque itération sur l'adéquation entre la population cible et le produit,
                                            ainsi que supprimer les problèmes ergonomiques important retrouvés dans les
                                            tests utilisateurs avant la commercialisation du produit.
                                        </Card.Text>
                                        <br/>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <br/>
                                <br/>
                            </Row>
                        </Col>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Col md={{span: 8, offset: 2}}>
                            <Row>
                                <Card className="text-center">
                                    <Card.Header>Étude d'utilisabilté</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Étude de faisabilité</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    - 20 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            L'étude de faisabilité est une étude vérifiant que le projet est
                                            techniquement faisable et économiquement viable.
                                        </Card.Text>
                                        <br/>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <br/>
                                <br/>
                            </Row>
                        </Col>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Col md={{span: 8, offset: 2}}>
                            <Row>
                                <Card className="text-center">
                                    <Card.Header>Étude d'utilisabilté</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Preuve de concept</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    - 12 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            La preuve de concept est une réalisation expérimentale concrète,
                                            préliminaire, courte ou incomplète d'une méthode permettant d'en démontrer
                                            la faisabilité.
                                        </Card.Text>
                                        <br/>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <br/>
                                <br/>
                            </Row>
                        </Col>
                    </Container>
                </Carousel.Item>
            </Carousel>
        );
    }
}