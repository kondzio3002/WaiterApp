import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTables } from "../../../redux/tablesRedux";

const Tables = () => {
  const tables = useSelector(getAllTables);

  return (
    <>
      {tables.map(table => (
        <Card>
          <Card.Body>
            <Row>
              <Col xs={2}>
                <Card.Title as='h3'>Table {table.id}</Card.Title>
              </Col>
              <Col xs={8}>
                <Card.Text as='p'><strong>Status: </strong>{table.status}</Card.Text>
              </Col>
              <Col>
                <Link to={'/table/' + table.id}><Button variant='primary'>Show more</Button></Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Tables;