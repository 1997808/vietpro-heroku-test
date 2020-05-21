const mongoose = require("mongoose");

require("../apps/models/category");

const uris = "mongodb://localhost:27017/vietpro_mongodb";

mongoose.connect(uris);
