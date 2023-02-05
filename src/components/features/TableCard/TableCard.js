import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { editTableRequest, getTableById, editTable } from "../../../redux/tablesRedux";
import TableForm from "../TableForm/TableForm";

const TableCard = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTable = useSelector(state => getTableById(state, id));

  const handleSubmit = table => {
    dispatch(editTable({ ...table, id}));
    navigate('/');
  }

  if (!getTable) return <Navigate to='/' />
  return (
    <TableForm 
      action={handleSubmit}
      id={getTable.id}
      status={getTable.status}
      peopleAmount={getTable.peopleAmount}
      maxPeopleAmount={getTable.maxPeopleAmount}
      bill={getTable.bill}
    />
  );
};

export default TableCard;