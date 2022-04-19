import { SimpleGrid, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Card from "../Card";

const CardArea = () => {

    const { data, loading } = useSelector(state => state.data);
    return (
        <>
            <SimpleGrid columns={[1, 1, 1, 4]} spacing={10} my={10}>
            {loading && (
                <>
                <Card title={''} value={0} day={''} text={''} bg={'blue'} />
                <Card title={''} value={0} day={''} text={''} bg={'green'} />
                <Card title={''} value={0} day={''} text={''} bg={'pink'} />
                <Card title={''} value={0} day={''} text={''} bg={'yellow'} />
                </>
            )}
                {!loading && (
                    <>
                        <Card title={'Infected'} value={data.confirmed.value} day={data.lastUpdate} text={'Number of infect cases of COVID-19'} bg={'blue'} />
                        <Card title={'Recovered'} value={data.recovered.value} day={data.lastUpdate} text={'Number of recoveries from COVID-19'} bg={'green'} />
                        <Card title={'Deaths'} value={data.deaths.value} day={data.lastUpdate} text={'Number of deaths caused by COVID-19'} bg={'pink'} />
                        <Card title={'Active'} value={data.confirmed.value - data.deaths.value} day={data.lastUpdate} text={'Number of active cases of COVID-19'} bg={'yellow'} />
                    </>
                )}
            </SimpleGrid>
        </>
    )
}

export default CardArea
