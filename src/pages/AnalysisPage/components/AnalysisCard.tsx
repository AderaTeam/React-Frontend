import { LoadingOverlay, Stack } from "@mantine/core";
import CardTitle from "./CardTitle";
import CardExternalFrom from "./CardExternalForm";
import { useContext, useEffect, useState } from "react";
import CardPointForm from "./CardPointForm";
import { Context } from "../../../main";

type Props = {
  title: string,
};

const AnalysisCard = ({title} : Props) => {
  const [vvp, setVvp] = useState<string>('10000');
  const [externalLoading, setExternalLoading] = useState<boolean>(false);
    const [pointLoading, setPointLoading] = useState<boolean>(false);
    const { AStore } = useContext(Context);

    useEffect(() => {
        setExternalLoading(AStore.isExternalLoading);
        setPointLoading(AStore.isPointLoading);
    }, [AStore.isExternalLoading || AStore.isPointLoading])

  return (
    <Stack spacing={24} bg={'#ffff'} style={{borderRadius: '16px'}} p={'32px 24px'}>
      <LoadingOverlay 
          visible={(externalLoading && title==='Внутренний анализ') || (pointLoading && title==='Точечный анализ')} 
          overlayBlur={2} loaderProps={{color: 'indigo.5'}}/>
      <CardTitle title={title}/>
      {title === 'Внешний анализ' ? <CardExternalFrom vvp={vvp} setVvp={setVvp}/> : 
      <CardPointForm/>}
    </Stack>
  );
};

export default AnalysisCard;