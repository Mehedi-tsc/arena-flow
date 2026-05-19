"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";

import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({

            email,
            password,
            callbackURL: '/',

        });
        if (data) {
            toast.success('Login Succesfull')
        } else if (error) {
            toast.error(error.message)
        }

    };

    const HandlesignIn = async () => {

        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: '/',

        });



    };
    return (
        <div className="my-12">
            <div className="bg-gray-200 w-10/12 md:w-6/12 lg:w-4/12 mx-auto shadow-sm rounded-xl p-10">
                <div>
                    <h2 className="text-center font-bold text-2xl my-3">Welcome Back</h2>
                    <p className="text-sm text-center">Login to your ArenaFlow Account</p>
                    
                </div>
                <hr className="text-gray-300 my-6" />
                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 6 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[a-z]/.test(value)) {
                                return "Password must contain at least one lowercase letter";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 6 characters with 1 uppercase and 1 lowercase</Description>
                        <FieldError />
                    </TextField>
                    <div className="">
                        <Button className={'w-full py-5'} type="submit">
                            <Check />
                            Login
                        </Button>

                    </div>
                </Form>
                <div className="text-center">

                    <p>Or </p>

                </div>
                <button onClick={HandlesignIn} className="mt-3 w-full btn btn-outline rounded-full"><FaGoogle /> Sign in with Google</button>
                <p className="text-center mt-2">Don&apos;t have an account? <Link href={'/register'} className="font-medium"> Register</Link> free</p>
            </div>

        </div>
    );
};

export default LoginPage;