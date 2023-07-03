import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { login } from "../../features/slices/authSlice";
import { useState } from "react";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    image: "",
  });
  console.log("🚀 ~ file: LoginForm.jsx:21 ~ LoginForm ~ formData:", formData);

  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mx-auto flex h-screen items-center justify-center p-4">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            STORE
          </Typography>
        </CardHeader>

        <CardBody className="flex flex-col gap-4">
          <Input
            name="email"
            label="Email"
            size="lg"
            type="email"
            value={formData.name}
            onChange={onChange}
          />
          <Input
            name="password"
            label="Password"
            size="lg"
            type="password"
            value={formData.password}
            onChange={onChange}
          />
          <Input
            name="image"
            label="Image Url"
            size="lg"
            type="text"
            value={formData.image}
            onChange={onChange}
          />
        </CardBody>

        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={() => dispatch(login(formData))}
          >
            Sign In
          </Button>

          <Typography variant="small" className="mt-6 flex justify-center">
            Image is optional (paste url for avatar )
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
