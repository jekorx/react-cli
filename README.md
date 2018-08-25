# mobile-cli(the branch of react-cli)
> [create-react-app](https://github.com/facebookincubator/create-react-app)  
> 移动端模版分支，使用Ant Design Mobile作为UI框架  
> 支持css modules，必须是src目录下以.modules.css结尾的文件

## Branch list
> 1、[master](https://github.com/jekorx/react-cli/tree/master)，主分支，默认分支，基础使用  
> 2、[admin-cli](https://github.com/jekorx/react-cli/tree/admin-cli)，后台管理模版分支，使用antd  
> 3、[mobile-cli](https://github.com/jekorx/react-cli/tree/mobile-cli)，移动端模版分支，使用antd-mobile  

## Tech Stack
> 1、[antd-mobile](https://mobile.ant.design/docs/react/introduce-cn)，移动UI  
> 2、[axios](https://github.com/axios/axios)，基于Promise的HTTP客户端，用于浏览器和node.js  
> 3、[mobx](https://cn.mobx.js.org)，状态管理  
> 4、[mobx-react](https://github.com/mobxjs/mobx-react)，包含React组件包装器的包，用于将React与MobX相结合  
> 5、[prop-types](https://github.com/facebook/prop-types)，props变量类型检测  
> 6、[react](https://reactjs.org)  
> 7、[react-router](https://github.com/ReactTraining/react-router#packages)，react-router-dom自动引入react-router  
> 8、[react-loadable](https://github.com/jamiebuilds/react-loadable)，以组件为中心的代码分割和懒加载  
> 9、[react-app-rewired](https://github.com/timarney/react-app-rewired)，不使用eject，修改项目配置  
> 10、[react-hot-loader](https://github.com/gaearon/react-hot-loader)，热更新  
> 11、[styled-components](https://github.com/styled-components/styled-components)，使用标签模板来对组件进行样式化  

## Directory Structure
```bash
├─ .editorconfig # 编辑器配置
├─ .env.production # 自定义production的环境变量
├─ .eslintignore # 校验忽略
├─ .eslintrc.js # 校验配置
├─ .gitattributes # git属性
├─ .gitignore # git提交忽略
├─ config-overrides.js # react-app-rewired配置文件
├─ README.md
├─ package.json
├─ yarn.lock
├─ public # 静态资源
│    └─ index.html # 默认html模版
├─ build # 打包后目录
└─ src # 源代码
     ├─ api # 请求api
     │    └─ index.js # axios相关配置
     ├─ assets # 相关资源
     │    ├─ images # 资源图片
     │    └─ styles # 样式
     ├─ components # 自定义组件
     ├─ routes # 路由
     │    └─ index.js # 路由相关配置
     ├─ store # mobx
     │    └─ index.js # 整合
     ├─ layouts # 布局相关
     ├─ pages # 相关页面
     ├─ App.jsx # 根页面
     └─ index.js # 入口文件
```
