const router = require('express').Router();
const File = require('../models/file');


router.get('/:uuid', async(req, res) => {
    const file = await File.findOne({ uuid: req.params.uuid });
    if (!file) {
        return res.render('download', { error: "Link has been expiredd." });

    }

    const filePath = `${__dirname}/../${file.path}`;
    res.download(filePath); //download file in express by download method
});

module.exports = router;