var Product = require("../models/product");

var mongoose = require("mongoose");

mongoose.connect("localhost:27017/shopping");

var products = [
  new Product({
    imagePath:
      "https://instagram.fath4-2.fna.fbcdn.net/vp/c06ac764307b16308568a61e22f80e85/5C7F3A50/t51.2885-15/e35/43914403_2211112399162814_80660397412365653_n.jpg",
    title: "Thumbnail label",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat, fugiat culpa debitis adipisci ad assumenda libero, fugit nobis recusandae non consectetur in aliquam distinctio! Sunt rem cumque ipsam voluptate!",
    price: 10
  }),
  new Product({
    imagePath:
      "https://instagram.fath4-2.fna.fbcdn.net/vp/c06ac764307b16308568a61e22f80e85/5C7F3A50/t51.2885-15/e35/43914403_2211112399162814_80660397412365653_n.jpg",
    title: "Thumbnail label",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat, fugiat culpa debitis adipisci ad assumenda libero, fugit nobis recusandae non consectetur in aliquam distinctio! Sunt rem cumque ipsam voluptate!",
    price: 10
  }),
  new Product({
    imagePath:
      "https://instagram.fath4-2.fna.fbcdn.net/vp/c06ac764307b16308568a61e22f80e85/5C7F3A50/t51.2885-15/e35/43914403_2211112399162814_80660397412365653_n.jpg",
    title: "Thumbnail label",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat, fugiat culpa debitis adipisci ad assumenda libero, fugit nobis recusandae non consectetur in aliquam distinctio! Sunt rem cumque ipsam voluptate!",
    price: 10
  }),
  new Product({
    imagePath:
      "https://instagram.fath4-2.fna.fbcdn.net/vp/c06ac764307b16308568a61e22f80e85/5C7F3A50/t51.2885-15/e35/43914403_2211112399162814_80660397412365653_n.jpg",
    title: "Thumbnail label",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat, fugiat culpa debitis adipisci ad assumenda libero, fugit nobis recusandae non consectetur in aliquam distinctio! Sunt rem cumque ipsam voluptate!",
    price: 10
  }),
  new Product({
    imagePath:
      "https://instagram.fath4-2.fna.fbcdn.net/vp/c06ac764307b16308568a61e22f80e85/5C7F3A50/t51.2885-15/e35/43914403_2211112399162814_80660397412365653_n.jpg",
    title: "Thumbnail label",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat, fugiat culpa debitis adipisci ad assumenda libero, fugit nobis recusandae non consectetur in aliquam distinctio! Sunt rem cumque ipsam voluptate!",
    price: 10
  })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
      done++;
      if(done === products.length) {
          exit();
      }
  });
}

function exit() {
    mongoose.disconnect();
}

