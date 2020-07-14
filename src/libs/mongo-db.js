const mongoose = require("mongoose");

require("../apps/models/category");
require("../apps/models/product");
require("../apps/models/user");
require("../apps/models/comment");

const uris = "mongodb://localhost:27017/vp_shop";

mongoose.connect(uris);
