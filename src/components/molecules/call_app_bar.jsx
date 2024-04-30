import React, { useState, useEffect } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import "./CallsGrid.css";

const CallsGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      userName: "Tim",
      phoneNumber: "1234567890",
      callType: "Inbound",
      callStatus: "Missed",
      dateTime: "2024-04-24T12:00",
      duration: "00:05:00",
      assignedTo: "John",
      landingNumber: "9876543210"
    },
    {
      userName: "Alice",
      phoneNumber: "9876543210",
      callType: "Outbound",
      callStatus: "Answered",
      dateTime: "2024-04-25T10:30",
      duration: "00:10:00",
      assignedTo: "Jane",
      landingNumber: "1234567890"
    },
    {
      userName: "John",
      phoneNumber: "5555555555",
      callType: "Inbound",
      callStatus: "Answered",
      dateTime: "2024-04-26T09:00",
      duration: "00:08:00",
      assignedTo: "Alex",
      landingNumber: "6666666666"
    },
    {
      userName: "Sarah",
      phoneNumber: "7777777777",
      callType: "Outbound",
      callStatus: "Missed",
      dateTime: "2024-04-27T15:45",
      duration: "00:07:30",
      assignedTo: "Emily",
      landingNumber: "8888888888"
    },
    {
      userName: "Tim",
      phoneNumber: "1234567890",
      callType: "Inbound",
      callStatus: "Missed",
      dateTime: "2024-04-24T12:00",
      duration: "00:05:00",
      assignedTo: "John",
      landingNumber: "9876543210"
    },
    {
      userName: "Alice",
      phoneNumber: "9876543210",
      callType: "Outbound",
      callStatus: "Answered",
      dateTime: "2024-04-25T10:30",
      duration: "00:10:00",
      assignedTo: "Jane",
      landingNumber: "1234567890"
    },
    {
      userName: "John",
      phoneNumber: "5555555555",
      callType: "Inbound",
      callStatus: "Answered",
      dateTime: "2024-04-26T09:00",
      duration: "00:08:00",
      assignedTo: "Alex",
      landingNumber: "6666666666"
    },
    {
      userName: "Sarah",
      phoneNumber: "7777777777",
      callType: "Outbound",
      callStatus: "Missed",
      dateTime: "2024-04-27T15:45",
      duration: "00:07:30",
      assignedTo: "Emily",
      landingNumber: "8888888888"
    },
    {
      userName: "Tim",
      phoneNumber: "1234567890",
      callType: "Inbound",
      callStatus: "Missed",
      dateTime: "2024-04-24T12:00",
      duration: "00:05:00",
      assignedTo: "John",
      landingNumber: "9876543210"
    },
    {
      userName: "Alice",
      phoneNumber: "9876543210",
      callType: "Outbound",
      callStatus: "Answered",
      dateTime: "2024-04-25T10:30",
      duration: "00:10:00",
      assignedTo: "Jane",
      landingNumber: "1234567890"
    },
    {
      userName: "John",
      phoneNumber: "5555555555",
      callType: "Inbound",
      callStatus: "Answered",
      dateTime: "2024-04-26T09:00",
      duration: "00:08:00",
      assignedTo: "Alex",
      landingNumber: "6666666666"
    },
    {
      userName: "Sarah",
      phoneNumber: "7777777777",
      callType: "Outbound",
      callStatus: "Missed",
      dateTime: "2024-04-27T15:45",
      duration: "00:07:30",
      assignedTo: "Emily",
      landingNumber: "8888888888"
    },
    {
      userName: "Tim",
      phoneNumber: "1234567890",
      callType: "Inbound",
      callStatus: "Missed",
      dateTime: "2024-04-24T12:00",
      duration: "00:05:00",
      assignedTo: "John",
      landingNumber: "9876543210"
    },
    {
      userName: "Alice",
      phoneNumber: "9876543210",
      callType: "Outbound",
      callStatus: "Answered",
      dateTime: "2024-04-25T10:30",
      duration: "00:10:00",
      assignedTo: "Jane",
      landingNumber: "1234567890"
    },
    {
      userName: "John",
      phoneNumber: "5555555555",
      callType: "Inbound",
      callStatus: "Answered",
      dateTime: "2024-04-26T09:00",
      duration: "00:08:00",
      assignedTo: "Alex",
      landingNumber: "6666666666"
    },
    {
      userName: "Sarah",
      phoneNumber: "7777777777",
      callType: "Outbound",
      callStatus: "Missed",
      dateTime: "2024-04-27T15:45",
      duration: "00:07:30",
      assignedTo: "Emily",
      landingNumber: "8888888888"
    },
    {
      userName: "Tim",
      phoneNumber: "1234567890",
      callType: "Inbound",
      callStatus: "Missed",
      dateTime: "2024-04-24T12:00",
      duration: "00:05:00",
      assignedTo: "John",
      landingNumber: "9876543210"
    },
    {
      userName: "Alice",
      phoneNumber: "9876543210",
      callType: "Outbound",
      callStatus: "Answered",
      dateTime: "2024-04-25T10:30",
      duration: "00:10:00",
      assignedTo: "Jane",
      landingNumber: "1234567890"
    },
    {
      userName: "John",
      phoneNumber: "5555555555",
      callType: "Inbound",
      callStatus: "Answered",
      dateTime: "2024-04-26T09:00",
      duration: "00:08:00",
      assignedTo: "Alex",
      landingNumber: "6666666666"
    },
    {
      userName: "Sarah",
      phoneNumber: "7777777777",
      callType: "Outbound",
      callStatus: "Missed",
      dateTime: "2024-04-27T15:45",
      duration: "00:07:30",
      assignedTo: "Emily",
      landingNumber: "8888888888"
    },
    {
      userName: "Tim",
      phoneNumber: "1234567890",
      callType: "Inbound",
      callStatus: "Missed",
      dateTime: "2024-04-24T12:00",
      duration: "00:05:00",
      assignedTo: "John",
      landingNumber: "9876543210"
    },
    {
      userName: "Alice",
      phoneNumber: "9876543210",
      callType: "Outbound",
      callStatus: "Answered",
      dateTime: "2024-04-25T10:30",
      duration: "00:10:00",
      assignedTo: "Jane",
      landingNumber: "1234567890"
    },
    {
      userName: "John",
      phoneNumber: "5555555555",
      callType: "Inbound",
      callStatus: "Answered",
      dateTime: "2024-04-26T09:00",
      duration: "00:08:00",
      assignedTo: "Alex",
      landingNumber: "6666666666"
    },
    {
      userName: "Sarah",
      phoneNumber: "7777777777",
      callType: "Outbound",
      callStatus: "Missed",
      dateTime: "2024-04-27T15:45",
      duration: "00:07:30",
      assignedTo: "Emily",
      landingNumber: "8888888888"
    },
    {
      userName: "Tim",
      phoneNumber: "1234567890",
      callType: "Inbound",
      callStatus: "Missed",
      dateTime: "2024-04-24T12:00",
      duration: "00:05:00",
      assignedTo: "John",
      landingNumber: "9876543210"
    },
    {
      userName: "Alice",
      phoneNumber: "9876543210",
      callType: "Outbound",
      callStatus: "Answered",
      dateTime: "2024-04-25T10:30",
      duration: "00:10:00",
      assignedTo: "Jane",
      landingNumber: "1234567890"
    },
    {
      userName: "John",
      phoneNumber: "5555555555",
      callType: "Inbound",
      callStatus: "Answered",
      dateTime: "2024-04-26T09:00",
      duration: "00:08:00",
      assignedTo: "Alex",
      landingNumber: "6666666666"
    },
    {
      userName: "Sarah",
      phoneNumber: "7777777777",
      callType: "Outbound",
      callStatus: "Missed",
      dateTime: "2024-04-27T15:45",
      duration: "00:07:30",
      assignedTo: "Emily",
      landingNumber: "8888888888"
    },
    {
      userName: "Tim",
      phoneNumber: "1234567890",
      callType: "Inbound",
      callStatus: "Missed",
      dateTime: "2024-04-24T12:00",
      duration: "00:05:00",
      assignedTo: "John",
      landingNumber: "9876543210"
    },
    {
      userName: "Alice",
      phoneNumber: "9876543210",
      callType: "Outbound",
      callStatus: "Answered",
      dateTime: "2024-04-25T10:30",
      duration: "00:10:00",
      assignedTo: "Jane",
      landingNumber: "1234567890"
    },
    {
      userName: "John",
      phoneNumber: "5555555555",
      callType: "Inbound",
      callStatus: "Answered",
      dateTime: "2024-04-26T09:00",
      duration: "00:08:00",
      assignedTo: "Alex",
      landingNumber: "6666666666"
    },
    {
      userName: "Sarah",
      phoneNumber: "7777777777",
      callType: "Outbound",
      callStatus: "Missed",
      dateTime: "2024-04-27T15:45",
      duration: "00:07:30",
      assignedTo: "Emily",
      landingNumber: "8888888888"
    },
    {
      userName: "Tim",
      phoneNumber: "1234567890",
      callType: "Inbound",
      callStatus: "Missed",
      dateTime: "2024-04-24T12:00",
      duration: "00:05:00",
      assignedTo: "John",
      landingNumber: "9876543210"
    },
    {
      userName: "Alice",
      phoneNumber: "9876543210",
      callType: "Outbound",
      callStatus: "Answered",
      dateTime: "2024-04-25T10:30",
      duration: "00:10:00",
      assignedTo: "Jane",
      landingNumber: "1234567890"
    },
    {
      userName: "John",
      phoneNumber: "5555555555",
      callType: "Inbound",
      callStatus: "Answered",
      dateTime: "2024-04-26T09:00",
      duration: "00:08:00",
      assignedTo: "Alex",
      landingNumber: "6666666666"
    },
    {
      userName: "Sarah",
      phoneNumber: "7777777777",
      callType: "Outbound",
      callStatus: "Missed",
      dateTime: "2024-04-27T15:45",
      duration: "00:07:30",
      assignedTo: "Emily",
      landingNumber: "8888888888"
    },
    {
      userName: "Tim",
      phoneNumber: "1234567890",
      callType: "Inbound",
      callStatus: "Missed",
      dateTime: "2024-04-24T12:00",
      duration: "00:05:00",
      assignedTo: "John",
      landingNumber: "9876543210"
    },
    {
      userName: "Alice",
      phoneNumber: "9876543210",
      callType: "Outbound",
      callStatus: "Answered",
      dateTime: "2024-04-25T10:30",
      duration: "00:10:00",
      assignedTo: "Jane",
      landingNumber: "1234567890"
    },
    {
      userName: "John",
      phoneNumber: "5555555555",
      callType: "Inbound",
      callStatus: "Answered",
      dateTime: "2024-04-26T09:00",
      duration: "00:08:00",
      assignedTo: "Alex",
      landingNumber: "6666666666"
    },
    {
      userName: "Sarah",
      phoneNumber: "7777777777",
      callType: "Outbound",
      callStatus: "Missed",
      dateTime: "2024-04-27T15:45",
      duration: "00:07:30",
      assignedTo: "Emily",
      landingNumber: "8888888888"
    },
    {
      userName: "Tim",
      phoneNumber: "1234567890",
      callType: "Inbound",
      callStatus: "Missed",
      dateTime: "2024-04-24T12:00",
      duration: "00:05:00",
      assignedTo: "John",
      landingNumber: "9876543210"
    },
    {
      userName: "Alice",
      phoneNumber: "9876543210",
      callType: "Outbound",
      callStatus: "Answered",
      dateTime: "2024-04-25T10:30",
      duration: "00:10:00",
      assignedTo: "Jane",
      landingNumber: "1234567890"
    },
    {
      userName: "John",
      phoneNumber: "5555555555",
      callType: "Inbound",
      callStatus: "Answered",
      dateTime: "2024-04-26T09:00",
      duration: "00:08:00",
      assignedTo: "Alex",
      landingNumber: "6666666666"
    },
    {
      userName: "Sarah",
      phoneNumber: "7777777777",
      callType: "Outbound",
      callStatus: "Missed",
      dateTime: "2024-04-27T15:45",
      duration: "00:07:30",
      assignedTo: "Emily",
      landingNumber: "8888888888"
    },
    {
      userName: "Tim",
      phoneNumber: "1234567890",
      callType: "Inbound",
      callStatus: "Missed",
      dateTime: "2024-04-24T12:00",
      duration: "00:05:00",
      assignedTo: "John",
      landingNumber: "9876543210"
    },
    {
      userName: "Alice",
      phoneNumber: "9876543210",
      callType: "Outbound",
      callStatus: "Answered",
      dateTime: "2024-04-25T10:30",
      duration: "00:10:00",
      assignedTo: "Jane",
      landingNumber: "1234567890"
    },
    {
      userName: "John",
      phoneNumber: "5555555555",
      callType: "Inbound",
      callStatus: "Answered",
      dateTime: "2024-04-26T09:00",
      duration: "00:08:00",
      assignedTo: "Alex",
      landingNumber: "6666666666"
    },
    {
      userName: "Sarah",
      phoneNumber: "7777777777",
      callType: "Outbound",
      callStatus: "Missed",
      dateTime: "2024-04-27T15:45",
      duration: "00:07:30",
      assignedTo: "Emily",
      landingNumber: "8888888888"
    },
    {
      userName: "Tim",
      phoneNumber: "1234567890",
      callType: "Inbound",
      callStatus: "Missed",
      dateTime: "2024-04-24T12:00",
      duration: "00:05:00",
      assignedTo: "John",
      landingNumber: "9876543210"
    },
    {
      userName: "Alice",
      phoneNumber: "9876543210",
      callType: "Outbound",
      callStatus: "Answered",
      dateTime: "2024-04-25T10:30",
      duration: "00:10:00",
      assignedTo: "Jane",
      landingNumber: "1234567890"
    },
    {
      userName: "John",
      phoneNumber: "5555555555",
      callType: "Inbound",
      callStatus: "Answered",
      dateTime: "2024-04-26T09:00",
      duration: "00:08:00",
      assignedTo: "Alex",
      landingNumber: "6666666666"
    },
    {
      userName: "Sarah",
      phoneNumber: "7777777777",
      callType: "Outbound",
      callStatus: "Missed",
      dateTime: "2024-04-27T15:45",
      duration: "00:07:30",
      assignedTo: "Emily",
      landingNumber: "8888888888"
    },
    {
      userName: "Sarah",
      phoneNumber: "7777777777",
      callType: "Outbound",
      callStatus: "Missed",
      dateTime: "2024-04-27T15:45",
      duration: "00:07:30",
      assignedTo: "Emily",
      landingNumber: "8888888888"
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const [formState, setFormState] = useState({
    userName: "",
    phoneNumber: "",
    callType: "",
    callStatus: "",
    dateTime: "",
    duration: "",
    assignedTo: "",
    landingNumber: ""
  });
  const [errors, setErrors] = useState("");
  const [showColumns, setShowColumns] = useState(() => {
    // Retrieve the state from local storage or use the default state
    const savedState = localStorage.getItem("showColumns");
    return savedState
      ? JSON.parse(savedState)
      : {
          userName: true,
          phoneNumber: true,
          callType: true,
          callStatus: true,
          dateTime: true,
          duration: true,
          assignedTo: true,
          landingNumber: true
        };
  });
  const [showCheckboxes, setShowCheckboxes] = useState(false); // Initially hidden
  const [pageNumber, setPageNumber] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10); // Number of records to display per page

  const totalPages = Math.ceil(rows.length / recordsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  const startIndex = (pageNumber - 1) * recordsPerPage;
  const endIndex = pageNumber * recordsPerPage;

  useEffect(() => {
    if (rowToEdit !== null) {
      // If editing a row, set the formState with the current values
      setFormState(rows[rowToEdit]);
    } else {
      // If not editing, reset the formState
      setFormState({
        userName: "",
        phoneNumber: "",
        callType: "",
        callStatus: "",
        dateTime: "",
        duration: "",
        assignedTo: "",
        landingNumber: ""
      });
    }
  }, [rowToEdit, rows]);

  useEffect(() => {
    localStorage.setItem("showColumns", JSON.stringify(showColumns));
  }, [showColumns]);

  const handleDeleteRow = targetIndex => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = idx => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = columnName => {
    setShowColumns({ ...showColumns, [columnName]: !showColumns[columnName] });
  };

  const toggleCheckboxes = () => {
    setShowCheckboxes(!showCheckboxes); // Toggle visibility of checkboxes
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
      formState.userName &&
      formState.phoneNumber &&
      formState.callType &&
      formState.callStatus &&
      formState.dateTime &&
      formState.duration &&
      formState.assignedTo &&
      formState.landingNumber
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
      <div>
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
            <label>
              <input
                type="checkbox"
                checked={showColumns.userName}
                onChange={() => handleCheckboxChange("userName")}
              />
              User Name
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumns.phoneNumber}
                onChange={() => handleCheckboxChange("phoneNumber")}
              />
              Phone Number
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumns.callType}
                onChange={() => handleCheckboxChange("callType")}
              />
              Call Type
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumns.callStatus}
                onChange={() => handleCheckboxChange("callStatus")}
              />
              Call Status
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumns.dateTime}
                onChange={() => handleCheckboxChange("dateTime")}
              />
              Date and Time
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumns.duration}
                onChange={() => handleCheckboxChange("duration")}
              />
              Duration
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumns.assignedTo}
                onChange={() => handleCheckboxChange("assignedTo")}
              />
              Assigned To
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumns.landingNumber}
                onChange={() => handleCheckboxChange("landingNumber")}
              />
              Landing Number
            </label>
          </div>
        )}
      </div>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Actions</th>
              {showColumns.userName && <th>User Name</th>}
              {showColumns.phoneNumber && <th>Phone Number</th>}
              {showColumns.callType && <th>Call Type</th>}
              {showColumns.callStatus && <th>Call Status</th>}
              {showColumns.dateTime && <th>Date and Time</th>}
              {showColumns.duration && <th>Duration</th>}
              {showColumns.assignedTo && <th>Assigned To</th>}
              {showColumns.landingNumber && <th>Landing Number</th>}
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
                {showColumns.userName && <td>{row.userName}</td>}
                {showColumns.phoneNumber && <td>{row.phoneNumber}</td>}
                {showColumns.callType && <td>{row.callType}</td>}
                {showColumns.callStatus && <td>{row.callStatus}</td>}
                {showColumns.dateTime && <td>{row.dateTime}</td>}
                {showColumns.duration && <td>{row.duration}</td>}
                {showColumns.assignedTo && <td>{row.assignedTo}</td>}
                {showColumns.landingNumber && <td>{row.landingNumber}</td>}
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
        >
          <div className="modal">
            <form>
              <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <input
                  name="userName"
                  onChange={handleChange}
                  value={formState.userName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  name="phoneNumber"
                  onChange={handleChange}
                  value={formState.phoneNumber}
                />
              </div>
              <div className="form-group">
                <label htmlFor="callType">Call Type</label>
                <select
                  name="callType"
                  onChange={handleChange}
                  value={formState.callType}
                >
                  <option value="">Select Call Type</option>
                  <option value="Inbound">Inbound</option>
                  <option value="Outbound">Outbound</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="callStatus">Call Status</label>
                <input
                  name="callStatus"
                  onChange={handleChange}
                  value={formState.callStatus}
                />
              </div>
              <div className="form-group">
                <label htmlFor="dateTime">Date and Time</label>
                <input
                  type="datetime-local"
                  name="dateTime"
                  onChange={handleChange}
                  value={formState.dateTime}
                />
              </div>
              <div className="form-group">
                <label htmlFor="duration">Duration</label>
                <input
                  name="duration"
                  onChange={handleChange}
                  value={formState.duration}
                />
              </div>
              <div className="form-group">
                <label htmlFor="assignedTo">Assigned To</label>
                <input
                  name="assignedTo"
                  onChange={handleChange}
                  value={formState.assignedTo}
                />
              </div>
              <div className="form-group">
                <label htmlFor="landingNumber">Landing Number</label>
                <input
                  name="landingNumber"
                  onChange={handleChange}
                  value={formState.landingNumber}
                />
              </div>
              {errors && <div className="error">{`Please include: ${errors}`}</div>}
              <button type="submit" className="btn" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
       <div>
        {/* Pagination */}
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
