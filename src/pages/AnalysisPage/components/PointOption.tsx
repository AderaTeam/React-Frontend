import { Autocomplete, Select } from "@mantine/core";
import { useEffect, useState } from "react";
import AnalysisServices from "../../../services/AnalysisServices";

interface props {
  option: string,
  setSelectedId:  React.Dispatch<React.SetStateAction<string>>,
  setBehavior:  React.Dispatch<React.SetStateAction<string | null>>,
  selectedId: string,
  behavior: string | null,
};

const PointOption = ({option, setSelectedId, selectedId, setBehavior, behavior} : props) => {
  const [id, setId] = useState<string[]>();

  useEffect(() => {
    if (option === 'id') {
      try {
        AnalysisServices.getId().then(response => {
          setId(response.data.ids);
        })
      } catch (error) {
        console.log(error);
      }
    }
  }, [option]);

  switch (option) {
    case 'id': 
      return (
        <Autocomplete
          value={selectedId}
          onChange={setSelectedId}
          className="autocomplete"
          size="lg"
          label="Пользователь, id"
          placeholder="0x05C7DF8BA2611640BE946E29CF20C6D2"
          data={id ? id : []}
        />
      );
    case 'behavior':
      return (
        <Select
          value={behavior}
          onChange={setBehavior}
          size="lg"
          label="Тип финансового поведения"
          placeholder="Выберите тип кролика"
          data={['Открытый', 'Смелый', 'Предприимчивый', 'Осторожный']}
        />
      );
    case 'allPeople':
      return (<></>);
  }
};

export default PointOption; 