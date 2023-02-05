import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const TableForm = ({ action, ...props }) => {

  const [table] = useState(props.id || '');
  const [status, setStatus] = useState('' || props.status);
  const [peopleAmount, setPeopleAmount] = useState('' || props.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState('' || props.maxPeopleAmount);
  const [bill, setBill] = useState('' || props.bill);

  const handleSubmit = () => {
    action({peopleAmount, maxPeopleAmount, status, bill});
  };

  if(peopleAmount > maxPeopleAmount || peopleAmount > 10) {
    setPeopleAmount(maxPeopleAmount);
  }

  if(peopleAmount < 0) {
    setPeopleAmount(0);
  }

  if(maxPeopleAmount > 10) {
    setMaxPeopleAmount(10);
  }

  if(maxPeopleAmount < 0) {
    setMaxPeopleAmount(0);
  }

  if(bill < 0) {
    setBill(0);
  }

  return (
    <>
      <h2>Table {table}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label as='legend' column sm={1}>
          <strong>Status:</strong>
          </Form.Label>
          <Col sm={3}>
            <Form.Select value={status} onChange={e => setStatus(e.target.value)} >
              <option value='Busy'>Busy</option>
              <option value='Free'>Free</option>
              <option value='Cleaning'>Cleaning</option>
              <option value='Reserved'>Reserved</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label column sm={1}>
            <strong>People:</strong>
          </Form.Label>
          <Col sm={1}>
            <Form.Control type='number' value={peopleAmount} onChange={e=>setPeopleAmount(e.target.value)} />
          </Col>
          /
          <Col sm={1}>
            <Form.Control type='number' value={maxPeopleAmount} onChange={e=>setMaxPeopleAmount(e.target.value)} />
          </Col>
        </Form.Group>
        {status === "Busy" && <Form.Group as={Row} className='mb-3'>
          <Form.Label column sm={1}>
          <strong>Bill:</strong>
          </Form.Label>
          <Col sm={2}>
            <Row>
            <Col sm={1}>$</Col><Col sm={6}><Form.Control type='text' value={bill} onChange={e=>setBill(e.target.value)} /></Col>
            </Row>
          </Col>
        </Form.Group>}
        <Form.Group as={Row} className='mb-2'>
          <Col>
            <Button type='submit'>Update</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
}

export default TableForm;