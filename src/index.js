
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Login from "./components/Login"
import DataBinding from "./components/Databinding"
import DataBindingTable from './components/DataBindingTable';
import DataBindingSelect from './components/DataBindingSelect';
import UseStateHook from './components/UseStateHook';

import NasaAPI from './components/NasaAPI';
import ShoppingComponent from './components/ShoppingComponent';

import EventBindingDemoComponent from './components/EventBindingDemoComponent';
import FilterDemo from './components/FilterDemo';
import ShoppingArea from './components/ShoppingArea';
import OneWayBinding from './classComponents/OneWayBinding';
import TwoWayBinding from './classComponents/TwoWayBinding';
import APIcalling from './classComponents/APIcalling';
import PropsImport from './classComponents/PropsImport';
import StyleBinding from './Style,Class Binding/StyleBinding';
import ClassBinding from './Style,Class Binding/ClassBinding';
import Validation_old from './Forms/Validation_old';
import ServiceableArea from './classComponents/ServiceableArea';
import FormikBinding from "./components/FormikBinding"
import FormikBindingValidation from './components/FormikBindingValidation';
import FormikYup from './components/FormikYup';
import ReactForm from './components/ReactForm';
import FormikYupNewValidation from './components/FormikYupNewValidation';
import ReactHookForm from './components/ReactHookForm';
import LifeCycleClassDemo from './components/LifeCycleClassDemo';
import UseEffectHookDemo from './components/UseEffectHookDemo';
import UseContextDemo from './components/UseContextDemo';
import UserDetails from './components/UserDetails';
import UseCookiesHook from './components/UseCookiesHook';
import {CookiesProvider} from "react-cookie"
import UseSortDemo from './components/UseSortDemo';
import UseReducerDemo from './components/UseReducer';
import UseReducer2 from './components/UseReducer2';
import UseFetchData from './CustomHooks/UseFetchData';
import CustomHookDemo from './CustomHooks/UseFetchDataDemo';
import TextBoxDemo from './components/TextBoxDemo';
import PushFormData from './components/PushFormData';
import Users from './components/Users';
import AxiosDemo from './components/AxiosDemo';
import ShoppingIndex from './Shopping Site/ShoppingIndex';
import IshopIndex from './Ishop/IshopIndex';
import BankIndexpage from './BankApp/BankIndexPage';
import MainComponent from './Internship Task/MainComponent';
import TravelMainPage from './Travel App/TravelMainPage';
import TravelRouteTable from './Travel App/TravelRouteTable';
import TodoRouteTable from './TO-do list/TodoRouteTable';
import ProjectIndex from './PojectManagementTool/ProjectIndex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*   <UseContextDemo/>
     <CookiesProvider>
     <UseCookiesHook/>
     <UseReducerDemo/>
     </CookiesProvider>
     <UseReducer2/>
     <UseSortDemo/>
     <UseSortDemo/>
     <Login/>
     <TextBoxDemo/>
     <CustomHookDemo/>
     <Users/>
       <PushFormData/>
       <AxiosDemo/>
     
      <BankIndexpage/>
      <IshopIndex/>
         <MainComponent/>    
         <TodoRouteTable/>
     
*/
<React.StrictMode>
<ShoppingIndex/>
<ProjectIndex/>
 <TravelRouteTable/>

</React.StrictMode>
);
reportWebVitals();
