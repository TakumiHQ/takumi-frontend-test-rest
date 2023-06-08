# TAKUMI Frontend Tech Test

This test is composed of 2 applications, a server and a client, each are their own separate projects.

#

## Server

### `npm install`

Install dependencies.

### `npm start`

Runs the API server.\
Open [http://localhost:3001](http://localhost:3001) to view more information on the available endpoints.

#

## Client

### `npm install`

Install dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#

## The Test - what's required

We will only be touching the Client application for this test, you will see that some code has been added though some parts might not be complete. Feel free to change things as you see fit.

1. Set up the individual projects, make sure you have a running API server and can run and view the client application in the browser.
2. Add navigation routes (and how to reach them from the main menu) to the screens:
- `/brands`
- `/campaigns`
- `/influencers`
3. Fetch and render the lists of the brands, campaigns and influencers from the API.
4. Selecting an individual item from either of the lists above, should render more information from that item, look at the server endpoints to fetch more information on specific items.
5. Brands, Campaigns and Influencers have references to each other - a brand will contain references to the campaigns it manages, campaigns will reference the influencers that are part of that campaign, and influencers will also have references to which campaigns they are currently participating.
- Selecting one of these references should allow the user to see more information on that brand / campaign / influencer.
6. Build a few basic e2e tests, that test your navigation.