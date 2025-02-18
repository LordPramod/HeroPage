import { Stack } from "@chakra-ui/react";
import { Home } from "./pages/Home/Index";

function App() {
  return (
    <>
      <Stack
        gap={0}
        // border={"1px solid green"}
        overflowY={"scroll"}
        height={"100vh"}
        width={"100vw"}
        css={{
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        <Home />
      </Stack>
    </>
  );
}

export default App;
