const mongoose = require('mongoose')

  const mongo_url  = process.env.MONGO_URI

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongo_url)
                .then(()=>console.log("database is connected"))
}
