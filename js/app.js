angular.module("app", []);

angular.module("app").controller("AppController", function () {

    var self = this;

    this.beautify = function () {
        var jsonData;
        try {
            jsonData = JSON.parse(self.json);
            self.json = JSON.stringify(jsonData, null, 4);
            self.valid = true;
        } catch (err) {
            self.valid = false;
        }
    }

    return this;

});