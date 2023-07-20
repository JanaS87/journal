import React from "react";

export default function Form() {
    return (
        <form>
            <h1>New Entry</h1>
            <legend htmlFor="inputField">Motto</legend>
            <input className="inputStyle" type="text" id="inputField" required></input>
            
            <legend htmlFor="textField">Notes</legend>
            <textarea rows="4" cols="50" id="textField" required></textarea>

            <button className="btnStyle">Create</button>
            
        </form>
    )
}