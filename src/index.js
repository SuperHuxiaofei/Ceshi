import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import store from "./store/store"
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import "antd/dist/antd.css"
import "./assets/css/reset.css"
import App from './App'
import {mainRouter} from "./router/route"
import NotFound from "./pages/notFound"
ReactDOM.render(
  (
  <Provider store={store}>
  <Router> 
    <Switch>
      {/* 这里不能用完全匹配，因为admin下面有子路由，完全匹配的话，就显示不出来 */}
      <Route path="/admin" render={(routerProps)=><App {...routerProps}/>}/>
      {
        mainRouter.map((item)=>{
          return <Route key={item.pathname} path={item.pathname} component={item.component}/>
        })
      }
      <Redirect to="/admin" from="/" exact/>
      <Route path="/*" component={NotFound}/>
    </Switch>
  </Router>
  </Provider>),
  document.getElementById('root')
)
