import { Select } from "@mantine/core";
import { useEffect, useState } from "react";
import { IUserId } from "../../../models/IUserId";
import AnalysisServices from "../../../services/AnalysisServices";

interface props {
  option: string,
};

const PointOption = ({option} : props) => {
  const [id, setId] = useState<IUserId[]>();

  useEffect(() => {
    if (option === 'id') {
      try {
        AnalysisServices.getId().then(response => {
          setId(response.data);
        })
      } catch (error) {
        console.log(error);
      }
    }
  }, [option])

  switch (option) {
    case 'id': 
      return (
<></>
      );
    case 'behavior':
      return (
        <Select
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