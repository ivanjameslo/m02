import Image from "next/image";
import StartingPage from "../components/ui/startingPage";
import NewEmployee from "@/components/ui/newEmployee";
import Form from "@/components/video/Form";
import { create } from "./actions/todoActions";
import Input from "@/components/video/Input";
import Button from "@/components/video/Button";

export default function Home() {
  return (
    <main>
      <Form action={create} className="">
        <Input name="emp_num" type="Int" placeholder="Employee Number" />
        <Input name="firstName" type="text" placeholder="First Name" />
        <Input name="middleName" type="text" placeholder="Middle Name" />
        <Input name="lastName" type="text" placeholder="Last Name" />
        <Input name="address_line" type="text" placeholder="Address Line" />
        <Input name="brgy" type="text" placeholder="Barangay" />
        <Input name="province" type="text" placeholder="Province" />
        <Input name="country" type="text" placeholder="Country" />
        <Input name="zip_code" type="Int" placeholder="Zip Code" />
        <Button type="submit" text="Add"/>
      </Form>
    </main>
  );
}
