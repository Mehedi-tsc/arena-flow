"use client";
import { authClient } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const AddFacilitiesPage = () => {
  const { data: session } = authClient.useSession()
  const ownerEmail = session?.user?.email
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const facilitiesData = {...Object.fromEntries(formData.entries()), ownerEmail}
    // facilitiesData.ownerEmail= ownerEmail;
    
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities`,{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(facilitiesData),
            
    })
    const result = await res.json()
    router.push('/all-facilities')
    return result;
  };
  return (
    <div className=" rounded-2xl bg-surface p-6 my-6 max-w-5xl mx-auto shadow-sm">
      <Surface className="w-full min-w-95">
        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <Fieldset.Legend className="text-3xl">Add Facility</Fieldset.Legend>
            <Description>Publish your facility and get booked by sports enthusiasts.</Description>
            <Fieldset.Group>
              <div className="flex flex-col lg:flex-row lg:gap-10">
                <div className="space-y-2">
                  <TextField
                    isRequired
                    name="facilityName"

                  >
                    <Label>Facility Name</Label>
                    <Input placeholder="Enter Facility Name" variant="secondary" />
                    <FieldError />
                  </TextField>
                  <TextField
                    isRequired
                    name="image"

                  >
                    <Label>Image URL</Label>
                    <Input placeholder="Enter Image URL" variant="secondary" />
                    <FieldError />
                  </TextField>
                  <TextField
                    isRequired
                    name="price"

                  >
                    <Label>Price Per Hour ($)</Label>
                    <Input placeholder="Enter Your Price in Doller" variant="secondary" />
                    <FieldError />
                  </TextField>
                </div>
                <div className="space-y-3">
                  <TextField
                    isRequired
                    name="facilityType"

                  >
                    <Label>Facility Type</Label>
                    <Input placeholder="Enter Facility Type" variant="secondary" />
                    <FieldError />
                  </TextField>
                  <TextField
                    isRequired
                    name="location"

                  >
                    <Label>Location</Label>
                    <Input placeholder="Enter location" variant="secondary" />
                    <FieldError />
                  </TextField>
                  <TextField
                    isRequired
                    name="capacity"

                  >
                    <Label>Capacity</Label>
                    <Input placeholder="Enter Your Capacity" variant="secondary" />
                    <FieldError />
                  </TextField>
                </div>
              </div>
              <TextField isRequired name="timeSlot" type="text">
                <Label>Available Time Slots</Label>
                <Input placeholder="Enter The Available Time Slots" variant="secondary" />
                <FieldError />
              </TextField>
              <TextField
                isRequired
                name="description"

              >
                <Label>Description</Label>
                <TextArea placeholder="Tell us about your facility..." variant="secondary" />

                <FieldError />
              </TextField>
            </Fieldset.Group>
            <Fieldset.Actions>
              <Button type="submit">
                <FloppyDisk />
                Add Facility
              </Button>

            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </Surface>
    </div>
  );
};

export default AddFacilitiesPage;