var async = require('async');
var mongoose = require('mongoose');

var Item = require('../lib/items.js');


var removeItems = function(done) {
  Item.remove({}, done);
};

var createItemOne = function(done) {
  Item.create({
    itemName: 'Nutiva Chia Seeds',
    description: 'Nutiva Chia seeds are sourced from organic farms and are some of the freshest chia seeds available on the market.',
    price: 11.00,
    photoURL: 'http://www.swansonvitamins.com/en_US/images/ItemImages_SW/images_Xl/NTV031_Xl.jpg',
    tags: ['food', 'health', 'organic']
  }, done);
};

var createItemTwo = function(done) {
  Item.create({
    itemName: 'Peace Lily',
    description: 'The famous Japanese Peace Lily has the unique power to create a serene and organic atmosphere in any home. Our peace lilies are grown outside and never treated with pesticides.',
    price: 21.00,
    photoURL: 'http://www.phoenixflowershops.com/images/item/zoom_smspath12032742155.jpg',
    tags: ['plants', 'flowering']
  }, done);
};

var createItemThree = function(done) {
  Item.create({
    itemName: 'Agarwood Essential Oil',
    description: 'Agarwood, also known as "oud" or "ouhd", is known for its distinctive oaky, rich, dark aroma.  ',
    price: 30.00,
    photoURL: 'http://www.raisethevibration.org/uploads/2/4/2/9/24293158/2793008.jpg',
    tags: ['plants', 'flowering']
  }, done);
};

var createItemFour = function(done) {
  Item.create({
    itemName: 'Bamboo Face Mask',
    description: 'Bamboo face mask will help you rejuvinate your body and soul, with its cleansing, moisturizing power',
    price: 10.00,
    photoURL: 'http://tshop.r10s.com/1340ab30-c117-11e2-91e6-005056bd2fd8/20130819/264bf0c5-5648-4667-8736-f63b0d2fed41.jpg',
    tags: ['face', 'beauty']
  }, done);
};

var createItemFive = function(done) {
  Item.create({
    itemName: 'Aloe face mask by Cala',
    description: 'The aloe plant is used as a moisturizing component in many skin products. For the maximum moisture in the shortest time, go with this face mask above all others',
    price: 10.00,
    photoURL: 'http://ecx.images-amazon.com/images/I/51mbpwEv-7L.jpg',
    tags: ['face', 'beauty']
  }, done);
};
var createItemSix = function(done) {
  Item.create({
    itemName: 'CloudBerries, 1/2 quart',
    description: 'Couldberries have become known for their incredible antioxidant powers. These sweet organic treats are the caviar of the berry department.',
    price: 30.00,
    photoURL: 'http://4.bp.blogspot.com/_m9kdpOnnN8U/THa4QuY5AfI/AAAAAAAAA4I/J1a5gCw3coM/s1600/T%C3%A4nndalen_025.JPG',
    tags: ['food', 'organic']
  }, done);
};
var createItemSeven = function(done) {
  Item.create({
    itemName: 'Succulents from NaturalImpact',
    description: 'Succulent plants have become a mainstay for the modern homeownre. Improve your rooms aesthetic with little effort with a colorful succulent from NaturalImpact',
    price: 10.00,
    photoURL: 'https://img1.etsystatic.com/000/0/6392296/il_fullxfull.326694537.jpg',
    tags: ['plants', 'cactus']
  }, done);
};
var createItemEight = function(done) {
  Item.create({
    itemName: 'Epic Bison Bacon Cranberry bar',
    description: 'The Bison Bacon bar delivers a substantial serving of our two most favorite meats; 100% grass fed and organic buffalo brilliantly combined with humanely certified uncured bacon.',
    price: 19.00,
    photoURL: 'https://epicbar.com/images/rotation/BisonBar.png',
    tags: ['plants', 'flowering']
  }, done);
};

var createItemNine = function(done) {
  Item.create({
    itemName: 'Plant Orb, Small',
    description: 'This plant sphere is 4" in diameter and contains a tiny desert ecosystem, complete with several small succulents growing inside. It is a fine addition to any plant collection.',
    price: 54.00,
    photoURL: 'https://img0.etsystatic.com/017/0/6040497/il_570xN.498291600_ajom.jpg',
    tags: ['plants', 'cactus']
  }, done);
};

var createItemTen = function(done) {
  Item.create({
    itemName: 'Bamboo Starter',
    description: 'This bamboo starter kit contains 3 young bamboo stalks growing in a rocky environment. Each of these stalks is capable of growing in soil and being the start of a full bamboo plant.',
    price: 40.00,
    photoURL: 'http://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/4494z.jpg',
    tags: ['plants', 'flowering']
  }, done);
};

var createItemEleven = function(done) {
  Item.create({
    itemName: 'Coffee Bar',
    description: 'This coffee bar from Newgrounds food is made from wholesome organic espresso beans and also fresh nuts and dates. An easy addition to your morning routine.',
    price: 1.00,
    photoURL: 'http://cdn.shopify.com/s/files/1/0761/5417/files/Screen_Shot_2015-04-28_at_11.09.50_PM_2048x2048.png?7452542591378038695',
    tags: ['food', 'organic']
  }, done);
};

var createItemTwelve = function(done) {
  Item.create({
    itemName: 'Sprouted Grain Organic Cereal',
    description: 'These sprouted grain oats are rich in flavor and nutrients, and can be a great replacement in a paleo diet. Enjoy them with milk and honey!',
    price: 10.00,
    photoURL: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQrcwuhTQV9VePSUyczqfAsKyntaa6TZIeMXJJ_72AuTbRgfjlz9zQiirRO9PpPMnvaWhjGRc5Q&usqp=CAE',
    tags: ['organic', 'food']
  }, done);
};

var createItemThirteen = function(done) {
  Item.create({
    itemName: 'Golda Sphere Soap',
    description: 'GOLDA Hiba Sphere Soap is a morning combination of Coconut, Palm and Olive Oils to help you rise and shine. With hydrating and conditioning properties from Jojoba, Avocado, Lemongrass, and Aomori Hiba essential oil, only found in 300 year old Aomori Hiba trees from Aomori, Japan.',
    price: 18.00,
    photoURL: 'http://static1.squarespace.com/static/53117544e4b0e36de2953df4/5311763ee4b02a8d250f65e3/545d26e1e4b08c4a3adb60d7/1415390950928/goldaspheresoap.jpg',
    tags: ['beauty', 'soap']
  }, done);
};

var createItemFourteen = function(done) {
  Item.create({
    itemName: 'Organic Raw Kale Chips',
    description: 'Kale is very high in beta carotene, vitamin K, and vitamin C, and is rich in calcium. Kale is a source of two carotenoids, lutein and zeaxanthin. Our Kale Chips are always fresh, and locally made.',
    price: 6.00,
    photoURL: 'http://www.wholefoodsmarket.com/sites/default/files/styles/large/public/wp-content/uploads/2011/10/kale-chips_0.jpg?itok=AdGDXAyT',
    tags: ['beauty']
  }, done);
};

var createItemFifteen = function(done) {
  Item.create({
    itemName: 'Pine Tar Shampoo',
    description: "Grandpa's Pine Tar Shampoo is safe, effective for all hair types. Our customers have described our pine tar shampoo as being helpful with various scalp irritations.",
    price: 5.00,
    photoURL: 'http://www.evitamins.com/images/products/1400/010486007103_1.jpg',
    tags: ['beauty']
  }, done);
};

async.series([
    removeItems,
    createItemOne,
    createItemTwo,
    createItemThree,
    createItemFour,
    createItemFive,
    createItemSix,
    createItemSeven,
    createItemEight,
    createItemNine,
    createItemTen,
    createItemEleven,
    createItemTwelve,
    createItemThirteen,
    createItemFourteen,
    createItemFifteen
  ],
  function(error) {
    if (error) {
      console.error(error);
    }
  }
);
