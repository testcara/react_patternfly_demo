import React, { useState } from "react";
import { Button, Title } from "@patternfly/react-core";
import { Text, TextVariants, TextContent } from "@patternfly/react-core";

function PatternFlyExample() {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ padding: "20px" }}>
      <Title headingLevel="h1" size="xl">
        PatternFly React Example
      </Title>
      <p>{counter}</p>
      <Button variant="primary" onClick={() => setCounter(counter + 1)}>
        +1
      </Button>
      <TextContent>
        <Text component={TextVariants.h1}>This is one text h1</Text>
        <Text component={TextVariants.p1}>
          This is one long paraghs.I am just testing the format. I am not sure
          whether i need to change lines.
        </Text>
      </TextContent>
    </div>
  );
}

export default PatternFlyExample;
