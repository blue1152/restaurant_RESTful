const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Res = require("./models/res");
const methodOverride = require("method-override");

// setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// 設定 method-override
app.use(methodOverride("_method"));

// setting static files
app.use(express.static("public"));

// 設定 bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// db setting
mongoose.connect("mongodb://localhost/restaurants", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("mongodb error!");
});

db.once("open", () => {
  console.log("mongodb connected!");
});

// setting routes
app.get("/", (req, res) => {
  Res.find((err, restaurants) => {
    if (err) return console.error(err);
    return res.render("index", { restaurants: restaurants }); // 將資料傳給 index
  });
});
//搜尋框
app.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  const keywordRegex = new RegExp(keyword, "i"); //正規表達式
  Res.find(
    {
      $or: [
        { name: { $regex: keywordRegex, $options: "$i" } },
        { category: { $regex: keywordRegex } }
      ]
    },
    (err, restaurants) => {
      if (err) return console.error(err);
      return res.render("index", { restaurants, keyword });
    }
  );
});
// 新增一筆的頁面
app.get("/restaurants/new", (req, res) => {
  res.render("new");
});
// 顯示一筆詳細內容
app.get("/restaurants/:id", (req, res) => {
  Res.findById(req.params.id, (err, restaurants) => {
    if (err) return console.error(err);
    return res.render("detail", { restaurants: restaurants });
  });
});
// 新增一筆
app.post("/restaurants", (req, res) => {
  const restaurant = new Res({
    name: req.body.name,
    en_name: req.body.en_name,
    category: req.body.category,
    image: req.body.image,
    location: req.body.location,
    phone: req.body.phone,
    google_map: req.body.google_map,
    rating: req.body.rating,
    description: req.body.description
  });
  restaurant.save(err => {
    if (err) return console.error(err);
    return res.redirect("/"); // 新增完成後，將使用者導回首頁
  });
});
// 修改頁面
app.get("/restaurants/:id/edit", (req, res) => {
  Res.findById(req.params.id, (err, restaurants) => {
    if (err) return console.error(err);
    return res.render("edit", { restaurants: restaurants });
  });
});
// 修改
app.put("/restaurants/:id/edit", (req, res) => {
  Res.findById(req.params.id, (err, restaurants) => {
    if (err) return console.error(err);
    restaurants.name = req.body.name;
    restaurants.en_name = req.body.en_name;
    restaurants.category = req.body.category;
    restaurants.image = req.body.image;
    restaurants.location = req.body.location;
    restaurants.phone = req.body.phone;
    restaurants.google_map = req.body.google_map;
    restaurants.rating = req.body.rating;
    restaurants.description = req.body.description;
    restaurants.save(err => {
      if (err) return console.error(err);
      return res.redirect(`/restaurants/${req.params.id}`);
    });
  });
});
// 刪除
app.delete("/restaurants/:id/delete", (req, res) => {
  Res.findById(req.params.id, (err, restaurants) => {
    if (err) return console.error(err);
    restaurants.remove(err => {
      if (err) return console.error(err);
      return res.redirect("/");
    });
  });
});

// listening
app.listen(3000, () => {
  console.log(`Express is listening on localhost`);
});
