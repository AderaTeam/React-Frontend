import { createStyles, Flex, Stack } from "@mantine/core";

const useStyles = createStyles(() => ({
  mainWrapper: {
      padding:'51px 200px',
  },
}));

type Props = {
  children?: React.ReactNode[];
};

const MainWrapper = ({children} : Props) => {
  const { classes } = useStyles();

  return (
    <Flex justify="space-between" className={classes.mainWrapper} gap='1rem'>
      <Stack w={1008}>
        {children ? children[0] : <></>}
      </Stack>
      <Stack w={496}>
        {children ? children[1] : <></>}
      </Stack>
    </Flex>
  );
};

export default MainWrapper;