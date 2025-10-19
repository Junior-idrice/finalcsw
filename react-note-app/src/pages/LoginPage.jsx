import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../axiosConfig';

const LoginPage = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            console.log("POST to:", api.defaults.baseURL + 'auth/login/');
            const response = await api.post('auth/login/', { username, password });

            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            localStorage.setItem('user', JSON.stringify({ username }));

            setIsAuthenticated(true);
            toast.success('Login successful!');
            navigate('/');
        } catch (error) {
            toast.error(error.response?.data?.detail || 'Login failed');
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
                            Welcome Back
                        </h2>
                        <p className="text-center text-muted mb-4">
                            Login to access your noteBooks
                        </p>

                    
                        <form onSubmit={handleSubmit} style={{ marginLeft: 'auto',marginRight: 'auto', width:'100%' }}>
                            <div className="mb-3">
                                <label className="form-label" style={{ fontWeight: '500' }}>
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    style={{ borderRadius: '8px', width: '105%' }}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label" style={{ fontWeight: '500' }}>
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
                                        Logging in...
                                    </>
                                ) : (
                                    'Login'
                                )}
                            </button>
                        </form>

                        <div className="text-center mt-4">
                            <p className="text-muted mb-0">
                                Don’t have an account?{' '}
                                <Link
                                    to="/signup"
                                    style={{
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                    }}
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
