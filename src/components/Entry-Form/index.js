import "./Entry-Form.css";
import Button from "../Button";
import React from "react";


export default function EntryForm({onAddEntry}){

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log(data);

        const motto = event.target.elements.motto.value;
        const notes = event.target.elements.notes.value;

        const newEntry = {
            motto: motto,
            notes: notes,
        };

        onAddEntry(newEntry);

        event.target.reset();
    }


    return (
        <form className="entryForm" onSubmit={handleSubmit}>
              <h2 className="entryForm__title">New Entry</h2>
            <div className="entryForm__fields">
                <div className="entryForm__field">
                    <label htmlFor="motto">Motto</label>
                    <input className="motto" type="text" id="motto" required></input>
                </div>
            <div className="entryForm__field">
                <label htmlFor="notes">Notes</label>
                <textarea rows="4" cols="50" id="notes" required></textarea>
            </div>
            <div className="entryForm__btn-container">
                <Button type="submit">Create</Button>
            </div>
            </div>
        </form>
    );
}