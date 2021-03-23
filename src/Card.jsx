import * as React from 'react';
import './Card.css';

export default function Card() {
    return (
        <div className="card">
            <h1>Elefant</h1>
            <img alt="Elefant" height="200" width="200"
                 src={`${process.env.PUBLIC_URL}/placeholder.png`} />
                 <table>
                     <tbody>
                        <tr><td>Größe</td><td>3.3 m</td></tr>
                        <tr><td>Gewicht</td><td>6000 kg</td></tr>
                        <tr><td>Alter</td><td>70 Jahre</td></tr>
                        <tr><td>Nachkommen</td><td>1</td></tr>
                        <tr><td>Geschwindigkeit</td><td>40 km</td></tr>
                     </tbody>
                 </table>
        </div>
    );
}
