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
          <Redirect to={adminRouter[0].pathname} exact from="/admin"/>
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