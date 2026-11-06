import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Chat } from './pages/chat/chat';
import { Crops } from './pages/crops/crops';
import { WeatherPage } from './pages/weather/weather';
import { CropDetail } from './pages/crop-detail/crop-detail';


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
        path : 'crops/:id',
        component : CropDetail
    },
    {
        path : 'weather',
        component : WeatherPage
    },
    {
        path : '**',
        redirectTo : ''
    }
];
