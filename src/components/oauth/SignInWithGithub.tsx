"use client";

import { Button } from "@nextui-org/button"
import { useAuthActions } from "@convex-dev/auth/react";
import { FaGithub } from "react-icons/fa";
export const SignInWithGithub = () => {
    const { signIn} = useAuthActions();
    return (
        <Button 
            size="sm"
            radius="sm"
            variant="light"
            className="flex items-center gap-2"
            onClick={() => void signIn("github")}
            startContent={<FaGithub className="size-4" />}
        >
            Sign in with Github
        </Button>
    )
}