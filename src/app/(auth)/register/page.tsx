'use client'
import { signIn, signUp } from '@/lib/auth-client';
import { Button, Card, CardContent, CardFooter, CardHeader, Form, Input } from '@heroui/react';
import { FcGoogle } from "react-icons/fc";
import { Lock, Mail, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    };
    // console.log("Register Data", data);
    if (data.password !== data.confirmPassword) {
      toast.error("Password Do not Match")
      return;
    }

    const {data: user, error}= await signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
        // confirmPassword: data.confirmPassword,
      }
    );
    if (error) {
      toast.error("Register Failed");
      return;
    };
    if (user) {
      toast.success("Registration Successful");
      router.push("/login")
    }
    
    console.log(user, "User");
  }
  // const handleGoogleRegister = async () => {
  //   await signIn.social({
  //     provider: "google",
  //     callbackURL: '/',
  //   })
  // }

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 bg-background">
      <Card className="w-full max-w-md shadow-xl border border-default-100 p-6">
        
        {/* header */}
        <CardHeader className="flex flex-col gap-1 items-center justify-center pb-6 pt-0">
          <h1 className="text-2xl font-black tracking-tight text-primary">
            BookVerse
          </h1>
          <p className="text-xl font-bold text-foreground/80 mt-1">
            Create Your Account
          </p>
          <p className="text-xs text-default-400 font-medium">
            Join us to discover and borrow thousands of books
          </p>
        </CardHeader>

        {/* form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4.5 w-full">
          
          {/* name */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-default-700">
              Name <span className="text-danger">*</span>
            </label>
            <div className="relative flex items-center h-11 w-full rounded-xl border border-default-200 hover:border-default-400 focus-within:!border-primary transition-all px-3 bg-transparent">
              <User className="text-default-400 flex-shrink-0 mr-2.5" size={18} />
              <input
                required
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full h-full bg-transparent text-sm outline-none placeholder:text-default-400 text-foreground"
              />
            </div>
          </div>

          {/* email */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-default-700">
              Email <span className="text-danger">*</span>
            </label>
            <div className="relative flex items-center h-11 w-full rounded-xl border border-default-200 hover:border-default-400 focus-within:!border-primary transition-all px-3 bg-transparent">
              <Mail className="text-default-400 flex-shrink-0 mr-2.5" size={18} />
              <input
                required
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full h-full bg-transparent text-sm outline-none placeholder:text-default-400 text-foreground"
              />
            </div>
          </div>

          {/* password */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-default-700">
              Password <span className="text-danger">*</span>
            </label>
            <div className="relative flex items-center h-11 w-full rounded-xl border border-default-200 hover:border-default-400 focus-within:!border-primary transition-all px-3 bg-transparent">
              <Lock className="text-default-400 flex-shrink-0 mr-2.5" size={18} />
              <input
                required
                name="password"
                type= {showPassword ? "text" : "password"}
                placeholder="Enter a strong password"
                className="w-full h-full bg-transparent text-sm outline-none placeholder:text-default-400 text-foreground pr-7"
              />
              <button 
                className="absolute right-3 focus:outline-none text-default-400 hover:text-default-600 transition p-1" 
                type="button"
                aria-label="Toggle password visibility"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
              </button>
            </div>
          </div>

          {/* confirm password */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-default-700">
              Confirm Password <span className="text-danger">*</span>
            </label>
            <div className="relative flex items-center h-11 w-full rounded-xl border border-default-200 hover:border-default-400 focus-within:!border-primary transition-all px-3 bg-transparent">
              <Lock className="text-default-400 flex-shrink-0 mr-2.5" size={18} />
              <input
                required
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                className="w-full h-full bg-transparent text-sm outline-none placeholder:text-default-400 text-foreground pr-7"
              />
              <button 
                className="absolute right-3 focus:outline-none text-default-400 hover:text-default-600 transition p-1" 
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                aria-label="Toggle password visibility"
              >
                {showConfirmPassword ? <FaEyeSlash size={16}/> : <FaEye size={16} />}
              </button>
            </div>
          </div>

          {/* register btn */}
          <Button 
            type="submit"
            size="lg" 
            className="w-full font-bold shadow-md mt-3 h-11 transition-transform active:scale-[0.99]"
          >
            Register
          </Button>
        </form>

        {/* <div className="mt-3">
          <Button
            variant='outline'
            className="w-full h-11"
            onClick={handleGoogleRegister}
            >
             <FcGoogle/> Continue with Google
          </Button>
        </div> */}

        {/* footer link */}
        <CardFooter className="flex justify-center pt-6 pb-0 px-0">
          <p className="text-sm text-default-500 font-medium">
            Already have an account?{" "}
            <Link 
              href="/login" 
              className="text-primary hover:underline font-bold transition-colors"
            >
              Login
            </Link>
          </p>
        </CardFooter>

      </Card>
    </div>
  );
};

export default RegisterPage;