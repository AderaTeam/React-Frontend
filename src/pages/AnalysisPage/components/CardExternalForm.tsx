import { Button, Flex, NumberInput, Stack, Text, TextInput } from "@mantine/core";
import { useContext } from "react";
import { Context } from "../../../main";

interface props {
	vvp: string,
	setVvp: Function
}

const CardExternalFrom = ({vvp, setVvp}: props) => {
  const { AStore } = useContext(Context);

  return (
		<Flex justify={'space-between'} align={'flex-end'}>
			<Flex gap={16}>
				<Stack spacing={6}>
          <TextInput
						value={vvp}
						onChange={(e) => setVvp(+e)}
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
        onClick={() => AStore.externalAnalysis(vvp)}
        w={194} h={51} 
        color="indigo.7" 
        className="button"
      >
          Анализировать
      </Button>
		</Flex>
  );
};

export default CardExternalFrom;