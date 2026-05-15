"use client";
import { ListBox, TextField , Select , TextArea,  } from '@heroui/react'

import {Button, FieldError, Input, Label, Modal, Surface} from "@heroui/react";



import { CgProfile } from "react-icons/cg";
import { FiEdit3 } from "react-icons/fi";


export function WithForm({Data}) {
  // console.log(Data)
    const onsubmit = async (e) => {
   e.preventDefault()
   const formData = new FormData(e.currentTarget);
   const Datas  =  Object.fromEntries(formData.entries())
  //  console.log(Datas)

   const res = await fetch(`http://localhost:5000/destination/${Data._id}` , {
    method : 'PATCH',
    headers : {
        'content-type' : 'application/json'
    },
    body : JSON.stringify(Datas)
   })
   const result = await res.json()
   
  
   console.log(result)
    }
  return (
    <Modal>
          <Button variant="outline">
            <FiEdit3 />

            Edit
        </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CgProfile />
              </Modal.Icon>
              <Modal.Heading>Edit Destinations</Modal.Heading>
             
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                 <form
                             onSubmit={onsubmit}
                            className="p-10 space-y-8"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {/* Destination Name */}
                              <div className="md:col-span-2">
                                <TextField defaultValue={Data.destinationName} name="destinationName" isRequired>
                                  <Label></Label>
                                  <Input placeholder="Bali Paradise" className="rounded-2xl" />
                                  <FieldError />
                                </TextField>
                              </div>
                
                              {/* Country */}
                              <TextField defaultValue={Data.country} name="country" isRequired>
                                <Label></Label>
                                <Input placeholder="Indonesia" className="rounded-2xl" />
                                <FieldError />
                              </TextField>
                
                              {/* Category - Updated Select Component */}
                              <div>
                                <Select
                                  name="category"
                                  defaultValue={Data.category}
                                  isRequired
                                  className="w-full"
                                  placeholder="Select category"
                                >
                                  <Label></Label>
                                  <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                  </Select.Trigger>
                                  <Select.Popover>
                                    <ListBox>
                                      <ListBox.Item id="Beach" textValue="Beach">
                                        Beach
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Mountain" textValue="Mountain">
                                        Mountain
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="City" textValue="City">
                                        City
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Adventure" textValue="Adventure">
                                        Adventure
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Cultural" textValue="Cultural">
                                        Cultural
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Luxury" textValue="Luxury">
                                        Luxury
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                    </ListBox>
                                  </Select.Popover>
                                </Select>
                              </div>
                
                              {/* Price */}
                              <TextField name="price" defaultValue={Data.price} type="number" isRequired>
                                <Label>Price (USD)</Label>
                                <Input
                                  type="number"
                                  placeholder="1299"
                                  className="rounded-2xl"
                                />
                                <FieldError />
                              </TextField>
                
                              {/* Duration */}
                              <TextField defaultValue={Data.duration} name="duration" isRequired>
                                <Label>Duration</Label>
                                <Input
                                  placeholder="7 Days / 6 Nights"
                                  className="rounded-2xl"
                                />
                                <FieldError />
                              </TextField>
                
                              {/* Departure Date */}
                              <div className="md:col-span-2">
                                <TextField defaultValue={Data.departureDate} name="departureDate" type="date" isRequired>
                                  <Label>Departure Date</Label>
                                  <Input type="date" className="rounded-2xl" />
                                  <FieldError />
                                </TextField>
                              </div>
                
                              {/* Image URL - Removed preview */}
                              <div className="md:col-span-2">
                                <TextField defaultValue={Data.imageUrl} name="imageUrl" isRequired>
                                  <Label>Image URL</Label>
                                  <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="rounded-2xl"
                                  />
                                  <FieldError />
                                </TextField>
                              </div>
                
                              {/* Description */}
                              <div className="md:col-span-2">
                                <TextField defaultValue ={Data.description}  name="description" isRequired>
                                  <Label></Label>
                                  <TextArea
                                    placeholder="Describe the travel experience..."
                                    className="rounded-3xl"
                                  />
                                  <FieldError />
                                </TextField>
                              </div>
                            </div>
                
                           <Modal.Footer>
                          <Button slot="close" variant="secondary">
                          Cancel
                           </Button>
                            <Button type='submit' slot="close">Save</Button>
                            </Modal.Footer>

                          </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}