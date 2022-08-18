import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Header from './header';

const Layout = () => {
    return (
        //todo this should all be adaptive, but this whole componant will likely change
        <Grid h='500px' templateAreas={`"header header" "nav main" "nav footer"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            gap='1'>
            <GridItem pl='2' bg='blue.100' area={'header'}>
                <Header title="1 Lit Fam" />
            </GridItem>
            <GridItem pl='2' bg='cyan.100' area={'nav'}>
                <Navbar />
            </GridItem>
            <GridItem pl='2' bg='teal.300' area={'main'}>
                <Outlet />
            </GridItem>

            <GridItem pl='2' bg='green.300' area={'footer'}>
                this is the footer
            </GridItem>
        </Grid>
    )
}

export default Layout;