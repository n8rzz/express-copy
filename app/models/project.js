var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: String,
    codes: String,
    manger: String,
    roles: String,
    start_date: Date,
    end_date: Date,
    team_members: Number,
    status: String,
    hours_needed: Number,
    type: String,
    notes: String
});

module.exports = mongoose.model('Project', ProjectSchema);