import {Container} from '@mui/material';
import {MainRoutes} from '../../routes/MainRoutes.tsx';
import {Header} from '../header/Header.tsx';

function App() {
    return (
        <>
            <Header />
            <Container>
                <MainRoutes />
            </Container>
        </>
    );
}

export default App;
