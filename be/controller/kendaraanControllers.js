const { Kendaraan } = require('../models')

module.exports = {
    create : async (request, h) => {
        try {
            let { jenis, konsumsiBbm, jadwalService, riwayatPemakaian } = request.payload
            await Kendaraan.create({
                jenis,
                konsumsiBbm,
                jadwalService,
                riwayatPemakaian
            }).code(200)
            return h.response({
                message: "sukses"
            })
        } catch (error) {
            return h.response({
                message: error.message
            }).code(500)
        }
    },
    read : async (request, h) => {

    },
    update : async (request, h) => {

    }, 
    delete : async (request, h) => {

    }
}