# Veck IO - 产品需求文档（PRD）

## 版本信息
- 文档版本：v1.0
- 创建日期：2025-12-18
- 最后更新：2025-12-18
- 项目域名：https://veckio.online/

---

## 1. 项目概述

### 1.1 产品定位
Veck IO 是一个以多人第一人称射击（FPS）游戏为核心的小游戏聚合平台，主要面向喜欢射击、竞技类游戏的休闲玩家群体。通过提供高质量的在线游戏体验和相关内容，获取搜索流量。

### 1.2 一句话描述
基于 Veck.io 热门游戏流量红利，打造的多人FPS游戏聚合站点，通过 SEO 优化自然流量。

### 1.3 目标用户
- **核心用户**：12-25 岁的休闲游戏玩家
- **地理分布**：主要市场为美国，次要市场包括英语系国家
- **用户特征**：
  - 对FPS、射击类游戏感兴趣
  - 习惯在工作/学习间隙玩小游戏
  - 倾向于免费、即开即玩的游戏体验
  - 通过 Google 搜索发现游戏

---
## 2. 市场背景与机会

### 2.1 市场趋势分析

#### 搜索热度
- **关键词**：veck io
- **分类**：新兴热词
- **趋势**：2025年11月出现显著搜索量飙升
- **对比**： 整体热度类似于新兴 .io 游戏，如 Krunker.io，具有较大的流量潜力
- **Google Trends**：https://trends.google.com/trends/explore?date=now%207-d&q=veck%20io,krunker%20io

#### 热度爆发原因
1. **游戏更新**： Legion Games 于 2025 年 11 月推出新地图和武器更新
2. **社交媒体传播**：TikTok、YouTube 等平台出现大量游戏蒙太奇和教程视频
3. **病毒式传播**：流畅的移动机制和激烈对战引发网红和游戏博主参与
4. **玩家需求**：大量玩家搜索皮肤解锁、攻略和游戏信息

#### 主要需求市场
- **首要市场**：美国（占比最高）
- **次要市场**：英国、加拿大、澳大利亚等英语国家

### 2.2 竞品分析

#### 当前 SERP 排名（veck io）
1. **第一名**：Veck.io 官网
   - URL: https://veck.io/
   - 优势：官方域名，游戏即开即玩
2. **第二名**：Crazy Games 平台
3. **其他竞品**：Miniplay、Hot Games 等游戏平台

#### 竞品游戏类型
- **在线小游戏**：主要是多人FPS游戏（Veck.io、Krunker.io）
- **游戏集合**：Crazy Games 的 FPS 类别页面
  - URL: https://www.crazygames.com/t/first-person-shooter
  - 策略：聚合多个射击游戏

#### 内容趋势（YouTube）
- 最近爆款视频主题：运动教程、蒙太奇剪辑、游戏评测
- 内容形式：短视频（Shorts）+ 长视频教程
- 用户需求：发现新的FPS游戏和技巧

### 2.3 市场机会
✅ **搜索热度正在飙升**，流量获取成本低
✅ **当前排名第一的是官网**，非官方平台有排名机会
✅ **用户有扩展需求**，不仅限于 Veck.io 版本
✅ **域名精准匹配**，SEO 优势明显
✅ **内容扩展空间大**，可聚合相关FPS/射击游戏

---
## 3. 商业模式

### 3.1 站点类型
小游戏聚合站（Gaming Portal）


### 3.3 流量获取策略
1. **SEO 自然流量**（主要）
   - 核心关键词排名优化
   - 长尾关键词内容建设
2. **社交媒体流量**（辅助）
   - YouTube、TikTok 等平台引流
3. **外链建设**（长期）
   - 游戏聚合平台、论坛外链

### 3.4 数据监测指标
- Google Search Console（GSC）：搜索表现、点击率
- Google Analytics（GA）：用户行为、转化率
- Microsoft Clarity：用户热力图、录屏分析
- Google Adsense：广告收入、RPM、CTR

---
## 4. 功能需求

### 4.1 核心功能

#### 4.1.1 首页游戏嵌入
- **需求描述**：在首页嵌入 Veck.io 游戏
- **技术实现**：使用 iframe 嵌入游戏页面
- **游戏源**：<div id="game-container" class="css-vpq0rm"><iframe id="game-iframe" src="https://veck.io/?cg=true&amp;auto_play=true&amp;czyExpWeb2App=enabled&amp;czyGamepageswitcher_20251209=ineligible&amp;isNewUser=false" allow=" accelerometer; gyroscope; autoplay; payment; fullscreen; microphone; clipboard-read; clipboard-write 'self' https://veck.io/?cg=true&amp;auto_play=true&amp;czyExpWeb2App=enabled&amp;czyGamepageswitcher_20251209=ineligible&amp;isNewUser=false" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" allowfullscreen="true" data-testid="inner-iframe" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts allow-same-origin allow-downloads allow-popups-to-escape-sandbox" style="border: 0px; outline: 0px; background-color: rgb(255, 255, 255); width: 10px; height: 10px; min-width: 100%; min-height: 100%;"></iframe></div>

#### 4.1.2 游戏页面设计
**页面布局**：
```
[Header - Logo + Navigation]
[Game Title + Description]
[Game iFrame - Responsive]
[Game Instructions / Tips]
[Related Games Section]
[Footer - Links + SEO Text]
```

**必需元素**：
- 响应式游戏容器（自适应移动端）
- 全屏按钮
- 加载提示
- 游戏说明（How to Play）
- 分享按钮（社交媒体）

#### 4.1.3 相关游戏推荐
- **功能**：在主游戏下方展示相关FPS/射击游戏
- **数据源**：
  - Crazy Games: https://www.crazygames.com/t/first-person-shooter
- **展示数量**：首页 6-12 个相关游戏

### 4.2 内容功能

#### 4.2.1 游戏攻略/指南(置于首页)
**内容类型**：
- 游戏操作指南（How to Play）
- 运动技巧（Tips & Tricks）
- 地图攻略（Map Guide）
- 常见问题（FAQ）

**SEO 目标**：
- 覆盖长尾关键词
- 提升页面停留时间
- 增加内链建设机会

#### 4.2.2 游戏集合列表
- **参考**：Crazy Games 的 FPS 分类页
- **URL 结构**：`/games/fps`, `/games/shooter`, `/games/io`
- **功能**：游戏列表（侧边栏）