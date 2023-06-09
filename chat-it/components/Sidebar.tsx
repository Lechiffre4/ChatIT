import React, { ReactNode }  from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  useColorMode,
	Button,
} from "@chakra-ui/react";
import {
  FiMail,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { end, left, right } from "@popperjs/core";



export default function Sidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
	<Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
	  <SidebarContent
		onClose={() => onClose}
		display={{ base: "none", md: "block" }}
	  />
	  <Drawer
		autoFocus={false}
		isOpen={isOpen}
		placement="left"
		onClose={onClose}
		returnFocusOnClose={false}
		onOverlayClick={onClose}
		size="full"
	  >
		<DrawerContent>
		  <SidebarContent onClose={onClose} />
		</DrawerContent>
	  </Drawer>
	  {/* mobilenav */}
	  <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
	  <Box ml={{ base: 0, md: 60 }} p="4">
		{children}
	  </Box>
	</Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
	const { colorMode, toggleColorMode } = useColorMode();
  return (
	<Box
	  bg={useColorModeValue("white", "gray.900")}
	  borderRight="1px"
	  borderRightColor={useColorModeValue("gray.200", "gray.700")}
	  w={{ base: "full", md: 60 }}
	  pos="fixed"
	  h="full"
	  {...rest}
	>
	  <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
		<Flex>
		  <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
			Chat
		  </Text>
		  <Text
			fontSize="2xl"
			fontFamily="monospace"
			fontWeight="bold"
			color="blue.500"
		  >
			IT
		  </Text>
		</Flex>
		<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
	  </Flex>

	  <Flex flexDirection={"column"}>
	  	<NavItem icon={FiMail}>Chat</NavItem>
	  	<Button onClick={toggleColorMode} background="transparent" justifyContent={"end"} w="5">
			{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
	  	</Button>
	  </Flex>
	</Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
	<Link
	  href="#"
	  style={{ textDecoration: "none" }}
	  _focus={{ boxShadow: "none" }}
	>
	  <Flex
		align="center"
		p="4"
		mx="4"
		borderRadius="lg"
		role="group"
		cursor="pointer"
		_hover={{
		  bg: "cyan.400",
		  color: "white",
		}}
		{...rest}
	  >
		{icon && (
		  <Icon
			mr="4"
			fontSize="16"
			_groupHover={{
			  color: "white",
			}}
			as={icon}
		  />
		)}
		{children}
	  </Flex>
	</Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
	<Flex
	  ml={{ base: 0, md: 60 }}
	  px={{ base: 4, md: 24 }}
	  height="20"
	  alignItems="center"
	  bg={useColorModeValue("white", "gray.900")}
	  borderBottomWidth="1px"
	  borderBottomColor={useColorModeValue("gray.200", "gray.700")}
	  justifyContent="flex-start"
	  {...rest}
	>
	  <IconButton
		variant="outline"
		onClick={onOpen}
		aria-label="open menu"
		icon={<FiMenu />}
	  />

	  <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
		Chat
	  </Text>
	  <Text
		fontSize="2xl"
		fontFamily="monospace"
		fontWeight="bold"
		color="blue.500"
	  >
		IT
	  </Text>
	</Flex>
  );
};
