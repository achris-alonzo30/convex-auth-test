"use client";

import { Button } from "@nextui-org/button"
import { useAuthActions } from "@convex-dev/auth/react";
import { FaGithub } from "react-icons/fa";
export const SignInWithGithub = () => {
    const { signIn} = useAuthActions();
    return (
        <Button 
            className="flex items-center gap-2"
            onClick={() => void signIn("github")}
        >
            <FaGithub className="size-4" />
            Sign in with GitHub
        </Button>
    )
}