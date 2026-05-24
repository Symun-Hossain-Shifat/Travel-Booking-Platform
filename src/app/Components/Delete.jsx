"use client";

import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";

export function  Deletealert ({Data}) {
    const DeleteHandle = async () => {
      const {data : tokendata } = await authClient.token() 
      console.log(tokendata)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${Data._id}` , {
        method : 'DELETE',
        headers : {
            'content-type' : 'application/json',
            authorization : `Bearer ${tokendata?.token}`
        }
    })
     const Datas = await res.json()
     console.log(Datas)
     redirect('/destinations')
    }
  return (
    <AlertDialog>
      <Button variant='danger'>
            <RiDeleteBin6Line />
            Delete
        </Button> 
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={DeleteHandle} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}