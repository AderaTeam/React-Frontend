import { Stack } from "@mantine/core";
import { Answers } from "../../../utils/Answers";
import TestItem from "./TestItem";

const TestList = () => {

  return (
    <Stack spacing={16}>
      {Answers.map(answer => (
        <TestItem key={answer.id} answer={answer}/>
      ))}
    </Stack>
  )
};

export default TestList;