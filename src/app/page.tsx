"use client"
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { SignInWithGithub } from '../components/oauth/SignInWithGithub';
import { SignInWithGoogle } from "@/components/oauth/SignInWithGoogle";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { SignInWithEmail } from "@/components/SignInWithEmail";

export default function Home() {
  return (
    <Card className="h-full w-full max-w-md mx-auto">
      <CardHeader>
        <Unauthenticated>
          You need to get authenticated to continue
        </Unauthenticated>
        <Authenticated>
          You are authenticated
        </Authenticated>
      </CardHeader>
      <CardBody className="flex flex-col gap-2">

        <Unauthenticated>
          <SignInWithGithub />
          <SignInWithGoogle />
          <SignInWithEmail />
        </Unauthenticated>

      </CardBody>
    </Card>
  );
}
