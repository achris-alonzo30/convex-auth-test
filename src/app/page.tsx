import { OAuth } from "@/components/OAuth";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";

export default function Home() {
  return (
    <Card>
      <CardHeader>
        Test
      </CardHeader>
      <CardBody>
        <OAuth />
      </CardBody>
    </Card>
  );
}
