/* import {
  Login,
  NotFound,
  Homepage,
  ArticleList,
  ArticleEdit,
  Setting,
  PostContent
} from "../pages" */
import Loadable from "react-loadable"
import Loading from "../../src/components/Loading"

export const mainRouter = [
  {
    pathname: "/login",
    component: Loadable({
      loader: () => import("../../src/pages/login"),
      loading: () => Loading
    })
  },
  {
    pathname: "/404",
    component: Loadable({
      loader: () => import("../../src/pages/notFound"),
      loading: () => Loading
    })
  }
]
export const adminRouter = [
  {
    pathname: "/admin/homepage",
    component: Loadable({
      loader: () => import("../../src/pages/homepage"),
      loading: () => Loading
    }),
    title: "个人主页",
    isOff: true,
    icon: "dashboard"
  },
  {
    pathname: "/admin/articleList",
    component: Loadable({
      loader: () => import("../../src/pages/article/ArticleList"),
      loading: () => Loading
    }),
    title: "热门话题",
    isOff: true,
    icon: "unordered-list"
  },
  {
    pathname: "/admin/articleEdit",
    component: Loadable({
      loader: () => import("../../src/pages/article/ArticleEdit"),
      loading: () => Loading
    }),
    isOff: false
  },
  {
    pathname: "/admin/postContent",
    component: Loadable({
      loader: () => import("../../src/pages/postContent"),
      loading: () => Loading
    }),
    title: "发布内容",
    isOff: true,
    icon: "plus-circle"
  },
  {
    pathname: "/admin/setting",
    component: Loadable({
      loader: () => import("../../src/pages/setting"),
      loading: () => Loading
    }),
    title: "设置",
    isOff: true,
    icon: "setting"
  }
]