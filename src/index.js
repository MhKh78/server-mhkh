// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./../client/components/Home').default;

import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  // Some logic to initialize
  // and load data into the store

  res.status(200).send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
