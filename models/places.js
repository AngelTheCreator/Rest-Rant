const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
      name: { type: String, required: true },
      pic: { type: String, default: 'https://images.pexels.com/photos/3669638/pexels-photo-3669638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      cuisines: { type: String, required: true},
      city: { type : String, default: 'Anytown'},
      state: { type: String, default: 'USA'},
      founded: {
            type: Number,
            min: [803, 'Is it really that old?'],
            max: [new Date().getFullYear(), 'You made a time machine out of a DeLorean? Because this year is in the future']
      },
      comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

placeSchema.methods.showEstablished = function() {
      return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)