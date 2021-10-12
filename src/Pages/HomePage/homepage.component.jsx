import React from 'react';
import './homepage.style.scss';
import Directory from '../../Components/Directory/directory.component';
import { HomePageContainer } from './homepage.styles.jsx';

const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer> 
)

export default HomePage;