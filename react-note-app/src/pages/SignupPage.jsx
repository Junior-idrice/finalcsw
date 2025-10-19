import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../axiosConfig';

const SignupPage = ({ setIsAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.password2) {
            toast.error('Passwords do not match');
            return;
        }

        setLoading(true);

        try {
            console.log("POST to:", api.defaults.baseURL + 'auth/register/');
            const response = await api.post('auth/register/', formData);

            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            setIsAuthenticated(true);
            toast.success('Registration successful!');
            navigate('/');
        } catch (error) {
            const errors = error.response?.data;
            if (errors) {
                Object.keys(errors).forEach(key => {
                    if (Array.isArray(errors[key])) {
                        errors[key].forEach(msg => toast.error(`${key}: ${msg}`));
                    } else {
                        toast.error(`${key}: ${errors[key]}`);
                    }
                });
            } else {
                toast.error('Registration failed');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                backgroundColor: '#f8f9fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '450px',
                }}
            >
                <div
                    className="card shadow"
                    style={{
                        border: 'none',
                        borderRadius: '10px',
                        width: '100%',
                    }}
                >
                    <div className="card-body p-5">
                        <h2
                            className="text-center mb-3"
                            style={{ fontWeight: 'bold', color: '#333' }}
                        >
                            Create Account
                        </h2>
                        <p className="text-center text-muted mb-4">
                            Sign up to start taking your notes
                        </p>

                   
                        <form onSubmit={handleSubmit} style={{  marginLeft: 'auto',marginRight: 'auto', width:'100%' }}>
                            <div className="mb-3">
                                <label className="form-label" style={{ fontWeight: '500' }}>
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control form-control-lg"
                                    placeholder="Choose a username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                    style={{ borderRadius: '8px', width: '105%' }}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" style={{ fontWeight: '500' }}>
                                    Email <span className="text-muted">(optional)</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{ borderRadius: '8px', width: '105%' }}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" style={{ fontWeight: '500' }}>
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control form-control-lg"
                                    placeholder="Create a password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    style={{ borderRadius: '8px', width: '105%' }}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label" style={{ fontWeight: '500' }}>
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="password2"
                                    className="form-control form-control-lg"
                                    placeholder="Confirm your password"
                                    value={formData.password2}
                                    onChange={handleChange}
                                    required
                                    style={{ borderRadius: '8px', width: '105%' }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100 btn-lg"
                                disabled={loading}
                                style={{
                                    borderRadius: '8px',
                                    fontWeight: '500',
                                    padding: '12px',
                                    width: '105%',
                                }}
                            >
                                {loading ? (
                                    <>
                                        <span
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                        Creating account...
                                    </>
                                ) : (
                                    'Sign Up'
                                )}
                            </button>
                        </form>

                        <div className="text-center mt-4">
                            <p className="text-muted mb-0">
                                Already have an account?{' '}
                                <Link
                                    to="/login"
                                    style={{
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                    }}
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
