const { model, Schema } = require('mongoose')

const PasteBinSchema = new Schema({
    content: {
        require: true,
        type: String
    },
    password: {
        type: String,
        default: null
    },
    actualContent: String,
    createdAt: { type:new Date(), expires: 30 }
}, {
    timestamps: true,
})
// PasteBinSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });


const PasteBin = model('PasteBin', PasteBinSchema)
module.exports = PasteBin


