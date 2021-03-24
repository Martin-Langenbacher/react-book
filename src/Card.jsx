import * as React from 'react';
import PropTypes from 'prop-types';

import './Card.css';
import Animal from "./Animal";

const uncovered = false;

export default function Card({ animal, uncovered }) {
    const front = (
        <div className="card">
            <h1> {animal.name ? animal.name : 'Unbekannt'}</h1>
            {animal.image && (
                <img alt={animal.name} src={`${process.env.PUBLIC_URL}/${animal.image}`}
                     height="200" width="200" />
            )}
            <table>
                <tbody>
                {Object.keys(Animal.properties).map(property => {
                    const animalProperty = Animal.properties[property];
                    return (
                        <tr key={property}>
                            <td>{animalProperty.label}</td>
                            <td>{animal[property]}&nbsp;{animalProperty.unit}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
    const back = <div className="card back" />;
    if (uncovered) {
        return front;
    } else {
        return back;
    }



}


Card.propTypes = {
    uncovered: PropTypes.bool.isRequired,
    animal: PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            size: PropTypes.number,
            weight: PropTypes.number,
            age: PropTypes.number,
            offspring: PropTypes.number,
            speed: PropTypes.number
        }),
};






/*





return (
    <div className="card">

    </div>
);




                     <!--
                        <tr><td>Größe</td><td>{elephant.size}</td></tr>
                        <tr><td>Gewicht</td><td>{elephant.weight}</td></tr>
                        <tr><td>Alter</td><td>{elephant.age}</td></tr>
                        <tr><td>Nachkommen</td><td>{elephant.offspring}</td></tr>
                        <tr><td>Geschwindigkeit</td><td>{elephant.speed}</td></tr>
                     -->

            //}
            //<img alt="Elefant" height="200" width="200"
                 src={`${process.env.PUBLIC_URL}/placeholder.png`} />
 */
