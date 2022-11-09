# WiE-API-Workshop

Welcome to the API workshop presented by StackAdapt! In this workshop you will get a crash course on APIs 101 and will be equiped to use APIs in your own projects. There are some links you will see on the slides during the presentation. All those links will be listed below as well as example code for writing requests in Javascript. 


## Install Postman
Please have postman installed and ready to go for this workshop. You can install postman [here](https://www.postman.com/downloads/).


## Spoonacular API Info
We will be using the spoonacular API as examples in this workshop. The documantation for their api can be found [here](https://spoonacular.com/food-api/docs)

You can either create your own profile and ApiKey or for the purpose of this workshop, you can use my ApiKey: `0e24609870c84901b83b80355954fd81`

If you decide to play around with the `Meal Planning` requests, you can either create your own user following the [steps listed in the doc](https://spoonacular.com/food-api/docs#Working-with-the-Meal-Planner) or use my user and hash:

username: `rheakm`

hash: `7541c966d819144e8927946e91e25b8a8c33c32b`


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

A complete example would look like:

For a GET request

```
fetch('https://api.spoonacular.com/food/ingredients/9266/information?'  + new URLSearchParams({
    apiKey: "0e24609870c84901b83b80355954fd81",
    amount: "1"
   })
)
 ```
 
 For a POST request
 ```
 fetch('https://api.spoonacular.com/mealplanner/rheakm/items?'  + new URLSearchParams({
    apiKey: "0e24609870c84901b83b80355954fd81",
    hash: "7541c966d819144e8927946e91e25b8a8c33c32b"
   }),
     {
      method: 'POST',
      body: JSON.stringify({
            "date": 1589500800,
            "slot": 1,
            "position": 0,
            "type": "INGREDIENTS",
            "value": {
                "ingredients": [
                    {
                        "name": "1 banana"
                    }
                ]
            }
        })
    }
)
 ```
## Public APIs
There are hundreds of free public APIs out there that you could use in this project or any future projects. Here is a github repo compiled of some of the more popular ones: [Public APIs repo](https://github.com/public-apis/public-apis)
