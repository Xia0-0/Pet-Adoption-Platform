# Pet Adoption Platform 🐾

## 项目简介

这是一个宠物领养平台项目，用户可以：

* 浏览宠物信息
* 提交领养申请
* 发起捐赠活动
* 管理自己发布的宠物
* 登录 / 注册账号

本项目基于 GitHub 开源项目二次开发，主要用于学习 React 前后端项目结构，以及完成大学软件工程课程作业。

---

# 二次开发内容

本项目基于原作者项目进行修改与学习：

* 前端页面汉化
* 替换为自己的 Firebase 身份认证
* 学习并修改后端 API
* 学习 MongoDB 数据库结构
* 熟悉 React 项目整体开发流程

仅供学习研究使用。

---

# 技术栈

## 前端 Frontend

* React
* Vite
* React Router

## UI 样式

* Tailwind CSS
* DaisyUI
* CSS

## 后端 Backend

* Node.js
* Express.js

## 数据库 Database

* MongoDB

## 用户认证 Authentication

* Firebase Authentication

## 支付功能

* Stripe

---

# 项目功能

## 用户功能

* 用户注册 / 登录
* 浏览宠物列表
* 查看宠物详情
* 提交领养申请
* 发起捐赠活动

## 管理功能

* 用户管理
* 宠物信息管理
* 领养申请管理
* 捐赠活动管理

---

# 项目运行

## 1. 克隆项目

```bash
git clone 你的仓库地址
```

---

## 2. 进入项目目录

```bash
cd Pet-Adoption-Platform
```

---

## 3. 安装依赖

```bash
npm install
```

---

## 4. 启动项目

```bash
npm run dev
```

---

## 5. 浏览器访问

Vite 默认地址：

```bash
http://localhost:5173
```

---

# Firebase 配置

项目使用 Firebase 进行身份认证。

配置文件位置：

```bash
src/firebase/firebase.config.js
```

需要替换为你自己的 Firebase 配置：

```js
const firebaseConfig = {
  apiKey: "你的key",
  authDomain: "你的域名",
  projectId: "你的项目id",
  storageBucket: "你的storage",
  messagingSenderId: "你的senderId",
  appId: "你的appId"
};
```

---

# 项目结构

```bash
Pet-Adoption-Platform/
│
├─ public/                 # 静态资源
├─ src/
│
├─ assets/                 # 图片资源
│
├─ components/             # 公共组件
│  ├─ providers/           # 全局状态管理
│  ├─ router/              # 路由守卫
│  └─ schemas/             # 表单校验
│
├─ firebase/               # Firebase 配置
│
├─ hooks/                  # 自定义 Hook
│
├─ layouts/                # 页面布局
│
├─ pages/                  # 页面模块
│  ├─ home/                # 首页
│  ├─ login/               # 登录页
│  ├─ register/            # 注册页
│  ├─ petListing/          # 宠物列表
│  ├─ addpet/              # 添加宠物
│  ├─ donationCampaign/    # 捐赠活动
│  └─ userDashboard/       # 用户后台
│
├─ shared/                 # 公共布局组件
│  ├─ navbar/              # 导航栏
│  └─ footer/              # 页脚
│
├─ App.jsx
├─ main.jsx                # 项目入口
└─ index.css
```

---

# 当前学习路线
ChatGPT/Codex + GitHub开源项目 + 自己改功能

目前主要学习：

## 第一阶段
* 项目本地运行
* 页面汉化
* 熟悉流程框架

## 第二阶段

* Firebase 用户认证
* MongoDB 数据库  （here）
* 后端 API

## 第三阶段
* 部署云端
* 修改优化 here

---

# 原项目地址

[Pet Adoption Platform](https://github.com/Rahidapriya/Pet-Adoption-Platform?utm_source=chatgpt.com)



---

# 在线演示

[Live Demo](https://pet-adoption-platform-cc33e.web.app/?utm_source=chatgpt.com)

---

# 声明

本项目仅用于：

* 学习研究
* 软件工程课程作业
* React 全栈开发练习

请勿用于商业用途。
