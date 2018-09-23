/**
 * Created by yaroslav on 07.09.18.
 */
import React from 'react';
import routes from '../../routes/route.js';
import { Route, BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../../components/Header/HeaderComponent.jsx';
import Footer from '../../components/Footer/FooterComponent.jsx';

import style from "../../styles";
import '../../index.css';

const { Content } = Layout;

class AppView extends React.Component{

  render(){
    return(
      <BrowserRouter>
        <Layout>
            <Header/>
            <Content style={style.content} className="content">
                <div>
                {
                  routes.map( route => <Route path={route.path} component={route.component} exact={route.exact} key={route.path}/>)
                }
                </div>
            </Content>
          <Footer/>
        </Layout>
      </BrowserRouter>
    )
  }

}

export default AppView