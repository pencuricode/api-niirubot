__path = process.cwd()

var express = require('express');
var router = express.Router();
var { exec } = require('child_process')
var fetch = require('node-fetch')
var fs = require('fs')

async function getBuffer(url) {
  he = await fetch(url).then(c => c.buffer())
   return he
}
async function getJson(url) {
  he = await fetch(url).then(c => c.json())
   return he
}
async function getRandom(nans) {
  he = nans[Math.floor(Math.random() * nans.length)]
   return he
}


router.all('/nahida', async (req, res) => {
  try {
  json = JSON.parse(fs.readFileSync(__path + '/lib/nahida.json').toString())
  random = json[Math.floor(Math.random() * json.length)]
  res.send({ status: 200, url: random })
  } catch (e) {
  res.send({ status: 400, response: 'Server Error!', err: e.toString() })
  }
  })

router.all('/kisaki', async (req, res) => {
  try {
  json = JSON.parse(fs.readFileSync(__path + '/lib/kisaki.json').toString())
  random = json[Math.floor(Math.random() * json.length)]
  res.send({ status: 200, url: random })
  } catch (e) {
  res.send({ status: 400, response: 'Server Error!', err: e.toString() })
  }
  })

router.all('/bochi', async (req, res) => {
  try {
  json = JSON.parse(fs.readFileSync(__path + '/lib/bochi.json').toString())
  random = json[Math.floor(Math.random() * json.length)]
  res.send({ status: 200, url: random })
  } catch (e) {
  res.send({ status: 400, response: 'Server Error!', err: e.toString() })
  }
  })

router.all('/nun', async (req, res) => {
  try {
  json = JSON.parse(fs.readFileSync(__path + '/lib/nun.json').toString())
  random = json[Math.floor(Math.random() * json.length)]
  res.send({ status: 200, url: random })
  } catch (e) {
  res.send({ status: 400, response: 'Server Error!', err: e.toString() })
  }
  })

 router.all('/loli', async (req, res) => {
   try {
   json = JSON.parse(fs.readFileSync(__path + '/lib/lolis.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.send({ status: 200, url: random })
   } catch (e) {
   res.send({ status: 400, response: 'Server Error!', err: e.toString() })
   }
   })

 router.all('/shota', async (req, res) => {
   try {
   json = JSON.parse(fs.readFileSync(__path + '/lib/shotas.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.send({ status: 200, url: random })
   } catch (e) {
   res.send({ status: 400, response: 'Server Error!', err: e.toString() })
   }
   })

   router.all('/nsfwloli', async (req, res) => {
   try {
   json = JSON.parse(fs.readFileSync(__path + '/lib/nsfwlolis.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.send({ status: 200, url: random })
   } catch (e) {
   res.send({ status: 400, response: 'Server Error!', err: e.toString() })
   }
   })



   router.all('*', async (req, res) => {
   res.status(404).json({
            status:404,
            error: 'Page you are looking for is not found'
        })
})
  

module.exports = router
