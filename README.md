# Nodejs test task

There is a simple express application with two api endpoints:
1. `/articles` - returns a list of articles
2. `/articles/statistics` - is not implemented yet, but it is supposed to return statistics about existing articles

Data source: local `./data/articles.js` file

## Problem statement
1. The data source file is corrupted and includes articles duplicates. The api should ignore the duplicates.
2. Implement `/articles/statistics endpoint to return number of created articles by month, year can be ignored for now e.g.:
```
{
 "December": 2,
 "October": 1
} 
```


## Application start

1. `npm install`
2. `npm start`
