import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.scss'

//导入mdui
import 'mdui/mdui.css';
import 'mdui';


import SetColor from './components/mdui/setColor'
import IconLoader from './components/mdui/iconIoader'
import { router } from './route/router.tsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SetColor />
    <IconLoader />
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode >,
)
