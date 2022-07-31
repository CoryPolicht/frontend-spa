import { Grid, GridItem } from '@chakra-ui/react'

function Layout() {
    return (
        <Grid h='500px' templateAreas={`"header header" "nav main" "nav footer"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            gap='1'>
            <GridItem pl='2' bg='blue.100' area={'header'}>
                Header
            </GridItem>
            <GridItem pl='2' bg='cyan.100' area={'nav'}>
                this is the nav bar
            </GridItem>
            <GridItem pl='2' bg='teal.300' area={'main'}>
                this is the main container
            </GridItem>

            <GridItem pl='2' bg='green.300' area={'footer'}>
                this is the footer
            </GridItem>
        </Grid>
    )
}

export default Layout;