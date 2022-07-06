const mongoose = require('mongoose')

const inventarisSchema = new mongoose.Schema({
    kode:{
        required: true,
        type: String
    },
    nama:{
        required: true,
        type: String
    },
    merk:{
        required: true,
        type: String
    },
    jumlah:{
        required: true,
        type: Number
    },
    foto:{
        required: true,
        type: String
    },
    keterangan:{
        required: true,
        type: String
    },
     
})

module.exports = mongoose.model('Inventaris',inventarisSchema,'inventaris')

