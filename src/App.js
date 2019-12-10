import React,{Component} from "react"
import {adminRouter} from "./router/route"
import {Switch,Route,Redirect} from "react-router-dom"
import Frame from "./components/Frame"
class App extends Component {
  render(){
    // console.log(this.props)
    return (
      <Frame>
        <Switch>
          <Redirect to={adminRouter[1].pathname} exact from="/admin"/>
          {
            adminRouter.map((item)=>{
              return <Route key={item.pathname} path={item.pathname} render={(routerProps)=><item.component {...routerProps}/>}/>
              })
          }
        </Switch>
      </Frame>
    )
  }
}
export default App

/* import React, {Component} from "react"
import {Route,Switch,Redirect} from "react-router-dom"
import {connect} from "react-redux"
import Frame from "./components/Frame"
import {adminRouter} from "./router/route"
class App extends Component{
    render(){
        return(
            <Frame>
                <Switch>
                    {
                        adminRouter.map(item=>{
                            return <Route key={item.pathname} path={item.pathname} render={(routerProps)=>this.props.login.uid ? <item.component {...routerProps}/> : <Redirect to="/login" />}/>
                        })
                    }
                    <Redirect to={adminRouter[0].pathname} from="/admin" exact/>
                </Switch>
            </Frame>
        )
    }
}
const mapStateToProps = state => ({
    login : state.login
})
export default connect(mapStateToProps,null)(App) */