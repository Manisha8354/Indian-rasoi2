import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Client/Home.jsx'
import VegNav from './components/Client/VegNav.jsx'
import NonvegNav from './components/Client/NonvegNav.jsx'
import About from './components/Client/About.jsx'
import Location from './components/Client/Location.jsx'
import ChineseFood from './components/Client/ChineseFood.jsx'
import Contact from './components/Client/Contact.jsx'
import MenuPage from './components/Client/MenuPage.jsx'
import Viewmoremenu from './components/Client/Viewmoremenu.jsx'
import Blog from './components/Client/Blog.jsx'
import ViewmoreBlog from './components/Client/ViewmoreBlog.jsx'
import Terms from './components/Client/Terms.jsx'
import Privacy from './components/Client/Privacy.jsx'
import Help from './components/Client/Help.jsx'
import Order from './components/Client/Order.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/vegnav' element={<VegNav/>}/>
    <Route path='/nonvegnav' element={<NonvegNav/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/location' element={<Location/>}/>
    <Route path='/chinese' element={<ChineseFood/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/menupage' element={<MenuPage/>}/>
    <Route path='/viewmoremenu' element={<Viewmoremenu/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/viewmoreblog' element={<ViewmoreBlog/>}/>
    <Route path='/term' element={<Terms/>}/>
    <Route path='/privacy' element={<Privacy/>}/>
    <Route path='/contact' element={<Help/>}/>
    <Route path='/order' element={<Order/>}/>
    </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
