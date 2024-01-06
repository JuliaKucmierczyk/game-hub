import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpendableText = ({ children }: Props) => {
  const [expended, setExpended] = useState(false);

  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expended ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpended(!expended)}
      >
        {expended ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpendableText;
