const express = reqire('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

//Body Parser middleware 

app.use(bodyParser.json());

