import {Grid, GridItem} from '@chakra-ui/react'
import logo from '../../logo.svg'

function Layout () {
    return (
        <Grid templateAreas={'"header header"'}>
            <GridItem area={'header'}>
            <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
            <header className="App-header">
        
      </header>
            </GridItem>


        </Grid>
    )

}

export default Layout;