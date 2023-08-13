require('dotenv').config();
const server = require('./src/app.js');
//const { conn } = require('./src/db.js');
//const { PORT_SERVER } = process.env || 3004;
const { connectToDatabase} = require ("./src/dbMongodb.js")
const port = process.env.PORT_SERVER || 3004;

// Syncing all the models at once.
//conn.sync({ alter: true }).then(() => {
  //server.listen(PORT_SERVER, () => {
   // console.log(`Sever raised on port: $/. 
//{PORT_SERVER}. Enjoy It!`); 
// eslint-disable-line //no-console
//  });
//});
async function startServer() {
  try {
    const db = await connectToDatabase(); 
    console.log("Database connected:", db.databaseName);



    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
}

startServer();