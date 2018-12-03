import React from "react";

export default ({ handleChange, handleSubmit, post }) => {
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <input
            className="col-12 form-control"
            name="name"
            onChange={handleChange}
            type="text"
            value={post.name}
            placeholder=" Enter a MARVEL Hero"
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
        </button>
      </form>
    </div>
  );
};
