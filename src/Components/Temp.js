import React,{useState, useEffect} from 'react';
import './css/style.css'
const Temp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3a128d8d583e78580b0af31e73bc45a2`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
 
        }
        fetchApi();   
    },[search] )
    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input 
                    type="search"
                    value={search}
                    onChange={ (event) => { setSearch (event.target.value)
                    }}
                    className="inputFeild"/>
                </div>

            {!city ? (
                <p className="text-center">No Data Found</p>
            ) : (
                <div className="mt-4">
                    <div className="info">
                    <h2 className="location">
                    <i className="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">
                        {city.temp}°C    
                    </h1>
                    <h3 className="min-max">
                    Min {city.temp_min}°C   | Max {city.temp_max}°C  
                    </h3>
                </div>
                <div className="wave-one"></div>
                <div className="wave-two"></div>
                <div className="wave-three"></div>
                </div>
            )}
                
            </div>
        </>
    )
}
export default Temp;