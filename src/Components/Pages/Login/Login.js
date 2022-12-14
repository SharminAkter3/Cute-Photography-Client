import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import { SpinnerCircular } from 'spinners-react/lib/esm/SpinnerCircular';

const Login = () => {
    const { signIn, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login');

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (loading) {
            return <div><SpinnerCircular enabled={true} /></div>
        }

        signIn(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user?.email
                }

                console.log(currentUser);

                //get jwt token
                fetch('https://service-assignment-server-liart.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem(`cute-token`, data.token)
                        form.reset();
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <div className="hero my-5 p-10 bg-base-100 shadow-2xl rounded-lg">
                <div className="hero-content grid md:grid-cols-2 gap-5 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-full h-3/5' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center p-5'>New to Cute Photography <Link className='text-blue-700 font-bold' to='/signup'>Sing Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;