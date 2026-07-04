import  { useState } from 'react';

function UserForm() {
  // 1. Create a state object to store all form data
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // 2. Handle changes when the user types
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from reloading
    console.log('Submitted Data:', formData);
  };

    return (
      <div className="flex min-h-screen items-start justify-center pt-20 px-4">
        <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input 
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all" 
              type="text" 
              name="name"  
              value={formData.name} 
              onChange={handleChange} 
              required 
              placeholder="Enter Name"
            />
          </div>
       
          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input 
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all" 
              type="email"  
              name="email" 
              value={formData.email}  
              onChange={handleChange}  
              required 
              placeholder="Enter email"
            />
          </div>
       
          {/* Submit Button */}
          <button 
            className="w-full sm:w-auto py-2 px-6 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-md shadow-sm transition-colors mt-2" 
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
}

export default UserForm;