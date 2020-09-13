import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeachersList from './pages/TeachersList';
import TeachersForm from './pages/TeachersForm';

export default function Routes() {

    return(

        <BrowserRouter>

            <Route exact path="/" component={Landing} />
            <Route exact path="/study" component={TeachersList} />
            <Route exact path="/give-lessions" component={TeachersForm} />
        
        </BrowserRouter>

    );

}

