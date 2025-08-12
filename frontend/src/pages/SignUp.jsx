import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer} from 'react-toastify'
import { handleError, handleSuccess } from '../utils';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copy={...formData};
    copy[name]=value;
    setFormData(copy);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    const {username, email, password}=formData;
    if(!username || !password || !email) {
      return handleError('All fields are required!!')
    }
    try {
      const url='http://localhost:8000/users/register';
      const response=await fetch(url, {
         method: "POST",
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
         body: JSON.stringify(formData)
      });
      const result=await response.json();
      console.log(result);
    } catch(err) {
      handleError('Something went wrong while registering!')
    }     
    
    handleSuccess('Signup successful!');
  };

  return (
    <div className="w-100 max-w-md">
      <form 
      onSubmit={handleSubmit} 
      className="rounded-lg p-8 mb-4 glass">
        <h2 className="text-3xl font-bold text-center text-darkpurple-50 mb-4">Create Account</h2>
        
        <div className="mb-4">
          <label className="block text-md font-semibold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow border rounded w-full p-4 focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>

        <div className="mb-4">
          <label className="block text-md font-semibold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow border rounded w-full p-4 focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=""
          />
        </div>

        <div className="mb-6">
          <label className="block text-md font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow border rounded w-full p-4 focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder=""
          />
        </div>

        <div className="flexAll flex-col">
          <button
            className="text-xl w-full hover:bg-lightyellow-500 bg-dullcorrect text-darkpurple-800 font-bold p-4 rounded-lg focus:outline-none focus:shadow-outline my-3"
            type="submit"
          >Get Started
          </button>
          <p className='m-3'>Already have an account ?  
            <Link 
            className='m-3 focus:* text-darkpurple-200 underline hover:text-darkpurple-400 focus:text-darkpurple-400' 
            to={'/login'}>Login</Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
