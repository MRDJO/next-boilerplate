"use client"
import React, { useState, forwardRef } from 'react';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Input } from './input';
import {EyeIcon, EyeOffIcon} from "lucide-react";

export interface PasswordInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    showPasswordToggle?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ className, showPasswordToggle = true, placeholder, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState<boolean>(false);

        const togglePasswordVisibility = () => {
            setShowPassword((prev) => !prev);

        };
        return (
            <div className="relative flex items-center">
                <Input
                    type={showPassword ? 'text' : 'password'}
                    ref={ref}
                    placeholder={placeholder}
                    className={`border rounded-sm flex-1 p-2 ${className}`}
                    aria-label={placeholder}
                    {...props}
                />
                {showPasswordToggle && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-2"
                        aria-label="Afficher/Masquer le mot de passe"
                    >
                        {showPassword ? <EyeOffIcon className="text-primary" height={15} width={15}  /> : <EyeIcon className="text-primary" height={15} width={15} />}
                    </button>
                )}
            </div>
        );
    }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;