"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";

export function DeleteFacilities({ facility }) {
    const handelDelete = async () => {
        const {data:deleteData} = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities/${facility._id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${deleteData.token}`
            }
        })
        const data = await res.json()
        if (data) {
            toast.success('Delete facility succesfully')
        }
        setTimeout(function(){
            window.location.reload();
        }, 2000)
    }

    return (
        <AlertDialog>
            <Button className="bg-red-500 hover:bg-red-600 transition duration-300 text-white px-8 py-8 rounded-xl font-semibold text-xl min-w-32">
                Delete
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading> Confirm Delete Facility </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{facility.facilityName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>

                            <Button onClick={handelDelete} slot="close" className="bg-red-500 hover:bg-red-600 transition duration-300 text-white px-8 py-8 rounded-xl font-semibold text-xl">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}