import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Chat } from './pages/chat/chat';
import { Crops } from './pages/crops/crops';
import { Weather } from './pages/weather/weather';


export const routes: Routes = [
    {
        path : '',
        component : Home
    },
    {
        path : 'chat',
        component : Chat
    },
    {
        path : 'crops',
        component : Crops
    },
    {
        path : 'weather',
        component : Weather
    },
    {
        path : '**',
        redirectTo : ''
    }
];
