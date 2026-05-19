"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
    const router = useRouter()
    const onSubmit = async(e) => {
        
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.value;
        const password = e.target.password.value;

        
        
        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
            
        });
        if(data){
            toast.success('Registration Succesfull')
            router.push('/login')
        }else if(error){
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
        <div className=" my-5">
            <div className="bg-gray-200 w-10/12 md:w-6/12 lg:w-4/12 mx-auto shadow-sm rounded-xl p-10">
                <h2 className="text-center font-bold text-2xl my-3">Register Your Account</h2>
                
                <hr className="text-gray-300 my-6" />
                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"

                    >
                        <Label>Name</Label>
                        <Input placeholder="Enter your Name" />
                        <FieldError />
                    </TextField>
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
                        name="image"
                        type="text"

                    >
                        <Label>Photo URL</Label>
                        <Input placeholder="Enter your Photo URL" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={6}
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
                                return "Password must contain at least one lowercase";
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
                        <Button className={'w-full py-6'} type="submit">
                            <Check />
                            Register
                        </Button>

                    </div>
                </Form>
                <button onClick={HandlesignIn} className="mt-3 w-full btn btn-outline rounded-full"><FaGoogle/> Sign in with Google</button>
                <p className="text-center mt-2">Already have an account? <Link href={'/login'} className="font-medium"> Login</Link></p>
            </div>

        </div>
    );
};

export default RegisterPage;
