import {
    FormControl,
    FormLabel,
    Input,
    VStack,
    Button,
  } from "@chakra-ui/react";
  import { useState } from "react";

  export default function HeaderConfig({
    onHeaderChange,
  }: {
    onHeaderChange: (header: string) => void;
  }) {
    const [header, setHeader] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      onHeaderChange(header);
    };

    return (
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Authorization Header</FormLabel>
            <Input
              type="text"
              value={header}
              onChange={(e) => setHeader(e.target.value)}
              placeholder="e.g., Bearer my-token"
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Set Header
          </Button>
        </VStack>
      </form>
    );
  }