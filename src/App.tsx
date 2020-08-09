import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="card weather-card">
                <div className="card-body pb-3">
                    <h4 className="card-title font-weight-bold">Paris</h4>

                    <p className="card-text">Mon, 12:30 PM, Mostly Sunny</p>
                    <div className="d-flex justify-content-between">
                        <p className="display-1 degree">23</p>
                        <i className="fas fa-sun-o fa-5x pt-3 amber-text"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                        <p>
                            <i className="fas fa-tint fa-lg text-info pr-2"></i>3% Precipitation
                        </p>
                        <p>
                            <i className="fas fa-leaf fa-lg grey-text pr-2"></i>21 km/h Winds
                        </p>
                    </div>

                    <ul className="list-unstyled d-flex justify-content-between font-small text-muted mb-4">
                        <li className="pl-4">LUNDI : 8AM</li>
                        <li>Mardi : 11AM</li>
                        <li>Mercredi : 2PM</li>
                        <li>Jeudi : 5PM</li>
                        <li className="pr-4">Vendredi : 8PM</li>
                        <li>Samedi : 5PM</li>
                        <li>Dimanche : 5PM</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
