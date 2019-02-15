import React from "react";

export const textInput = ({ handler, touched, hasError, meta }) => (
  <>
    <label>{meta.label}</label>
    <input
      className="form-control"
      placeholder={`Enter ${meta.label}`}
      {...handler()}
    />
    <div className="invalid-feedback">
      {touched && hasError("required") && `${meta.label} is required`}
    </div>
  </>
);

export const dateInput = ({ handler, touched, hasError, meta }) => (
  <>
    <label>{meta.label}</label>
    <input
      type="date"
      className="form-control"
      placeholder={`Enter ${meta.label}`}
      {...handler()}
    />
    <div className="invalid-feedback">
      {touched && hasError("required") && `${meta.label} is required`}
    </div>
  </>
);

export const numberInput = ({ handler, touched, hasError, meta }) => (
  <>
    <label>{meta.label}</label>
    <input
      type="number"
      className="form-control"
      placeholder={`Enter ${meta.label}`}
      {...handler()}
    />
    <div className="invalid-feedback">
      {touched && hasError("required") && `${meta.label} is required`}
    </div>
  </>
);

export const selectInput = ({ handler, touched, hasError, meta }) => (
  <>
    <label>{meta.label}</label>
    <select className="form-control" {...handler()}>
      {meta.options.map(o => {
        return (
          <option key={o.value} value={o.value}>
            {o.name}
          </option>
        );
      })}
    </select>
    <div className="invalid-feedback">
      {touched && hasError("required") && `${meta.label} is required`}
    </div>
  </>
);
