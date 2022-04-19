import { Box, Text } from "@chakra-ui/react"
import { NumberFormat } from "../../utils/NumberFormat"

const Card = ({ title='', value=0, day='', text='', bg='' }) => {

    const date = new Date(day);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = date.toLocaleDateString('en-US', options);


    return (
        <Box overflow={'hidden'} position={'relative'} boxShadow={'lg'} p={4} bg={`${bg}.200`} minH={250} display={'flex'} alignItems={'center'} borderRadius={10}>
            <Box>
                <Box>
                    <Text fontSize="lg" fontWeight={500}>{title}</Text>
                </Box>
                <Box>
                    <Text fontSize="2xl" fontWeight={500}>{NumberFormat(value)}</Text>
                </Box>
                <Box>
                    Last Updated at :
                    <Text fontSize="md">
                        {dateString}
                    </Text>
                </Box>
                <Box>
                    <Text fontSize="md">{text}</Text>
                </Box>
            </Box>
            <Box position={'absolute'} bottom={0} left={0} width={'100%'} py={2} bg={`${bg}.600`}></Box>
        </Box>
    )
}

export default Card
