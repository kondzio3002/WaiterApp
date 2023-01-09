import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTableRequest, getTableById } from "../../../redux/tablesRedux";

const TableCard = () => {

  const { tableId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTable = useSelector(state => getTableById(state, tableId));

  const [table] = useState(getTable.id);
  const [status, setStatus] = useState(getTable.status);
  const [peopleAmount, setPeopleAmount] = useState(getTable.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(getTable.maxPeopleAmount);
  const [bill, setBill] = useState(getTable.bill);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editTableRequest({table, peopleAmount, maxPeopleAmount, status, bill, tableId}))
    navigate('/');
  };
  

  return (
    <>
      <h2>Table {table}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label as='legend' column sm={1}>
          <strong>Status:</strong>
          </Form.Label>
          <Col sm={3}>
            <Form.Select value={status} onChange={e => setStatus(e.target.value)}>
              <option value='busy'>Busy</option>
              <option value='free'>Free</option>
              <option value='cleaning'>Cleaning</option>
              <option value='reserved'>Reserved</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label column sm={1}>
            <strong>People:</strong>
          </Form.Label>
          <Col sm={1}>
            <Form.Control type='text' value={peopleAmount} onChange={e=>setPeopleAmount(e.target.value)} />
          </Col>
          /
          <Col sm={1}>
            <Form.Control type='text' value={maxPeopleAmount} onChange={e=>setMaxPeopleAmount(e.target.value)} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label column sm={1}>
          <strong>Bill:</strong>
          </Form.Label>
          <Col sm={2}>
            <Row>
            <Col sm={1}>$</Col><Col sm={6}><Form.Control type='text' value={bill} onChange={e=>setBill(e.target.value)} /></Col>
            </Row>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-2'>
          <Col>
            <Button type='submit'>Update</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default TableCard;