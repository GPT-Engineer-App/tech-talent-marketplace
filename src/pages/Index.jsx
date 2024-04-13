import React, { useState } from "react";
import { Box, Heading, Text, Stack, Input, Button, Grid, Badge, Avatar, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const developers = [
  {
    id: 1,
    name: "John Doe",
    location: "New York",
    technologies: ["React", "Node.js", "JavaScript"],
    avatar: "https://images.unsplash.com/photo-1469833120660-1a218b53d28a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMDI2NDc1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "London",
    technologies: ["Angular", ".NET", "C#"],
    avatar: "https://images.unsplash.com/photo-1485217988980-11786ced9454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwMjY0NzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Mike Johnson",
    location: "San Francisco",
    technologies: ["React", "Go", "JavaScript"],
    avatar: "https://images.unsplash.com/photo-1514543250559-83867827ecce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtYWxlJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMDI2NDc1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Sarah Lee",
    location: "Sydney",
    technologies: ["Vue.js", "Node.js", "JavaScript"],
    avatar: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxmZW1hbGUlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwMjY0NzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filteredDevelopers = developers.filter((developer) => developer.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleContactClick = (developer) => {
    setSelectedDeveloper(developer);
    onOpen();
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Particles - Find Top Software Talent
      </Heading>
      <Text fontSize="xl" textAlign="center" mb={8}>
        Discover and connect with highly skilled developers specializing in web technologies like React, Node.js, .NET, Go, and JavaScript.
      </Text>
      <Stack spacing={4} mb={8}>
        <Input placeholder="Search developers..." value={searchTerm} onChange={handleSearch} borderRadius="full" size="lg" paddingLeft={12} />
        <Button leftIcon={<FaSearch />} colorScheme="blue" borderRadius="full" size="lg" width="200px" margin="auto">
          Search
        </Button>
      </Stack>
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={8}>
        {filteredDevelopers.map((developer) => (
          <Box key={developer.id} borderWidth={1} borderRadius="lg" padding={4}>
            <Avatar size="xl" src={developer.avatar} mb={4} />
            <Heading as="h2" size="md" mb={2}>
              {developer.name}
            </Heading>
            <Text mb={2}>{developer.location}</Text>
            <Stack direction="row" spacing={2} mb={4}>
              {developer.technologies.map((tech) => (
                <Badge key={tech} colorScheme="green">
                  {tech}
                </Badge>
              ))}
            </Stack>
            <Button colorScheme="blue" onClick={() => handleContactClick(developer)}>
              Contact
            </Button>
          </Box>
        ))}
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact {selectedDeveloper?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Enter your message..." />
            </FormControl>
            <Button colorScheme="blue" mt={4}>
              Send Message
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
