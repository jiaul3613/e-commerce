import  { useState } from 'react';


export default function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  // Updates fields dynamically when users type
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validates form input rules
  const validateForm = () => {
    let localErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.username.trim()) {
      localErrors.username = 'Username is required';
    }
    if (!formData.email) {
      localErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      localErrors.email = 'Invalid email address';
    }
    if (!formData.password) {
      localErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      localErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      localErrors.confirmPassword = 'Passwords do not match';
    }

    return localErrors;
  };

  // Handles data payload on form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setIsSubmitted(true);
      console.log('User Payload Registered:', formData);
      // Integrate Axios or Fetch POST request to backend API here
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form} noValidate>
        <h2>Create an Account</h2>
        
        {isSubmitted && <div style={styles.success}>Registration successful!</div>}

        <div style={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={errors.username ? styles.inputError : styles.input}
          />
          {errors.username && <span style={styles.errorText}>{errors.username}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={errors.email ? styles.inputError : styles.input}
          />
          {errors.email && <span style={styles.errorText}>{errors.email}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={errors.password ? styles.inputError : styles.input}
          />
          {errors.password && <span style={styles.errorText}>{errors.password}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={errors.confirmPassword ? styles.inputError : styles.input}
          />
          {errors.confirmPassword && <span style={styles.errorText}>{errors.confirmPassword}</span>}
        </div>

        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
    </div>
  );
}

// Basic CSS-in-JS layout objects
const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',  fontFamily: 'Arial, sans-serif' },
  form: { padding: '30px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' },
  inputGroup: { marginBottom: '15px', display: 'flex', flexDirection: 'column' },
  input: { padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', marginTop: '5px' },
  inputError: { padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ff4d4d', marginTop: '5px' },
  errorText: { color: '#ff4d4d', fontSize: '13px', marginTop: '5px' },
  success: { color: '#2b9348', marginBottom: '15px', fontWeight: 'bold' },
  button: { width: '100%', padding: '12px', fontSize: '16px', backgroundColor: '#4338ca', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }
};
