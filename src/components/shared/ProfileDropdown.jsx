
'use client'
import { authClient } from "@/lib/auth-client";
import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";

import Link from "next/link";
import { useRouter } from "next/navigation";

const ProfileDropdown = () => {
  const { data: session } = authClient.useSession()
  const router = useRouter();
  const user = session?.user
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  }

  return (
    <div>
      <Dropdown>
        <Dropdown.Trigger className="rounded-full">
          <Avatar>
            <Avatar.Image
              referrerPolicy="no-referrer"
              alt={user.name}
              src={user.image}
            />
            <Avatar.Fallback delayMs={600}>{user.name.slice(0, 2)}</Avatar.Fallback>
          </Avatar>
        </Dropdown.Trigger>
        <Dropdown.Popover>
          <div className="px-3 pt-3 pb-1">
            <div className="flex items-center gap-2">
              <Avatar size="sm">
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt={user.name}
                  src={user.image}
                />
                <Avatar.Fallback delayMs={600}>{user.name.slice(0, 2)}</Avatar.Fallback>
              </Avatar>
              <div className="flex flex-col gap-0">
                <p className="text-sm leading-5 font-medium">{user.name}</p>
                <p className="text-xs leading-none text-muted">{user.email}</p>
              </div>
            </div>
          </div>
          <Dropdown.Menu>
            <Dropdown.Item id="my-bookings" textValue="My Bookings">
              <Link href={'/my-bookings'}><Label>My Bookings</Label></Link>
            </Dropdown.Item>
            <Dropdown.Item id="add-facility" textValue="Add Facility">
              <Link href={'/add-facility'}><Label>Add Facility</Label></Link>
            </Dropdown.Item>
            <Dropdown.Item id="manage-facilities" textValue="Manage My Facilities">
              <Link href={'/manage-facilities'}><Label>Manage My Facilities</Label></Link>
            </Dropdown.Item>

            <Dropdown.Item id="logout" textValue="Logout" variant="danger">
              <div onClick={handleLogout} className="flex w-full items-center justify-between gap-2">
                <Label >Log Out</Label>
                <ArrowRightFromSquare className="size-3.5 text-danger" />
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
};

export default ProfileDropdown;