---
title: ProImage
nav:
  title: 快速上手
  path: /components
---

# ProImage

## 安装

```bash
yarn add @xmly/react-lazy-image
```

## 使用方式

和 `img` 标签用法一致，在 `img` 标签的基础上额外扩展了一些控制效果的属性

## 基本用法

<code src="./demos/Basic.tsx"></code>

## 不使用懒加载

保留 `webp格式`

<code src="./demos/UnLazy.tsx"></code>

## 不使用 webp

保留 `懒加载`

<code src="./demos/UnWebp.tsx"></code>

## 不使用懒加载、webp

<code src="./demos/UnAll.tsx"></code>

## 使用兜底图

<code src="./demos/InDefault.tsx"></code>

## API

| 属性       | 说明                           | 类型                         | 默认值 |
| ---------- | ------------------------------ | ---------------------------- | ------ |
| src        | 图片地址                       | `string`                     | -      |
| defaultSrc | 兜底图(图片加载失败时兜底显示) | `string`                     | -      |
| useLazy    | 是否使用图片懒加载             | `boolean`                    | `true` |
| useWebp    | 是否使用 webp 格式             | `boolean`                    | `true` |
| className  | 根节点 class 样式              | `string \| undefined`        | -      |
| style      | 根节点 style 样式              | `CSSProperties \| undefined` | -      |

## 说明

- `只有` 以下图片域名支持 `webp格式`：

  - `https://imagev2.test.ximalaya.com`
  - `https://imagev2.uat.xmcdn.com`
  - `https://imagev2.xmcdn.com`
  - `https://amimage.test.ximalaya.com`
  - `https://amimage.uat.xmcdn.com`
  - `https://amimage.xmcdn.com`

- 依赖项（请确保使用组件的项目安装了以下依赖）：

  - `"react": ">=16.8.0"`
  - `"react-dom": ">=16.8.0"`
