import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	HStack,
	IconButton,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useColorModeValue,
	useDisclosure,
	useToast,
	VStack
} from "@chakra-ui/react";
import { useHSrent } from "../house/rent";
import { useState } from "react";

const ProductCard = ({ rent }) => {
	const [updatedRent, setUpdatedRent] = useState(rent);

	const textColor = useColorModeValue("gray.600", "gray.200");
	const bg = useColorModeValue("white", "gray.800");

	const { deleteRent, updateRent } = useHSrent();
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleDeleteRent = async (pid) => {
		const { success, message } = await deleteRent(pid);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	const handleUpdateRent = async (pid, updatedRent) => {
		const { success, message } = await updateRent(pid, updatedRent);
		onClose();
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: "Product updated successfully",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<Box
			shadow='lg'
			rounded='lg'
			overflow='hidden'
			transition='all 0.3s'
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
			bg={bg}
		>

			<Box p={4} display='flex' justifyContent='space-between' w='100vw'>
				<Text as='h3' size='md' mb={2}>
					{rent.name}
				</Text>

				<Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					${rent.HS_rent}
				</Text>

                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					${rent.water}
				</Text>
                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					${rent.electricity}
				</Text>

				<HStack spacing={2}>
					<IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
					<IconButton
						icon={<DeleteIcon />}
						onClick={() => handleDeleteRent(rent._id)}
						colorScheme='red'
					/>
				</HStack>
			</Box>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />

				<ModalContent>
					<ModalHeader>Update Product</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<VStack spacing={4}>
							<Input
								placeholder='Name'
								name='name'
								value={updatedRent.name}
								onChange={(e) => setUpdatedRent({ ...updatedRent, name: e.target.value })}
							/>
							<Input
								placeholder='Rent'
								name='HS_rent'
								type='number'
								value={updatedRent.HS_rent}
								onChange={(e) => setUpdatedRent({ ...updatedRent, HS_rent: e.target.value })}
							/>
							<Input
								placeholder='water'
								name='water'
								type="number"
								value={updatedRent.water}
								onChange={(e) => setUpdatedRent({ ...updatedRent, water: e.target.value })}
							/>
							<Input
								placeholder='electricity'
								name='electricity'
								type="number"
								value={updatedRent.electricity}
								onChange={(e) => setUpdatedRent({ ...updatedRent, electricity: e.target.value })}
							/>
						</VStack>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme='blue'
							mr={3}
							onClick={() => handleUpdateRent(rent._id, updatedRent)}
						>
							Update
						</Button>
						<Button variant='ghost' onClick={onClose}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};
export default ProductCard;
