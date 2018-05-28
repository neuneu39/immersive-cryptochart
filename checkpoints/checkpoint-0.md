# Checkpoint 0 (１日目）

* We’re practicing what we already know:
  * Wireframing
  * Specification
  * Creating VueJS components
  * Managing data in a parent component
  * Writing methods and functions to help manage data
  * Passing down data into children components

* We’re going to learn these new things:
  * Using a third-party API
  * Using a third-party VueJS component (vue-chartjs)

There’s only a couple of **truly** new things you are tackling. Most of this, you’ve already done before!

## テックメンターが下記の項目を実装します：

* [ ] [Live] Demo the app
  * [ ] Show the data points (the chart is showing one day’s worth of data points, in one minute increments)
* [ ] [Live] Wireframe with component boxes
* [ ] [Explain] APIS:
  * [ ] https://min-api.cryptocompare.com/
    * [ ] Currency Comparison (BTC & JPY)
    * [ ] Show the API explorer to display how it works; Leave it to students to figure out the exact API call they need to make.
    * [ ] [Explain] Get the _24 Hour Change_, _24 Hour High_, _24 Hour Low_, & _Chart Data_ from this API.
    * [ ] [Explain] What is EPOCH timestamp?
  * [ ] https://coinmarketcap.com/api/
    * [ ] [Explain] Get the _24 Hour Volume_ and _Market Cap_.

## 下記の項目を実装してみよう：

* [ ] Create the VueJS Components from the wireframe (We don’t have data yet - that’s okay.)
  * [ ] Add very basic styling to make the app layout
  * [ ] Add unit tests to test that the components are rendering (See `test/unit/specs/DashBoard.spec.js` for an example)
    * [ ] Run the test cases using `npm test`
* [ ] Learn how to use the API with the API Explorers:
  * [ ] https://min-api.cryptocompare.com/
    * **TIP**: Always be focused on what you need from the API.
    * **TIP**: API Explorers are typically organized by “category”. Find the category that is relevant to the data you need.
    * **TIP**: We need 1440 data points. One for every minute in 24 hours.
  * [ ] https://coinmarketcap.com/api/
    * There is no API Explorer for this API, but there’s only about 4 kinds of requests you can make. Use “cmd + f” to find what you need.
* [ ] Write down the 2 API calls that you need to make.
* [ ] If you have extra time:
  * [ ] Read about [Fetch](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)
  * [ ] Read about [Promises](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)
