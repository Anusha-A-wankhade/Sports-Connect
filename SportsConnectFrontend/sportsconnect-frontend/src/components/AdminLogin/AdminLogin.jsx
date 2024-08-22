import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            // Fetch admins data from db.json
            const response = await axios.get('http://localhost:3001/admins', {
                params: {
                    username: username,
                    password: password
                }
            });

            const admin = response.data.find(admin => admin.username === username && admin.password === password);

            if (admin) {
                // Redirect to admin dashboard on successful login
                navigate('/admin-dashboard');
                alert("Logged in successfully.");
            } else {
                setErrorMessage('Invalid username or password');
            }
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message);
            setErrorMessage('An error occurred while trying to log in');
        }
    };

    return (
        <div className="admin-login">
            <h2>Admin Login</h2>
            <form onSubmit={handleLoginSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Login</button>
                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default AdminLogin;










// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './AdminLogin.css';

// const AdminLogin = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const navigate = useNavigate();

//     const handleLoginSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // Fetch admins data from db.json
//             const response = await axios.get('http://localhost:3001/admins', {
//                 params: {
//                     username: username,
//                     password: password
//                 }
//             });

//             const admin = response.data.find(admin => admin.username === username && admin.password === password);

//             if (admin) {
//                 // Redirect to admin dashboard on successful login
//                 navigate('/admin-dashboard');
//                 alert("Logged in successfully.");
//             } else {
//                 setErrorMessage('Invalid username or password');
//             }
//         } catch (error) {
//             console.error('Login error:', error.response ? error.response.data : error.message);
//             setErrorMessage('An error occurred while trying to log in');
//         }
//     };

//     return (
//         <div className="admin-login">
//             <h2>Admin Login</h2>
//             <form onSubmit={handleLoginSubmit}>
//                 <label>
//                     Username:
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Password:
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <button type="submit">Login</button>
//                 {errorMessage && <p className="error">{errorMessage}</p>}
//             </form>
//         </div>
//     );
// };

// export default AdminLogin;
