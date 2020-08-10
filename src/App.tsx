import React, { useState, useEffect } from 'react';
import './App.css';

export interface City {
    id: Int16Array;
    name: string;
    country: string;
}
export interface WeatherProdcast {
    cod: string;
    message: Int16Array;
    cnt: Int16Array;
    list: Array<WeatherDetails>;
    city: City;
}
export interface WeatherDetails {
    main: TempDetails;
    weather: Array<WeatherDesc>;
    wind: WindDetails;

}
export interface WeatherDesc {
    description: string;
}
export interface TempDetails {
    humidity: Int16Array;
    temp: Float32Array;

}
export interface WindDetails {
    speed: Int16Array;

}

function App() {
    const [result, setResult] = useState<WeatherProdcast | undefined>(undefined);
    useEffect(() => {
        fetch(
            'http://api.openweathermap.org/data/2.5/forecast?q=London&appid=b1dff15d055f2e3edbb8e4346b03ca97',
        )
            .then((response) => response.json())
            .then((response) => setResult(response))
            .catch((error) => setResult(error));
    }, []);

    return (
        <div className="App">
            <div className="card weather-card">
                <div className="card-body pb-3">
                    <h4 className="card-title font-weight-bold">{(result) ? '' + result.city.name + ', ' + result.city.country : 'Loading...'}</h4>

                    <p className="card-text">{new Date().toLocaleString()}, {(result) ? '' + result.list[1].weather[0].description : 'Loading...'}</p>
                    <div className="d-flex justify-content-between">
                        <p className="display-1 degree">{(result) ? '' + result.list[1].main.temp + '°' : 'Loading...'}</p>
                        <i className="fas fa-sun-o fa-5x pt-3 amber-text"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                        <p>
                            <i className="fas fa-tint fa-lg text-info pr-2"></i>{(result) ? '' + result.list[1].main.humidity + ' % humidity' : 'Loading...'}
                        </p>
                        <p>
                            <i className="fas fa-leaf fa-lg grey-text pr-2"></i>{(result) ? '' + result.list[1].wind.speed + ' km/h Winds' : 'Loading...'}
                        </p>
                    </div>

                    <ul className="list-unstyled d-flex justify-content-between font-small text-muted mb-4">
                        <li className="pl-4">{(result) ? '' + result.list[9].main.temp + '°' : 'Loading...'}</li>
                        <li>{(result) ? '' + result.list[9].main.temp + '°' : 'Loading...'}</li>
                        <li>{(result) ? '' + result.list[17].main.temp + '°' : 'Loading...'}</li>
                        <li>{(result) ? '' + result.list[25].main.temp + '°' : 'Loading...'}</li>
                        <li className="pr-4">{(result) ? '' + result.list[33].main.temp + '°' : 'Loading...'}</li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
