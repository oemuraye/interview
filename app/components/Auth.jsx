"use client";
import { useState } from "react";
import Image from 'next/image'
import loginImg from '../../utils/img/signIn_img.jpg'
import Link from 'next/link'
import '../globals.css'

const initialState = {
    email: '',
    password: ''
}
const Auth = () => {
    const [formData, setFormData] = useState(initialState);
    const [formError, setFormError] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        setFormError([]);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        setFormError([]);
        let errors = [];

        if (!formData.email) {
            errors.push("Please fill email form field");
        }
        if (!formData.password) {
            errors.push("Please fill in password form field");
        }

        setFormError(errors);
        if (errors.length > 0) {
            return;
        } else {
            await sendInfo(formData);
        }
    };

    const sendInfo = async (formInfo) => {
        console.log(formInfo);
        try {
            const request = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formInfo),
            });
            const response = await request.json();

            setFormData(initialState);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    if (formError) {
        setTimeout(() => {
            setFormError([]);
        }, [20000]);
    }

  return (
    <main className="form-page">
        <section className="row">
            <div className="col-md-4 col-sm-12 d-flex justify-content-center">
                <div className="d-flex flex-column gap-3 mt-5">
                    <h2>We've Missed you</h2>
                    <p className="info">Kindly signin and get first access to the very best, community and unlock more opportunities.</p>
                    <form onSubmit={handleSubmit} >
                        {formError.length > 0 && (<div className="text-white text-center my-2 px-4">
                            <div className='bg-danger rounded my-1 p-1'>{formError[0]}</div>
                        </div>)}
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input name="email" onChange={handleChange} type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Password</label>
                            <input name="password" onChange={handleChange} type="text" className="form-control" />
                        </div>
                        <button className="form-btn w-100"> Login </button>
                    </form>
                    <Link className='link' href="">Forgot username or password?</Link>
                    <p>Don't have an account? <Link href="" className="sign-up"> Sign up</Link> </p>
                </div>
            </div>
            <div className="col-md-8 col-sm-12 d-none d-md-block">
                <Image src={loginImg} alt="login-img" className="img-fluid" width="100%" height="100vh" />
            </div>
        </section>
    </main>
  )
}

export default Auth