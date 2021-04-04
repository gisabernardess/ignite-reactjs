import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gisele Bernardes</Text>
        <Text color="gray.300" fontSize="small">
          giiselebernardes@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Gisele Bernardes"
        src="https://github.com/gisabernardess.png"
      />
    </Flex>
  );
}
