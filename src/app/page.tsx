
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { SignInWithGithub } from '../components/oauth/SignInWithGithub';

export default function Home() {
  return (
    <Card>
      <CardHeader>
        Test
      </CardHeader>
      <CardBody>
        <SignInWithGithub />
      </CardBody>
    </Card>
  );
}
