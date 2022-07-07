import React from "react";

class Hours extends React.Component {
    render() {
        return (
            <section id="hours">
                <h2>Hours</h2>
                <ol>
                <li>
                    <span className="hours__day">Monday</span>
                    <span className="hours__time">9am - 2pm</span>
                </li>
                <li>
                    <span className="hours__day">Tuesday</span>
                    <span className="hours__time">9am - 2pm</span>
                </li>
                <li>
                    <span className="hours__day">Wednesday</span>
                    <span className="hours__time">9am - 2pm</span>
                </li>
                <li>
                    <span className="hours__day">Thursday</span>
                    <span className="hours__time">9am - 2pm</span>
                </li>
                <li>
                    <span className="hours__day">Friday</span>
                    <span className="hours__time">9am - 2pm</span>
                </li>
                <li>
                    <span className="hours__day">Saturday</span>
                    <span className="hours__time">9am - 2pm</span>
                </li>
                <li>
                    <span className="hours__day">Sunday</span>
                    <span className="hours__time">9am - 2pm</span>
                </li>
                </ol>
            </section>
        )
    }
}

export default Hours;
