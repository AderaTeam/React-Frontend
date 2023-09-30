import { Stack, Button } from "@mantine/core";
import { Questions } from "../../../utils/Question";
import TestItem from "./TestItem";
import { useContext, useState } from "react";
import $api from "../../../http";
import { AuthResponse } from "../../../models/response/AuthResponse";
import { Context } from "../../../main";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { RESULT_ROUTE } from "../../../utils/const";

interface Answers {
  [key: string] : string,
}

const TestList = () => {
  const [answers, setAnswers] = useState<Answers[]>([]);
  const { UStore } = useContext(Context);
  const navigate = useNavigate();

  const handleAdd = (questionId: string, answer: string) => {
    setAnswers((prev) => [...prev, {[`${questionId}`]: answer}]);
  };

  const handlePostResult = async () => {
    const convertedObject : {[key: string]: string} = {};
    
    answers.forEach((obj, _index) => {
      const key = Object.keys(obj)[0];
      const value = obj[key];
      convertedObject[key] = value;
    });

    const response =  await $api.post<AuthResponse>('/test', {answers: convertedObject}, 
      {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
    UStore.setUser(response.data.user);
    navigate(RESULT_ROUTE);
  }


  return (
    <Stack spacing={40}>
      <Stack spacing={16}>
        {Questions.map(question => (
          <TestItem key={question.id} question={question} len={answers.length} handleAdd={handleAdd}/>
        ))}
      </Stack>
      <Button 
        w={209} h={56} 
        className="button" 
        disabled={answers.length !== 9}
        style={{marginLeft: 'auto'}}
        onClick={() => handlePostResult()}
      >
        Узнать результат
      </Button>
    </Stack>
  )
};

export default observer(TestList);