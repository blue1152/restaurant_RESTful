# Ivy的餐廳清單

利用 Node.js 跟 Express建立簡單的伺服器，並搭配 Bootstrap 打造出餐廳清單

## 本專案所使用的套件

* express
* express-handlebars
* nodemon

## 如何啟動本專案

### 從伺服器上取得本專案的Repository

打開終端機，輸入以下指令：
```
$ git clone https://github.com/blue1152/my_restaurant.git
```

### 安裝 Node.js，並透過 npm 來安裝package.json檔案所定義的相依套件

1. 在my_restaurant目錄下，透過 nvm 來安裝 Node.js最新版本(10.15.0)：
```
$ nvm install 10.15.0
```

2. 到package.json所在的目錄下，輸入：
```
$ npm install
```

### 透過 nodemon 來啟動伺服器

打開終端機，輸入以下指令，並在瀏覽器檢視伺服器的回應：
```
$ nodemon app.js
```

## 餐廳清單的內容

* 導覽列、首頁具有搜尋框，可輸入關鍵字尋找餐廳
* 餐廳分類：每一間餐廳都有分類標籤
* 餐廳評價：以星等標示
* 餐廳資料：點擊餐廳卡片，可以查看餐廳的詳細資料，包含地址、電話、簡介
