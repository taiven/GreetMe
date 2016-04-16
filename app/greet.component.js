System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var GreetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GreetComponent = (function () {
                function GreetComponent() {
                    this.GreetingText = 'GreetMe';
                    this.Greeting = "I'm";
                }
                GreetComponent.prototype.UpdateGreeting = function (event, type) {
                    if (type == "GreetingText") {
                        if (event.target.value != '') {
                            this.GreetingText = event.target.value;
                        }
                        else {
                            this.GreetingText = 'GreetMe';
                        }
                    }
                    else if (type == "Greeting") {
                        if (event.target.value != '') {
                            this.Greeting = event.target.value;
                        }
                        else {
                            this.Greeting = "I'm";
                        }
                    }
                };
                GreetComponent.prototype.DivToImage = function (element) {
                    element = document.getElementById('DivToConvert');
                    html2canvas(element, {
                        onrendered: function (canvas) {
                            //canvas is the final rendered <canvas> element
                            var theCanvas = canvas;
                            var width = 828;
                            var height = 315;
                            var type = "jpeg";
                            //document.body.appendChild(canvas);
                            //Convert and generate download link
                            var JPG = Canvas2Image.convertToJPEG(canvas, width, height, type);
                            //document.body.appendChild(canvas);
                            //console.log("This should be url: " + JPG.src);
                            //Clean up
                            //document.body.removeChild(canvas);
                            document.getElementById('generateImg').setAttribute("style", "display:none;");
                            document.getElementById('downloadImg').setAttribute("style", "display:block;");
                            document.getElementById('downloadImg').setAttribute("href", JPG.src);
                        }
                    });
                };
                GreetComponent = __decorate([
                    core_1.Component({
                        selector: 'GreetMe',
                        template: "\n                <editor>\n                    <div id=\"editor\">\n                        <div id=\"DivToConvert\">\n                            <div class=\"greeting\"><h1 id=\"GreetWordValue\">{{Greeting}}</h1></div>\n                            <div class=\"name\"><h2 id=\"UpdateName\">{{GreetingText}}</h2></div>\n                        </div>\n                    </div>\n                </editor>\n                <div id=\"tools\">\n    \t\t\t\t<input id=\"greetText\" type=\"text\" (keyup)=\"UpdateGreeting($event, 'GreetingText')\" placeholder=\"GreetMe\" value=\"\"/>\n                    <select id=\"greeting\" (change)=\"UpdateGreeting($event, 'Greeting')\">\n                        <option value=\"I'm\">I'm</option>\n                        <option value=\"Lets\">Lets</option>\n                        <option value=\"Hi\">Hi</option>\n                        <option value=\"Your\">Your</option>\n                        <option value=\"Love\">Love</option>\n                    </select>\n                    <button id=\"generateImg\" (click)=\"DivToImage()\">Generate Image</button>\n                    <a id=\"downloadImg\" download=\"Facebook Cover.jpg\">Download</a>\n    \t\t\t\t<footer id=\"footer\">\n\t\t\t\t\t\t<div id=\"copyright\"><a href=\"//taiven.github.io\"></a></div>\n                        <ul id=\"menu\">\n                            <li>Built by <a href=\"//taiven.github.io\">Taiven Rumph</a></li>\n\t\t\t\t\t    </ul>\n                    </footer>\n\t\t\t\t</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], GreetComponent);
                return GreetComponent;
            }());
            exports_1("GreetComponent", GreetComponent);
        }
    }
});
//# sourceMappingURL=greet.component.js.map