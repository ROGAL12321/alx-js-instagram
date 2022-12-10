import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalProvider from 'contexts/global';

import HomePage from 'components/pages/HomePage/HomePage';
import AddMessagePage from 'components/pages/AddMessagePage/AddMessagePage';
import AboutPage from 'components/pages/AboutPage/AboutPage';
import EditPage from 'components/pages/EditPage/EditPage';
import LoginPage from 'components/pages/LoginPage/LoginPage';
import RegisterPage from 'components/pages/RegisterPage/RegisterPage';
import ProfilePage from 'components/pages/ProfilePage/ProfilePage';

import './index.css';

// Globalny Stan jest to zjawisko, w ktorym definiujemy sobie stan aplikacji raz (np. na poziomie glownego index.js), a nastepnie dowolny komponent moze odczytac z tego stanu, bez przekazywania tego bezposrednio do propsow

// Globalny Stan sklada sie z 2 czesci

// Provider - Miejsce, w ktorym sa przechowywane globalne wartosci
// Consumer - Pojedynczy komponent, ktory pobiera rzeczy z globalnego stanu

// Kazda zmiana wartosci w providerze, powoduje przerenderowanie Consumera

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/add',
    element: <AddMessagePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/myprofile',
    element: <ProfilePage />
  },
  {
    path: '/edit/:messageId',
    element: <EditPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={routes} />
    </GlobalProvider>
  </React.StrictMode>
);


// 1. Przenies formularz sluzacy do dodawania elementow do listy, do podstrony add. W momencie jak uda sie dodac nowy rekord, to przekieruj uzytkownika na strone glowna

// 2. Wyrzuc funkcje getMessage oraz editMessage do pliku helpers/http.js (w EditPage.js)