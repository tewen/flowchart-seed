(function () {
    superagent.get('/data/sample.txt').end(function (err, res) {
        var diagram = flowchart.parse(res.text);
        diagram.drawSVG('diagram');
    });
})();