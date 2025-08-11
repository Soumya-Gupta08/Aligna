import { useState } from 'react'

function Login() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords don't match!");
          return;
        }
        // TODO: Add your signup logic here (e.g., API call)
        console.log('Signup data:', formData);
        alert('Signup successful!');
      };
    
      return (
        <div className="w-100 max-w-md h-100 mt-20">
          <form onSubmit={handleSubmit} className="rounded-lg p-8 mb-4 glass">
            <h2 className="text-3xl font-bold text-center text-darkpurple-50 mb-4">Login</h2>
    
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
                required
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
                required
              />
            </div>
    
            <div className="flexAll">
              <button
                className="text-xl w-full hover:bg-lightyellow-500 bg-dullcorrect text-darkpurple-800 font-bold p-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="submit"
              >Log In
              </button>
            </div>
          </form>
        </div>
      );
    };

export default Login
