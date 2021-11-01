const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const ProjectModel = require('./model');

const uri =
  'mongodb+srv://user-nodejs07:JQABWfLLc5u5aNWc@cluster0.2a0hw.mongodb.net/dbprojects?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once('open', () => console.log('Connection to MongoDB established'));
connection.once('error', console.log);

const app = express();

app.get('/projects', async (req, res) => {
  /*   const listProjects = [
    {
      title: 'Activos Digitales',
      summary:
        'Página principal de la empresa que enlaza a otra páginas de la empresa',
      tooltip: 'Proyecto interno',
      active: true,
    },
    {
      title: 'Growth',
      summary:
        'Proyecto creado con la finalidad de apoyar a las iniciativas digitales de la empresa',
      tooltip: 'Proyecto interno',
      active: true,
    },
  ]; */
  const listProjects = await ProjectModel.find();
  res.json(listProjects);
});

const server = http.createServer(app);

/* const server = http.createServer((req, res) => {
  console.log('method', req.method);
  console.log('url', req.url);

  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('Hola mundo');
  res.end();
}); */

server
  .listen(3000)
  .on('listening', () => console.log('Server is running on port 3000'))
  .on('error', (err) => console.log(err));
