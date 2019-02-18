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
  <fieldset className="bx--fieldset">
    <div className="bx--form-item">
      <div
        className="bx--number bx--number--helpertext"
        {...(touched && hasError("required") ? { "data-invalid": true } : {})}
      >
        <label className="bx--label">{meta.label}</label>
        <input
          type="number"
          className="form-control"
          placeholder={`Enter ${meta.label}`}
          {...handler()}
        />
        {touched && hasError("required") && (
          <div className="bx--form-requirement">{meta.label} is required</div>
        )}
      </div>
    </div>
  </fieldset>
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
