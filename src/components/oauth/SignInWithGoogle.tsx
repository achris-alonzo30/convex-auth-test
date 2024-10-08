"use client";

import { FaGoogle } from "react-icons/fa";
import { Button } from "@nextui-org/button";
import { useAuthActions } from "@convex-dev/auth/react";

export const SignInWithGoogle = () => {
    const { signIn} = useAuthActions();
    return (
        <Button 
            size="sm"
            radius="sm"
            variant="light"
            className="flex items-center gap-2"
            onClick={() => void signIn("google")}
            startContent={<FaGoogle className="size-4" />}
        >
            Sign in with Google
        </Button>
    )
}