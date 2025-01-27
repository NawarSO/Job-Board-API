const PORT = process.env.PORT|| 3000;
import app, {prisma} from './src/app.js'


app.listen(PORT, async () => {
    console.log(`server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    try {
     prisma.$connect();
    console.log("Database is connected");
    }
    catch(error) {
        console.log(error);
    }
  
});

