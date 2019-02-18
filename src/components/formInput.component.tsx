import React from "react";

export const textInput = ({ handler, touched, hasError, meta }) => (
  <fieldset className="bx--fieldset">
    <div className="bx--form-item">
      <label className="bx--label">{meta.label}</label>
      <input
        type="text"
        className="bx--text-input"
        placeholder={`Enter ${meta.label}`}
        {...handler()}
        {...(touched && hasError("required") ? { "data-invalid": true } : {})}
      />
      {touched && hasError("required") && (
        <div className="bx--form-requirement">{meta.label} is required</div>
      )}
    </div>
  </fieldset>
);

export const dateInput = ({ handler, touched, hasError, meta }) => (
  <fieldset className="bx--fieldset">
    <div className="bx--form-item">
      <label className="bx--label">{meta.label}</label>
      <input
        type="date"
        className="bx--text-input"
        placeholder={`Enter ${meta.label}`}
        {...handler()}
        {...(touched && hasError("required") ? { "data-invalid": true } : {})}
      />
      {touched && hasError("required") && (
        <div className="bx--form-requirement">{meta.label} is required</div>
      )}
    </div>
  </fieldset>
);

export const numberInput = ({ handler, touched, hasError, meta }) => (
  <fieldset className="bx--fieldset">
    <div className="bx--form-item">
      <label className="bx--label">{meta.label}</label>
      <input
        type="number"
        className="bx--text-input"
        placeholder={`Enter ${meta.label}`}
        {...handler()}
        {...(touched && hasError("required") ? { "data-invalid": true } : {})}
      />
      {touched && hasError("required") && (
        <div className="bx--form-requirement">{meta.label} is required</div>
      )}
    </div>
  </fieldset>
);

export const selectInput = ({ handler, touched, hasError, meta }) => (
  <fieldset className="bx--fieldset">
    <div className="bx--form-item">
      <div className="bx--select eco--w100">
        <label className="bx--label">{meta.label}</label>
        <select className="bx--select-input" {...handler()}>
          {meta.options.map(o => {
            return (
              <option key={o.value} value={o.value}>
                {o.name}
              </option>
            );
          })}
        </select>
        <svg
          className="bx--select__arrow"
          fillRule="evenodd"
          height="5"
          role="img"
          viewBox="0 0 10 5"
          width="10"
        >
          <path d="M0 0l5 4.998L10 0z" />
        </svg>
        {touched && hasError("required") && (
          <div className="bx--form-requirement">{meta.label} is required</div>
        )}
      </div>
    </div>
  </fieldset>
);
