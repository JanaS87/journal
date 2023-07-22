import "./Entry-Form.css";
import Button from "../Button";
import React from "react";


export default function EntryForm(){
    return (
        <form className="entryForm">
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