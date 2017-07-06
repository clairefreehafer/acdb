const express = require('express');
const router = express.Router();
const Airtable = require('airtable');

const base = new Airtable({apiKey: 'keyl8HK5S1NN1kX6e'}).base('appzFVaM08cbWOvJx');

/************************************/
/********** FURNITURE LIST **********/
/************************************/
router.get('/page/:pageNum', (req, res, next) => {
  base('Furniture').select({
    maxRecords: 25,
    view: 'Gallery – Alphabetical'
  })
  .eachPage(function page (records, fetchNextPage) {
    let furniture = [];
    records.forEach(record => {
      furniture.push({
        record: record.get('Name'),
        id: record.getId(),
        image: record.get('Image')
      });
    })

    res.send(furniture);

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    // fetchNextPage();

  }, function done (err) {
    if (err) { console.error(err); return; }
  });
})

/*******************************************/
/********** SINGLE FURNITURE PAGE **********/
/*******************************************/
router.get('/:id', (req, res, next) => {
  base('Furniture').find(req.params.id, function(err, record) {
    if (err) { console.error(err); return; }
    res.send(record);
  });
})
module.exports = router;
