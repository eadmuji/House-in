import {
  Input,
  useToast,
  VStack,
  Modal, 
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure 
} from "@chakra-ui/react";

import { useState } from "react";
import { useHSrent } from "../house/rent";

const CreatePage = () => {
  const [newRentInfo, setNewRentInfo] = useState({
    name: "",
    HS_rent: "",
    water: "",
    electricity: ""
  });
  const toast = useToast();

  const { createRent } = useHSrent();

  const handleAddRent = async () => {
    const { success, message } = await createRent(newRentInfo);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewRentInfo({ name: "", HS_rent: "", water: "", electricity: "" });
  };

    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button onClick={onOpen} fontSize={30}>Create</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    <VStack spacing={4}>
            <Input
              placeholder="name"
              name="name"
              value={newRentInfo.name}
              onChange={(e) =>
                setNewRentInfo({ ...newRentInfo, name: e.target.value })
              }
            />
            <Input
              placeholder="Rent"
              name="HS_rent"
              type="number"
              value={newRentInfo.HS_rent}
              onChange={(e) =>
                setNewRentInfo({ ...newRentInfo, HS_rent: e.target.value })
              }
            />
            <Input
              placeholder="water"
              name="water"
              type="number"
              value={newRentInfo.water}
              onChange={(e) =>
                setNewRentInfo({ ...newRentInfo, water: e.target.value })
              }
            />
              <Input
              placeholder="electricity"
              name="electricity"
              type="number"
              value={newRentInfo.electricity}
              onChange={(e) =>
                setNewRentInfo({ ...newRentInfo, electricity: e.target.value })
              }
            />
          </VStack>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost' colorScheme="blue" onClick={handleAddRent}>Save</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
                  
    </>
  )
};

export default CreatePage

