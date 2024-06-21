/* eslint-disable react/prop-types */
export default function Friend({ friend }) {
    const { name, email, address } = friend;
    const { street, suite, city, zipcode, geo } = address;

    return (
        <div className="box">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Address: {street}, {suite}, {city}, {zipcode}</p>
            <p>Latitude: {geo.lat}, Longitude: {geo.lng}</p>
        </div>
    );
}
