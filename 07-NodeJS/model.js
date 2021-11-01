const mongoose = require('mongoose');

const project = new mongoose.Schema(
  {
    title: String,
    summary: String,
    tooltip: String,
    active: Boolean,
  },
  { collection: 'project' }
);

const model = mongoose.model('project', project);

module.exports = model;
