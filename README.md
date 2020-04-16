

##Project Description:

This is a first iteration POC for a client News Feed Website component. The app is made out of two react components: NewsFeedMain.jsx and NewsFeedSideBar.jsx.

The client will be able to add as many individual NewsFeedSideBar articles as they like. All of them will be formatted in a column along the right side of the screen. The area below the featured article can be used for additional content. As the app scales down to mobile sized, the NewsFeedMain component is hidden and the NewsFeedSideBar becomes the focal point (font/image size adjusted accordingly). All of the data for this application is being pulled from test_json_object.js. In production, this will be pulled from a news API.

Note: This application is not yet optimized for 'mid-sized' screens (tablets).


All CSS is modular:

NewsFeedMain.jsx -> NewsFeedMain.css (All classes in NewsFeedMain.jsx begin with 'newsFeedMain')

NewsFeedSideBar.jsx -> NewsFeedSideBar.css (All classes in NewsFeedSideBar begin with 'newsFeedSideBar')

Mobile Format -> MobileStyle.css

All CSS files are connected in App.js


##Installation Instructions

1. Clone this repo from GitHub.
2. Navigate to the local repo.
3. Run 'npm install'.
4. To run app: 'npm run start'.
5. The application should run on localhost:3000.
