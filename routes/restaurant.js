const express = require("express");
const router = express.Router();
const Res = require("../models/res");

// 新增一筆的頁面
router.get("/new", (req, res) => {
  res.render("new");
});
// 顯示一筆詳細內容
router.get("/:id", (req, res) => {
  Res.findById(req.params.id, (err, restaurants) => {
    if (err) return console.error(err);
    return res.render("detail", { restaurants: restaurants });
  });
});
// 新增一筆
router.post("/", (req, res) => {
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
router.get("/:id/edit", (req, res) => {
  Res.findById(req.params.id, (err, restaurants) => {
    if (err) return console.error(err);
    return res.render("edit", { restaurants: restaurants });
  });
});
// 修改
router.put("/:id/edit", (req, res) => {
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
router.delete("/:id/delete", (req, res) => {
  Res.findById(req.params.id, (err, restaurants) => {
    if (err) return console.error(err);
    restaurants.remove(err => {
      if (err) return console.error(err);
      return res.redirect("/");
    });
  });
});

// 設定路由模組
module.exports = router;
