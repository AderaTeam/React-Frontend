import { Flex, Stack } from "@mantine/core";
import TitleWrapper from "./TitleWrapper";

type Props = {
	children?: React.ReactNode[];
};

const AnalistWrapper = ({children} : Props) => {
  
	return (
    <Stack bg={'gray.0'} p={'40px'} spacing={24}>
      <TitleWrapper/>
        <Flex justify="space-between" gap='1.5rem'>
        <Stack w={1248}>
          {children ? children[0] : <></>}
        </Stack>
        <Stack w={300}>
          {children ? children[1] : <></>}
        </Stack>
        </Flex>
    </Stack>
	);
};

export default AnalistWrapper;