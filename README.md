# WiE-API-Workshop

Welcome to the API workshop presented by StackAdapt! In this workshop you will get a crash course on APIs 101 and will be equiped to use APIs in your own projects. There are some links you will see on the slides during the presentation. All those links will be listed below as well as example code for writing requests in Javascript. 


## Install Postman
Please have postman installed and ready to go for this workshop. You can install postman [here](https://www.postman.com/downloads/).


## Spoonacular API Info
We will be using the spoonacular API as examples in this workshop. The documantation for their api can be found [here](https://spoonacular.com/food-api/docs)

You can either create your own profile and ApiKey or for the purpose of this workshop, you can use my ApiKey: 
#### SESSION 1 
apiKey: `7ff942b15aa64c0b98ec8395ac4d7f3a`

#### SESSION 2
apiKey: `03dfdb08ac1a46dcb3d1aa8b75321a1c`

If you decide to play around with the `Meal Planning` requests, you can either create your own user following the [steps listed in the doc](https://spoonacular.com/food-api/docs#Working-with-the-Meal-Planner) or use my user and hash:

#### SESSION 1
username: `api1`

hash: `9477b97f7743e15819e7299bba312572a7fa8637`

#### SESSION 2
username: `api2`

hash: `0e67697a2ec89726b2343c8f83798fe26f0f2f1b`

## Javascript API request examples
In Javascript we send API requests using the `fetch` API. The fetch function takes in 2 parameters: `RequestInfo` and `RequestInit`.

The `RequestInfo` param consists of the URL or endpoint that we want to call. Eg:
```
https://api.spoonacular.com/recipes/random
```
We can then append query parameters to it by using `URLSearchParams. Eg:
```
'https://api.spoonacular.com/food/ingredients/9266/information?'  + new URLSearchParams({
    apiKey: "0e24609870c84901b83b80355954fd81",
    amount: "1"
   })
 ```
 NOTE: all params need to be appended by using `?` at the end.
 
 
 The `RequestInit` takes in the `body`, `method`, `header`, `mode`, etc of the request. You can see all the attributes by cmd + click `fetch` and then cmd + click `RequestInit`. We usually don't need to set `RequestInit` for GET requests but do need to set them for POST requests as we usually need a body. Eg:
```
  {
    method: 'POST',
    body: JSON.stringify({
        "name": "Rhea new meal plan template",
        "items": [
            {
                "day": 1,
                "slot": 1,
                "position": 0,
                "type": "RECIPE",
                "value": {
                    "id": 296213,
                    "servings": 2,
                    "title": "Spinach Salad with Roasted Vegetables and Spiced Chickpea",
                    "imageType": "jpg"
                }
            }
        ],
    })
  }
```

The final `fetch` function should be called as follows:
```
fetch(requestInfo, requestInit)
```

RUNNING THE PROJECT: since this is a basic HTML/Javascript project, you can simply open the `index.html` file in the web browser and refreshing it should reflect any of your changes.

Once you feel confident in your solution or feel stuck, you can visit the branches for a [GET request solution](https://github.com/rheakm/WiE-API-Workshop/tree/solutions-get) or a [POST request solution](https://github.com/rheakm/WiE-API-Workshop/tree/solutions-post).

## Public APIs
There are hundreds of free public APIs out there that you could use in this project or any future projects. Here is a github repo compiled of some of the more popular ones: [Public APIs repo](https://github.com/public-apis/public-apis)
