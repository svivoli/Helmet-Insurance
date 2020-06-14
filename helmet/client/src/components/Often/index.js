import React, { useState } from 'react';
import API from '../../utils/API';

function Often() {
    const [often, setOften] = useState();

    function handleOftenChange(event) {
        setOften(event.target.value);
    }

    function handlePost() {
        API.createFrequency({
            often: often
        })
            .then(console.log("Frequency saved to database."))
            .catch(err => console.log(err));
    }

    return (
        <section className="sign-up">
            <div className="form-content">
                <div className="often">
                    <h4>How often do you ride?</h4>
                    <input type="button" className="light uk-button uk-button-default" value="0-5 Days/Month" onClick={handleOftenChange}></input>
                    <input type="button" className="med uk-button uk-button-default" value="10+ Days/Month" onClick={handleOftenChange}></input>
                    <input type="button" className="heavy uk-button uk-button-default" value="Daily" onClick={handleOftenChange}></input>
                    <br></br>
                    <a className="next2-btn uk-button uk-button-default" href="/signup3" onClick={handlePost}>Next</a>
                </div>
            </div>
        </section>
    )
};

export default Often;