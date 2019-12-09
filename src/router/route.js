import {
  Login,
  NotFound,
  Homepage,
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
    pathname:"/admin/homepage",
    component:Homepage,
    title:"个人主页",
    isOff:true,
    icon:"dashboard"
  },
  {
    pathname:"/admin/articleList",
    component:ArticleList,
    title:"热门话题",
    isOff:true,
    icon:"unordered-list"
  },
  {
    pathname:"/admin/articleEdit",
    component:ArticleEdit,
    isOff:false
  },
  {
    pathname:"/admin/postContent",
    component:PostContent,
    title:"发布内容",
    isOff:true,
    icon:"setting"
  },
  {
    pathname:"/admin/setting",
    component:Setting,
    title:"设置",
    isOff:true,
    icon:"setting"
  }
]