import * as React from 'react';
import { IHomeProps } from './IHomeProps';
import { escape } from '@microsoft/sp-lodash-subset';
import HomeState from './Context/HomeContext/HomeState'
import MenuPrincipal from './MenuPrincipal'
import Contenido from './Contenido'
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default class Home extends React.Component<IHomeProps, {}> {
  public render(): React.ReactElement<IHomeProps> {
    return (
      <HomeState>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
          <MenuPrincipal/>
          </div>
          <div className='col-sm-8'>
          <Contenido/>
          </div>
        </div>
      </div>
      </HomeState>
      
    );
  }
}
