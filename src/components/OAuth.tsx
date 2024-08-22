"use client";

import { Button } from "@nextui-org/button"
import { useAuthActions } from "@convex-dev/auth/react";

export const OAuth = () => {
    const { signIn} = useAuthActions();
    return (
        <Button onClick={() => void signIn("github")}>
            Sign in with GitHub
        </Button>
    )
}