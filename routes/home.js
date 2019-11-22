const express = require("express");
const router = express.Router();
const Res = require("../models/res");

// setting routes
router.get("/", (req, res) => {
  Res.find((err, restaurants) => {
    if (err) return console.error(err);
    return res.render("index", { restaurants: restaurants }); // 將資料傳給 index
  });
});
//搜尋框
router.get("/search", (req, res) => {
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

// 設定路由模組
module.exports = router;
