import { Flex } from "@mantine/core";

interface TestItemProps {
  answer: AnswerProps,
};

interface AnswerProps {
  answer: string,
  id: number,
}

const TestItem = ({answer} : TestItemProps) => {
  return (
    <Flex p={56} bg={'#ffff'} style={{borderRadius: '32px'}}>
      {answer.answer}
    </Flex>
  );
};

export default TestItem;