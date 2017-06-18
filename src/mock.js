// eslint-disable-next-line no-unused-vars
function switchTheme() {
    var liteTheme = document.getElementById('liteTheme');
    var darkTheme = document.getElementById('darkTheme');
    switchAttribute(liteTheme);
    switchAttribute(darkTheme);

    function switchAttribute(theme) {
        if (theme.hasAttribute('disabled')) {
            theme.removeAttribute('disabled')
        } else {
            theme.setAttribute('disabled', 'disabled');
        }
    }
}

function mock() {
  function Promise() {
    this.actions = [];
  }
  Promise.prototype = {
    then: function(resolve, reject) {
      this.actions.push({
        resolve: resolve,
        reject: reject
      });
    },
    resolve: function(val) {
      this.execute("resolve", val);
    },
    reject: function(ex) {
      this.execute("reject", ex);
    },
    // Private
    execute: function(which, arg) {
      this.then = which === "resolve" ? function(resolve, reject) {
        resolve && resolve(arg);
      } : function(resolve, reject) {
        reject && reject(arg);
      };
      this.resolve = this.reject =
        function() {
          throw new Error("Promise already completed.");
        };
      for (var i = 0; i < this.actions.length; ++i) {
        var action = this.actions[i];
        var then = action && action[which];
        if (then != null)
          then(arg);
      }
      delete this.actions;
    }
  };
  var fnMap = {};
  var api = {

    updateQDS: function (nodeRoute, data) {
      console.warn("update QDS-Data to " + nodeRoute + "with configuration " + JSON.stringify(data));
    },

    on: function(key, callback) {
      console.log('Register callback: ' + key);
      fnMap[key] = callback;
    },
    getAllQDSData: function() {

              var promise = new Promise();
              promise.resolve(
              [
                 {
                    "percentDeviationEnergyMax":100,
                    "pulseFrequenceAct":129,
                    "squarePulsePeakPower":0,
                    "pulsformOffset":0,
                    "amplificationLEM":1000,
                    "avgControllerAction":65535,
                    "percentDeviationEnergyMin":6.71E+16,
                    "pulseEnergyAvgCreate":4,
                    "pulseEnergyAvgAct":6.5468E+16,
                    "pulseEnergyMaxAct":1.3107E+16,
                    "energyLevel":0,
                    "pulseEnergyMinAct":2.1514E+16,
                    "squarePulseDurationNom":3.4464E+16,
                    "energyTolerance":0,
                    "pulseFrequenceNom":1,
                    "pulseCnt":201992,
                    "pulsePreSelCnt":0,
                    "shapedAvgPulsePowerNom":0,
                    "pulseModeNom":80,
                    "numberPulsesNom":0,
                    "timestamp":0,
                    "jobID":1,
                    "programNumber":7,
                    "errorCode":0,
                    "calcThreshold":14,
                    "rectangleAngle":14,
                    "rectangleHeight":4,
                    "rectangleWidth":5,
                    "rawAngle":1,
                    "area":4.1,
                    "numBlobs":12,
                    "rectangleYcol":1,
                    "rectangleXcol":1,
                    "t":0,
                    "quality":100,
                    "angle":4.1,
                    "y":1,
                    "x":1,
                    "smiley":1,
                    "picOverlay":null,
                    "picCamera":null,
                    "programName":null,
                    "serialNumber":null
                 }
           ]);
          return promise;
    },
    trigger: function(key, data) {
      if (!fnMap || !fnMap[key]) return;
      fnMap[key](data);
    }
  }
  return api;
}
