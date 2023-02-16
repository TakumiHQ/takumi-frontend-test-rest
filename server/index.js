const express = require('express')
const { faker } = require('@faker-js/faker')
const createError = require('http-errors')

const app = express()
const port = 3001

const createRandomBrand = () => ({
  id: faker.datatype.uuid(),
  name: faker.company.name(),
  logo: faker.image.business(300, 300, true),
});

const createRandomUser = () => ({
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  thumbnail: faker.image.avatar(),
  birthdate: faker.date.birthdate(),
  country: faker.address.country(),
})

const createRandomCampaign = () => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  brandId: '',
  influencers: [],
});

const createDB = () => {
  const brands = new Array(10).fill(null).map(() => createRandomBrand()); 
  const campaigns = new Array(50).fill(null).map(() => createRandomCampaign()); 
  const influencers = new Array(100).fill(null).map(() => createRandomUser());

  // attach brands and influencers to campaigns
  for (let c = 0; c < campaigns.length; c++) {
    const brandIdx = Math.floor(Math.random(brands.length - 1) * 10);
    campaigns[c].brandId = brands[brandIdx].id

    const randomUniqueUsers = influencers.filter(() => {
      const random = Math.floor(Math.random(influencers.length) * 1000);
       return random < influencers.length
    });
    campaigns[c].influencers = randomUniqueUsers;
  }

  // attach influencers to campaigns
  for (let c = 0; c < campaigns.length; c++) {
    const index = Math.floor(Math.random(brands.length - 1) * 10);
    campaigns[c].brandId = brands[index].id
  }

  return {brands, campaigns, influencers};
}

// create DB
const DB = createDB();


// GET
app.get('/all', (req, res) => {
  const json = JSON.stringify(DB)
  res.send(json)
})

app.param('brandId', (req, res, next, brandId) => {
  const result = DB.brands.find(item => item.id === brandId);
  if (result) {
    const json = JSON.stringify(result);
    res.send(json)
  } else {
    next(createError(404, 'failed to find brand'));
  }
})

app.param('campaignId', (req, res, next, campaignId) => {
  const result = DB.campaigns.find(item => item.id === campaignId);
  if (result) {
    const json = JSON.stringify(result);
    res.send(json)
  } else {
    next(createError(404, 'failed to find campaign'));
  }
})

app.param('influencerId', (req, res, next, influencerId) => {
  const result = DB.influencers.find(item => item.id === influencerId);
  if (result) {
    const json = JSON.stringify(result);
    res.send(json)
  } else {
    next(createError(404, 'failed to find influencer'));
  }
})

app.get('/brands', (req, res) => {
  const json = JSON.stringify(DB.brands)
  res.send(json)
})

app.get('/campaigns', (req, res) => {
  const json = JSON.stringify(DB.campaigns)
  res.send(json)
})

app.get('/influencers', (req, res) => {
  const json = JSON.stringify(DB.influencers)
  res.send(json)
})

app.get('/brands/:brandId', (req, res) => {
  res.send()
})

app.get('/campaigns/:campaignId', (req, res) => {
  res.send()
})

app.get('/influencers/:influencerId', (req, res) => {
  res.send()
})

app.get('/', (req, res) => {
  res.send('Hi There!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})