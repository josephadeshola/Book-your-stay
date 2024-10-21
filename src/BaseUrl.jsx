let baseUrl;

if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://hotel-management-kj53.onrender.com';

} else {
    baseUrl = 'http://localhost:5600';
}


export default baseUrl;
