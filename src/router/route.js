import {
  Login,
  NotFound,
  DashBoard,
  ArticleList,
  ArticleEdit,
  Setting
} from "../pages"

export const mainRouter = [
  {
    pathname:"/login",
    component:Login
  },
  {
    pathname:"/404",
    component:NotFound
  }
]
export const adminRouter = [
  {
    pathname:"/admin/dashboard",
    component:DashBoard,
    title:"制表盘",
    isOff:true,
    icon:"dashboard"
  },
  {
    pathname:"/admin/articleList",
    component:ArticleList,
    title:"文章列表",
    isOff:true,
    icon:"unordered-list"
  },
  {
    pathname:"/admin/articleEdit",
    component:ArticleEdit,
    isOff:false
  },
  {
    pathname:"/admin/setting",
    component:Setting,
    title:"设置",
    isOff:true,
    icon:"setting"
  }
]