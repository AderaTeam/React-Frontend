import { Button, Flex, NumberInput, Stack, Text, TextInput } from "@mantine/core";
import { useContext } from "react";
import { Context } from "../../../main";
import { useNavigate } from "react-router-dom";
import { CURRENT_ANALYSIS_ROUT } from "../../../utils/const";
import { observer } from "mobx-react-lite";

interface props {
	vvp: string,
	setVvp: Function
}

const CardExternalFrom = ({vvp, setVvp}: props) => {
  const { AStore } = useContext(Context);
  const navigate = useNavigate();

  return (
		<Flex justify={'space-between'} align={'flex-end'}>
			<Flex gap={16}>
				<Stack spacing={6}>
          <TextInput
						value={vvp}
						onChange={(e) => setVvp(e.currentTarget.value)}
            label="ВВП"
            className="inputMini"
          />
          <Text size={'sm'} lh={'21px'} color="gray.6">В млрд. руб</Text>
					</Stack>
					<Stack spacing={6}>
						<NumberInput
							disabled
							label="ВНП"
							placeholder="10000"
							className="inputMini"
							hideControls
						/>
						<Text size={'sm'} lh={'21px'} color="gray.6">В млрд. руб</Text>
					</Stack>
					<Stack spacing={6}>
						<NumberInput
							disabled
							label="МРОТ"
							placeholder="10000"
							className="inputMini"
							hideControls
						/>
						<Text size={'sm'} lh={'21px'} color="gray.6">В рублях</Text>
				</Stack>
			</Flex>
			<Button
        disabled={AStore.isPointLoading || !vvp}
        onClick={
          AStore.currentExternalAnalysis ? 
          () => navigate(CURRENT_ANALYSIS_ROUT + '/' + 0) :
          () => AStore.externalAnalysis(vvp)
        }
        w={194} h={51} 
        color="indigo.7" 
        className="button"
      >
          {AStore.currentExternalAnalysis ? 'К результату' : 'Анализировать'}
      </Button>
		</Flex>
  );
};

export default observer(CardExternalFrom);