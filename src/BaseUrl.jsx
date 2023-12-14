let baseUrl;

if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://book-your-stay.onrender.com/user';
} else {
    baseUrl = 'http://localhost:5600/user/';
}

export default baseUrl;
