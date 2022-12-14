import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "../components/search/Filter";
import ProfilesCards from "../components/search/ProfilesCards";

import "../style/components/_search.scss";

const Search = () => {
  return (
    <div>
      <div className="header">
        <div className="title-search">
          <p>Encuentra al mejor tutor</p>
        </div>
      </div>
      <Container className="content">
        <Row>
          <Col className="me-4" md={3}>
            <Filter />
          </Col>
          <Col className="profile ms-4" md={8}>
            <ProfilesCards />
          </Col>
          <Col>
            <div className="btn-more">
                <button>Ver más</button>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
