import { Flex, LoadingOverlay, Radio, Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";

interface TestItemProps {
  question: QuestionProps,
  handleAdd: Function,
  len: number
};

interface QuestionProps {
  question: string,
  id: number,
}

const TestItem = ({question, handleAdd, len} : TestItemProps) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value) {
      handleAdd(question.id, value)
    }
    
  }, [value])

  return (
    <Flex p={56} bg={'#ffff'} style={{borderRadius: '32px', position: 'relative'}}>
      <LoadingOverlay visible={len !== question.id} overlayBlur={2} loader={true}/>
        <Stack spacing={30}>
          <Text color="gray.5" size="md" lh={'24px'}>Вопрос {question.id + 1}</Text>
          <Stack spacing={16}>
            <Title size="h3" color="gray.9">{question.question}</Title>
            <Text color="gray.8" size="md" lh={'24px'}>Выберите насколько данное утверждение верно для вас</Text>
          </Stack>
          <Radio.Group
            value={value}
            onChange={setValue}
          >
            <Stack spacing={16}>
              <Radio
                className="radio"
                size="md"
                color="indigo.7"
                value="0"
                label="Согласен"
              />
              <Radio
                className="radio"
                size="md"
                color="indigo.7"
                value="1"
                label="Не знаю"
              />
              <Radio
                className="radio"
                size="md"
                color="indigo.7"
                value="2"
                label="Не согласен"
              />
            </Stack>
          </Radio.Group>
        </Stack>
    </Flex>
  );
};

export default TestItem;