
---

# 🐾 Pet Adoption Platform

一个基于 **React + Node.js + Express + MongoDB + Firebase** 的全栈宠物领养平台，用于宠物信息展示、领养申请与捐赠活动管理。

> 🎓 项目用途：软件工程课程作业 + 全栈开发练习 + React 工程结构学习

---

## 📌 项目简介

Pet Adoption Platform 是一个完整的宠物领养系统，支持用户浏览宠物信息、提交领养申请、参与捐赠活动，并提供后台管理功能。

系统采用前后端分离架构，实现了基础的用户认证、数据管理与权限控制流程。

本项目基于 GitHub 开源项目二次开发，再次感谢原作者。✨✨✨

---

## 🏗️ 技术架构

```
用户浏览器
   ↓
React (Vite 前端)
   ↓ axios / fetch
Express (Node.js 后端 API)
   ↓
MongoDB  / Firebase
```

---

## ⚙️ 技术栈

### 前端

* React
* Vite
* React Router
* Tailwind CSS
* DaisyUI

### 后端

* Node.js
* Express
* MongoDB

### 认证系统

* Firebase Authentication

---

## ✨ 功能模块

### 👤 用户端

* 注册 / 登录
* 浏览宠物列表
* 查看宠物详情
* 提交领养申请
* 参与捐赠活动

### 🛠️ 管理端

* 用户管理
* 宠物信息管理
* 领养申请审核
* 捐赠活动管理

---

## 🧠 数据库设计（简要）

MongoDB Collections：

* `pets`：宠物信息
* `PetCategory`：宠物分类
* `addtoadopt`：领养申请记录
* `adddonationcamp`：捐赠活动
* `users`：用户信息

---

## 📁 项目结构

```
Pet-Adoption-Platform/
│
├─ public/
├─ src/
│  ├─ assets/              # 静态资源
│  ├─ components/         # 公共组件
│  │  ├─ providers/       # 全局状态
│  │  ├─ router/          # 路由守卫
│  │  └─ schemas/         # 表单校验
│  │
│  ├─ firebase/           # Firebase 配置
│  ├─ hooks/              # 自定义 Hooks
│  ├─ layouts/            # 页面布局
│  ├─ pages/              # 页面模块
│  │  ├─ home/
│  │  ├─ login/
│  │  ├─ register/
│  │  ├─ petListing/
│  │  ├─ addpet/
│  │  ├─ donationCampaign/
│  │  └─ userDashboard/
│  │
│  ├─ shared/             # 通用组件
│  │  ├─ navbar/
│  │  └─ footer/
│  │
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
│
└─ README.md
```

---

## 🚀 前端运行

```bash
git clone https://github.com/Xia0-0/Pet-Adoption-Platform.git
cd Pet-Adoption-Platform
npm install
npm run dev
```

访问：

```
http://localhost:5173
```

---

## 🔐 Firebase 配置

路径：

```
src/firebase/firebase.config.js
```

替换为你的 Firebase 配置：

```js
const firebaseConfig = {
  apiKey: "your_key",
  authDomain: "your_domain",
  projectId: "your_project_id",
  storageBucket: "your_bucket",
  messagingSenderId: "your_sender_id",
  appId: "your_app_id"
};
```

## 🚀后端+数据库
https://github.com/Xia0-0/Pet-Adoption-Backend
需部署到本地运行
---



## 🔗 原项目地址

* [https://github.com/Rahidapriya/Pet-Adoption-Platform](https://github.com/Rahidapriya/Pet-Adoption-Platform)

---

## 📌 声明

本项目仅用于：

* 学习研究
* 软件工程课程作业
* React 全栈开发练习

禁止用于商业用途。

---


