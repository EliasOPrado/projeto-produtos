import React from "react";

export default function Form(props) {
  /* 
   Form component used to display update and post 
   form conditionally.

   Properties:
   - props:
     - name: State
     - value: State
     - description: State
     - isPostForm(): State
     - handlePost(): Used to create a new product.
     - handleUpdate(): Used to update specific item.
     - handleNameChange(): Used to get name input value.
     - handleValueChange(): Used to get value input value.
     - handleDescriptionChange(): Used to get description input value.
  */
  return (
    <div className="form-container">
      {props.isPostForm ? <h3>Add A New Product</h3> : <h3>Update Product</h3>}
      <form
        onSubmit={props.isPostForm ? props.handlePost : props.handleUpdate}
        className="form"
      >
        <input
          type="text"
          name="nome"
          value={props.name}
          placeholder="Add a product name..."
          onChange={props.handleNameChange}
          className="main-input"
        />
        <input
          type="number"
          name="valor"
          value={props.value}
          placeholder="Add a value eg.: 12.99"
          onChange={props.handleValueChange}
          className="main-input"
        />
        <textarea
          rows="5"
          cols="33"
          placeholder="Add a descripton..."
          onChange={props.handleDescriptionChange}
          value={props.description}
          className="text-area-input"
        ></textarea>
        {props.isPostForm ? (
          <button type="submit" className="update-button" disabled={props.isLoading}>
            Post
          </button>
            ) : (
          <button type="submit" className="update-button">
            Update
          </button>
        )}
      </form>
    </div>
  );
}
