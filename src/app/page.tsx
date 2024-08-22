
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { SignInWithGithub } from '../components/SignInWithGithub';

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
