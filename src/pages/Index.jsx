import { Container, Text, VStack, Box, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button } from "@chakra-ui/react";

const jobListings = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    description: "We are looking for a skilled software engineer to join our team.",
  },
  {
    title: "Product Manager",
    company: "Innovate Ltd.",
    location: "New York, NY",
    description: "Seeking an experienced product manager to lead our product team.",
  },
  {
    title: "UX Designer",
    company: "Design Studio",
    location: "Remote",
    description: "A creative UX designer needed for a fast-growing design studio.",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch" width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Job Listings
          </Heading>
          <Text fontSize="lg">Find your next career opportunity</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {jobListings.map((job, index) => (
            <Card key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <CardHeader>
                <Heading size="md">{job.title}</Heading>
                <Text fontSize="sm">{job.company}</Text>
                <Text fontSize="sm" color="gray.500">
                  {job.location}
                </Text>
              </CardHeader>
              <CardBody>
                <Text>{job.description}</Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="teal">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;