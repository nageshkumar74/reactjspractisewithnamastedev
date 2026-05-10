import React, { useState } from "react";

function EmployeeValidationForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [employeeID, setEmployeeId] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState({
    name: true,
    email: true,
    employeeID: true,
    date: true
  });

  const currentDate = new Date();

  const validate = (updatedValues) => {
    const { name, email, employeeID, date } = updatedValues;

    setError({
      name: name.length < 4 || !/^[A-Za-z\s]+$/.test(name),
      email: !/^\S+@\S+\.\S+$/.test(email),
      employeeID: !/^\d{6}$/.test(employeeID),
      date: date && new Date(date) > currentDate
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully ✅");
  };

  return (
    <div className="layout-column align-items-center mt-20">

      <form onSubmit={handleSubmit} className="layout-column align-items-start mb-10 w-50">

        {/* Name */}
        <input
          className="w-100"
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => {
            const value = e.target.value;
            setName(value);
            validate({ name: value, email, employeeID, date });
          }}
        />
        {error.name && (
          <p className="error mt-2">
            Name must be at least 4 characters long and only contain letters and spaces
          </p>
        )}

        {/* Email */}
        <input
          className="w-100"
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            const value = e.target.value;
            setEmail(value);
            validate({ name, email: value, employeeID, date });
          }}
        />
        {error.email && (
          <p className="error mt-2">Email must be a valid email address</p>
        )}

        {/* Employee ID */}
        <input
          className="w-100"
          type="text"
          value={employeeID}
          placeholder="Employee ID"
          onChange={(e) => {
            const value = e.target.value;
            setEmployeeId(value);
            validate({ name, email, employeeID: value, date });
          }}
        />
        {error.employeeID && (
          <p className="error mt-2">Employee ID must be exactly 6 digits</p>
        )}

        {/* Date */}
        <input
          className="w-100"
          type="date"
          value={date}
          onChange={(e) => {
            const value = e.target.value;
            setDate(value);
            validate({ name, email, employeeID, date: value });
          }}
        />
        {error.date && (
          <p className="error mt-2 text-red-500">
            Joining Date cannot be in the future
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={
            error.name || error.email || error.employeeID || error.date
          }
        >
          Submit
        </button>

      </form>
    </div>
  );
}

export default EmployeeValidationForm;