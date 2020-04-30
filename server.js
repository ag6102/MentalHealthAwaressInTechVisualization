var express = require("express");
var app = express();

var compData = require("./data.json");
var Sentiment = require("sentiment");
var ml = require("ml-sentiment")();

var data = compData["2019"];
var count = {
    "Small Organizations": 0,
    "Medium Organizations": 0,
    "Large Organizations": 0,
    "Very-Large Organizations": 0,
    Unknown: 0,
};

var healthBenefitsCount;
var wordCloud = [];
var wordCloud1 = [];
var finalData = [];
for (i = 0; i < data.length; i++) {
    if (data[i]["a"] == "FALSE" && data[i]["c"] == "TRUE" && data[i]["e"]) {
        if (data[i]["b"] == "26-100")
            count["Small Organizations"] = count["Small Organizations"] + 1;
        else if (data[i]["b"] == "100-500")
            count["Medium Organizations"] = count["Medium Organizations"] + 1;
        else if (data[i]["b"] == "500-1000")
            count["Large Organizations"] = count["Large Organizations"] + 1;
        else if (data[i]["b"] == "More than 1000")
            count["Very-Large Organizations"] = count["Very-Large Organizations"] + 1;
        else count["Unknown"] = count["Unknown"] + 1;
        finalData.push(data[i]);
    }
}
var n = [],
    p = [];
finalData.forEach(function(row) {
    if (row["n"]) {
        var sentiment = new Sentiment();
        wordCloud1.push(ml.classify(row["n"] + row["q"]));
        wordCloud.push(sentiment.analyze(row["n"] + row["q"]));
    }
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/data", function(req, res) {
    res.json(finalData);
});

app.get("/count", function(req, res) {
    res.json(count);
});

app.get("/wordCloud", function(req, res) {
    res.json(wordCloud);
});
app.get("/wordCloud1", function(req, res) {
    res.json(wordCloud1);
});
app.get("/pastData", function(req, res) {
    res.json(compData);
});
app.use(express.static("public"));
const listener = app.listen(process.env.PORT, function() {
    console.log("Your app is listening on port " + listener.address().port);
});