const mongoose = require("mongoose");

require("../apps/models/category");
require("../apps/models/product");

const uris = "mongodb://localhost:27017/vietpro_mongodb";

mongoose.connect(uris);
