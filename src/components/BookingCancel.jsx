"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";

export function BookingCanel({ booking }) {
    const handelCancel = async () => {
        const {data: bookingData} = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/bookings/${booking._id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${bookingData.token}`
            }
        })
        const data = await res.json()
        if(data){
            toast.success("Booking Cancel Succesfully")
        }
        window.location.reload();
    }

    return (
        <AlertDialog>
            <Button className="bg-red-500 hover:bg-red-600 transition duration-300 text-white px-8 py-8 rounded-xl font-semibold text-xl">
                Cancel Booking
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading> Confirm Cancel Booking </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently Cancel <strong>{booking.facilityName}</strong> booking. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>

                            <Button onClick={handelCancel} slot="close" className="bg-red-500 hover:bg-red-600 transition duration-300 text-white px-8 py-8 rounded-xl font-semibold text-xl">
                                Cancel
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}