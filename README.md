# Ivy 的餐廳清單\_CRUD 版本

利用 Node.js 跟 Express 建立簡單的伺服器，使用 mongoDB 作為資料庫，並搭配 Bootstrap 打造出餐廳清單

## 本專案所使用的套件

- express
- express-handlebars
- body-parser
- mongoose
- nodemon

## 如何啟動本專案

### 從伺服器上取得本專案的 Repository

打開終端機，輸入以下指令：

```
$ git clone https://github.com/blue1152/restaurant_CRUD.git
```

### 安裝 Node.js，並透過 npm 來安裝 package.json 檔案所定義的相依套件

1. 在 my_restaurant 目錄下，透過 nvm 來安裝 Node.js 最新版本(10.15.0)：

```
$ nvm install 10.15.0
```

2. 到 package.json 所在的目錄下，輸入：

```
$ npm install
```

### 透過 nodemon 來啟動伺服器

打開終端機，輸入以下指令，並在瀏覽器檢視伺服器的回應：

```
$ nodemon app.js
```

## 餐廳清單的內容

- 導覽列、首頁具有搜尋框，可輸入關鍵字尋找餐廳
- 餐廳分類：每一間餐廳都有分類標籤
- 餐廳評價：以星等標示
- 使用者可以新增一家餐廳
- 使用者可以瀏覽一家餐廳的詳細資訊，包含地址、電話、簡介
- 使用者可以瀏覽全部所有餐廳
- 使用者可以修改一家餐廳的資訊
- 使用者可以刪除一家餐廳
