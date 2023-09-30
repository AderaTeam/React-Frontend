import { Button, Flex, SegmentedControl, Stack } from "@mantine/core";
import { useContext, useState } from "react";
import { Context } from "../../../main";
import PointOption from "./PointOption";
import { observer } from "mobx-react-lite";

const CardPointForm = () => {
  const [tab, setTab] = useState<string>('id');
  const { AStore } = useContext(Context);

  return (
    <Stack spacing={24}>
      <SegmentedControl
        radius={'20px'}
        fullWidth
        value={tab}
        onChange={setTab}
        size="xl"
        data={[
          { label: 'Пользователь, id', value: 'id' },
          { label: 'Тип финансового поведения', value: 'behavior' },
          { label: 'По всей массе людей', value: 'allPeople' },
        ]}
      />
      <Flex justify={"space-between"}>
        <PointOption option={tab}/>
        <Button
          style={{marginLeft: 'auto'}}
          onClick={() => console.log(1)}
          w={194} h={51} 
          color="indigo.7" 
          className="button"
        >
            Анализировать
        </Button>
      </Flex>
    </Stack>
  );
};

export default observer(CardPointForm);