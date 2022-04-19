import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { fetchAsyncData } from "./store/slices/dataSlice";
import { Container } from "@chakra-ui/react";
import CardArea from "./components/CardArea";
import Dropdown from "./components/Dropdown";
import { Image, Flex } from '@chakra-ui/react'
import Graphic from "./components/Graphic";

const App = () => {

  const dispatch = useDispatch();
  const { country, loading } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchAsyncData());
  }, [country, dispatch]);


  return (
    <Container maxW={'container.lg'} mb={20}>
      <Flex justifyContent={'center'} my={8}>
        <Image src="https://world19covid.web.app/static/media/image.d7265326.png" />
      </Flex>
      <CardArea />
      <Dropdown />
      {!loading && <Graphic />}
    </Container>
  )
}

export default App
