# React Patternfly Demo

## Start the react app

- create the app and start the app
  
```bash
npx create-react-app react_patternfly_demo
cd react_patternfly_demo
yarn start
```

- remove useless files
see [the files](https://github.com/testcara/react_patternfly_demo/commit/2debf45ae9909b6c479b4f1c0e96f462efa4fef6) i just left.

- install the 'pattern-fly'

```bash
yarn add @patternfly/react-core
```

## Write the first react component with patternfly

- import the package you need

  ```javascript
  import { Button, Title } from "@patternfly/react-core";
  import { Text, TextVariants, TextContent } from "@patternfly/react-core";
  ```

  还有```react-table```等其他包，择需进行引入和使用。

- enjoy it in your component

  ```javascript
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
  ```

更复杂的内容我们会在实际项目中边学习边增加。