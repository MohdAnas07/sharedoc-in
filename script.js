const File = require('./models/file');
const fs = require('fs');
const connectDB = require('./config/db');
connectDB();


async function deleteData() {
    const pastDate = new Date(Date.now() - 24 * 60 * 60 * 1000); // - 24 hours
    const files = await File.find({ createdAt: { $lt: pastDate } });
    if (files.length) {
        for (const file of files) {
            try {
                fs.unlinkSync(file.path);
                await file.remove();
            } catch (err) {
                console.log(`Error while deleting filr : ${err}`);
            }
        }
    }
}

deleteData().then(() => {
    console.log('job done')
    process.exit();
})