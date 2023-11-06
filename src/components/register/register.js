import React, { useState } from 'react'
import logo from '../.././logo.svg';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const history = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phno: "",
        password: "",
        reEnterPassword: "",
        dob: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    // const register = () => {
    //     const { name, username, email, phno, password, reEnterPassword, dob } = user;
    //     if (
    //         name &&
    //         username &&
    //         email &&
    //         phno &&
    //         password &&
    //         reEnterPassword &&
    //         dob
    //     ) {
    //         if (password === reEnterPassword) {
    //             // Additional form validation can be added here (e.g., email format, phone number format).
    //             axios
    //                 .post("http://localhost:4000/register", user)
    //                 .then((res) => {
    //                     alert(res.data.message);
    //                     history("/login");
    //                 })
    //                 .catch((error) => {
    //                     setError("Registration failed. Please try again later.");
    //                 });
    //         } else {
    //             setError("Passwords do not match.");
    //         }
    //     } else {
    //         setError("Please fill in all required fields.");
    //     }
    // };

    const register = () => {
        const { name, username, email, phno, password, reEnterPassword, dob } = user;
        
        if (
          name &&
          username &&
          email &&
          phno &&
          password &&
          reEnterPassword &&
          dob
        ) {
          if (password === reEnterPassword) {
            // Additional form validation can be added here (e.g., email format, phone number format).
            axios
              .post("https://my-new-5a71.onrender.com/register", user)
              .then((res) => {
                alert(res.data.message);
                history("/login");
              })
              .catch((error) => {
                // Handle server-side errors here
                if (error.response) {
                  setError(error.response.data.message);
                } else {
                  setError("Registration failed. Please try again later.");
                }
              });
          } else {
            setError("Passwords do not match.");
          }
        } else {
          setError("Please fill in all required fields.");
        }
      };
      

    return (
        <div className='registration-container row' style={{ borderRadius: '10px' }}>
            <div className='logo col-lg-6 col-md-6 col-sm-12'><img style={{ borderRadius: '10px' }} src={logo} alt="logo" required /></div>
            <div className='reg-form col-lg-6 col-md-6 col-sm-12'>
                <form className='form' onSubmit={(e) => {
                    e.preventDefault(); // Prevent the default form submission behavior
                    register();
                }}>
                    <table className='mx-auto' style={{ borderRadius: '10px' }}>
                        <thead>
                            <tr>
                                <th colSpan={2}>
                                    <h3 className='text-center'>Register Yourself</h3>
                                    <p className='text-center'>& share what you write</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='p-1'><label className='form-label'>Name</label></td>
                                <td className='p-1'><input style={{ borderWidth: '3px' }} className='form-control rounded-1 ms-4' type="text" name='name' value={user.name} onChange={handleChange} required /></td>
                            </tr>
                            <tr>
                                <td className='p-1'><label className='form-label'>Username</label></td>
                                <td className='p-1'><input style={{ borderWidth: '3px' }} className='form-control rounded-1 ms-4' type="text" name='username' value={user.username} onChange={handleChange} required /></td>
                            </tr>
                            <tr>
                                <td className='p-1'><label className='form-label'>Email</label></td>
                                <td className='p-1'><input style={{ borderWidth: '3px' }} className='form-control rounded-1 ms-4' type="email" name='email' value={user.email} onChange={handleChange} required /></td>
                            </tr>
                            <tr>
                                <td className='p-1'><label className='form-label'>Phone Number</label></td>
                                <td className='p-1'><input style={{ borderWidth: '3px' }} className='form-control rounded-1 ms-4' type="tel" name='phno' value={user.phno} onChange={handleChange} required /></td>
                            </tr>
                            <tr>
                                <td className='p-1'><label className='form-label'>Password</label></td>
                                <td className='p-1'><input style={{ borderWidth: '3px' }} className='form-control rounded-1 ms-4' type="password" name='password' value={user.password} onChange={handleChange} required /></td>
                            </tr>
                            <tr>
                                <td className='p-1'><label className='form-label'>Confirm Password</label></td>
                                <td className='p-1'><input style={{ borderWidth: '3px' }} className='form-control rounded-1 ms-4' type="password" name='reEnterPassword' value={user.reEnterPassword} onChange={handleChange} required /></td>
                            </tr>
                            <tr>
                                <td className='p-1'><label className='form-label'>Date of birth</label></td>
                                <td className='p-1'><input style={{ borderWidth: '3px' }} className='form-control rounded-1 ms-4' type="date" name='dob' value={user.dob} onChange={handleChange} required /></td>
                            </tr>
                            <tr>
                                <td className="pt-4 pb-2 text-center" colSpan={2}>
                                    {error && <span className="alert alert-danger">{error}</span>}
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className='text-center pt-3' colSpan={2}>
                                    <Link className='ms-auto' to='/Login'><button className='btn btn-primary opacity-75'>Login</button></Link>
                                    <button onClick={register} type="submit" className='mx-3 btn btn-info opacity-75'>Register</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </form>
            </div>
        </div>
    );

};

export default Register;