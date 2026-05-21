'use client'

import {  FloppyDisk } from "@gravity-ui/icons";
import { Button,  FieldError, Fieldset, Form, Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

export function EditFacilities({facility}) {
    const router = useRouter()
    const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const facilitiesData = Object.fromEntries(formData.entries())
    
    
    
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities/${facility._id}`,{
      method:"PATCH",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(facilitiesData),
            
    })
    const result = await res.json()
    
    if(result){
        toast.success("Edit facility succesfuly")
        
        router.push('/manage-facilities')
    }

    return result;
  };
    return (
        <Modal>
            <Button className="bg-green-500 hover:bg-green-600 transition duration-300 text-white px-8 py-8 rounded-xl font-semibold text-xl min-w-32">Edit</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                           
                            <Modal.Heading>Edit facilities</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-1">
                            <Surface className="w-full">
                                <Form onSubmit={onSubmit}>
                                    <Fieldset className="w-full">
                                       
                                        <Fieldset.Group>
                                            <div className="flex flex-col lg:flex-row lg:gap-5">
                                                <div className="space-y-2">
                                                    <TextField
                                                        isRequired
                                                        name="facilityName"
                                                        defaultValue={facility.facilityName}

                                                    >
                                                        <Label>Facility Name</Label>
                                                        <Input  placeholder="Enter Facility Name" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>
                                                    <TextField
                                                        isRequired
                                                        name="image"
                                                        defaultValue={facility.image}

                                                    >
                                                        <Label>Image URL</Label>
                                                        <Input placeholder="Enter Image URL" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>
                                                    <TextField
                                                        isRequired
                                                        name="price"
                                                        defaultValue={facility.price}

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
                                                        defaultValue={facility.facilityType}

                                                    >
                                                        <Label>Facility Type</Label>
                                                        <Input placeholder="Enter Facility Type" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>
                                                    <TextField
                                                        isRequired
                                                        name="location"
                                                        defaultValue={facility.location}

                                                    >
                                                        <Label>Location</Label>
                                                        <Input placeholder="Enter location" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>
                                                    <TextField
                                                        isRequired
                                                        name="capacity"
                                                        defaultValue={facility.capacity}

                                                    >
                                                        <Label>Capacity</Label>
                                                        <Input placeholder="Enter Your Capacity" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>
                                                </div>
                                            </div>
                                            <TextField isRequired name="timeSlot" type="text" defaultValue={facility.timeSlot}>
                                                <Label>Available Time Slots</Label>
                                                <Input placeholder="Enter The Available Time Slots" variant="secondary" />
                                                <FieldError />
                                            </TextField>
                                            <TextField
                                                isRequired
                                                name="description"
                                                defaultValue={facility.description}

                                            >
                                                <Label>Description</Label>
                                                <TextArea placeholder="Tell us about your facility..." variant="secondary" />

                                                <FieldError />
                                            </TextField>
                                        </Fieldset.Group>
                                        <Fieldset.Actions>
                                            <Button type="submit">
                                                <FloppyDisk />
                                                Save
                                            </Button>

                                        </Fieldset.Actions>
                                    </Fieldset>
                                </Form>
                            </Surface>
                        </Modal.Body>
                        
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}