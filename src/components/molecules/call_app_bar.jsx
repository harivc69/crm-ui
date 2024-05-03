import React, { useState, useEffect } from "react";
import axios from 'axios';
import config from '../../config/config';

import { BsFillPencilFill } from "react-icons/bs";
import "./CallsGrid.css";

const CallsGrid = () => {
//   const [userinfologoData, setuserinfoData] = useState([]);


//   useEffect(() => {
//     axios.get(`${config.apiUrl}/UserInfodata`)
//         .then((response) => {
//             console.log('User Data received:', response.data);
//             setuserinfoData(response.data);
//         })
//         .catch((error) => {
//             console.error('Error fetching user data:', error);
//         });
// }, []);

useEffect(() => {
  axios.get(`${config.apiUrl}/UserInfodata`)
      .then((response) => {
          console.log('User Data received:', response.data);
          setRows(response.data);
      })
      .catch((error) => {
          console.error('Error fetching user data:', error);
      });
}, []);
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([

  ]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const [formState, setFormState] = useState({
    start_time: "",
    call_duration: "",
    recording_url: "",
    call_direction: "",
    source_id: "",
    assigned_to: "",
    call_status: "",
    call_source: "",
    provider_name: "",
    extension_user: "",
    caller_from: "",
    caller_to: "",
    recording_file_name: "",
    landing_number: "",
    call_recording_file: "",
    comments: "",
    created_by: ""
  });
  const [errors, setErrors] = useState("");
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const [showColumns, setShowColumns] = useState(() => {
    // Retrieve the state from local storage or use the default state
    const savedState = localStorage.getItem("showColumns");
    return savedState
      ? JSON.parse(savedState)
      : {
          start_time: false,
          call_duration: false,
          recording_url: false,
          call_direction: false,
          source_id: false,
          assigned_to: false,
          call_status: false,
          call_source: false,
          provider_name: false,
          extension_user: false,
          caller_from: false,
          caller_to: false,
          recording_file_name: false,
          landing_number: false,
          call_recording_file: false,
          comments: false,
          created_by: false
        };
  });

  const totalPages = Math.ceil(rows.length / recordsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  const startIndex = (pageNumber - 1) * recordsPerPage;
  const endIndex = pageNumber * recordsPerPage;

  useEffect(() => {
    localStorage.setItem("showColumns", JSON.stringify(showColumns));
  }, [showColumns]);

  const handleDeleteRow = targetIndex => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = idx => {
    setRowToEdit(idx);
    setModalOpen(true);
  
    // Populate formState with the values of the row being edited
    const editedRow = rows[idx];
    setFormState({
      start_time: editedRow.start_time,
      call_duration: editedRow.call_duration,
      recording_url: editedRow.recording_url,
      call_direction: editedRow.call_direction,
      source_id: editedRow.source_id,
      assigned_to: editedRow.assigned_to,
      call_status: editedRow.call_status,
      call_source: editedRow.call_source,
      provider_name: editedRow.provider_name,
      extension_user: editedRow.extension_user,
      caller_from: editedRow.caller_from,
      caller_to: editedRow.caller_to,
      recording_file_name: editedRow.recording_file_name,
      landing_number: editedRow.landing_number,
      call_recording_file: editedRow.call_recording_file,
      comments: editedRow.comments,
      created_by: editedRow.created_by
      
    });
  };

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = columnName => {
    setShowColumns({ ...showColumns, [columnName]: !showColumns[columnName] });
  };

  const toggleCheckboxes = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!validateForm()) return;

    rowToEdit === null
      ? setRows([...rows, formState])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
            return formState;
          })
        );

    setModalOpen(false);
  };

  const validateForm = () => {
    if (
      formState.start_time &&
      formState.call_duration &&
      formState.recording_url &&
      formState.call_direction &&
      formState.source_id &&
      formState.assigned_to &&
      formState.call_status &&
      formState.call_source &&
      formState.provider_name &&
      formState.extension_user &&
      formState.caller_from &&
      formState.caller_to &&
      formState.recording_file_name &&
      formState.landing_number &&
      formState.call_recording_file &&
      formState.comments &&
      formState.created_by
    ) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  return (
    <div className="CallsGrid">
      <div style={{height:'6vh'}}>
        <button onClick={toggleCheckboxes}>
          {showCheckboxes ? "Hide Checkboxes" : "Show Checkboxes"}
        </button>
        {showCheckboxes && (
          <div style={{
            height:'auto',
            width:'fit-content',
            position:'absolute',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            background:'white',
            borderRadius:'10px',
            padding:'15px 25px',
            boxShadow:'0px 0px 11px black'
          }}>
            {Object.entries(showColumns).map(([key, value]) => (
              <label key={key}>
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleCheckboxChange(key)}
                />
                {key.replace(/_/g, ' ')}
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="table-wrapper" style={{height:'70vh'}}>
        <table className="table">
          <thead>
            <tr>
              <th>Actions</th>
              {Object.entries(showColumns).map(([key, value]) => (
                value && <th key={key}>{key.replace(/_/g, ' ')}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.slice(startIndex, endIndex).map((row, idx) => (
              <tr key={startIndex + idx}>
                <td className="fit">
                  <span className="actions">
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => handleEditRow(startIndex + idx)}
                    />
                  </span>
                </td>
                {Object.entries(showColumns).map(([key, value]) => (
                  value && (
                    <td key={key}>
                      {typeof row[key] === 'object' ? row[key].$numberLong : row[key]}
                    </td>
                  )
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalOpen && (
        <div
          className="modal-container"
          onClick={e => {
            if (e.target.className === "modal-container") setModalOpen(false);
          }}
          style={{height:'10vh'}}
        >
          <div className="modal">
            <form>
              {Object.entries(showColumns).map(([key, value]) => (
                value && (
                  <div key={key} className="form-group">
                    <label htmlFor={key}>{key.replace(/_/g, ' ')}</label>
                    <input
                      name={key}
                      onChange={handleChange}
                      value={formState[key]}
                    />
                  </div>
                )
              ))}
              {errors && <div className="error">{`Please include: ${errors}`}</div>}
              <button type="submit" className="btn" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <div>
        <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber === 1}>&#60;</button>
        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => setPageNumber(num)}
            style={{ fontWeight: num === pageNumber ? "bold" : "normal" }}
          >
            {num}
          </button>
        ))}
        <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber === totalPages}>&#62;</button>
        <div>Page: {pageNumber}</div>
        <div>Records: {startIndex + 1} - {Math.min(endIndex, rows.length)} of {rows.length}</div>
      </div>
    </div>
  );
};

export default CallsGrid;
