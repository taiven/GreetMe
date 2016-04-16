import {Component} from 'angular2/core';


@Component({
    selector: 'GreetMe',
    template: `
                <editor>
                    <div id="editor">
                        <div id="DivToConvert">
                            <div class="greeting"><h1 id="GreetWordValue">{{Greeting}}</h1></div>
                            <div class="name"><h2 id="UpdateName">{{GreetingText}}</h2></div>
                        </div>
                    </div>
                </editor>
                <div id="tools">
    				<input id="greetText" type="text" (keyup)="UpdateGreeting($event, 'GreetingText')" placeholder="GreetMe" value=""/>
                    <select id="greeting" (change)="UpdateGreeting($event, 'Greeting')">
                        <option value="I'm">I'm</option>
                        <option value="Lets">Lets</option>
                        <option value="Hi">Hi</option>
                        <option value="Your">Your</option>
                        <option value="Love">Love</option>
                    </select>
                    <button id="generateImg" (click)="DivToImage()">Generate Image</button>
                    <a id="downloadImg" download="Facebook Cover.jpg">Download</a>
    				<footer id="footer">
						<div id="copyright"><a href="//taiven.github.io"></a></div>
                        <ul id="menu">
                            <li>Built by <a href="//taiven.github.io">Taiven Rumph</a></li>
					    </ul>
                    </footer>
				</div>`
})
export class GreetComponent {
    GreetingText: string = 'GreetMe';
    Greeting: string = "I'm";

    UpdateGreeting(event:any, type:string){
        if(type == "GreetingText"){
            if (event.target.value != '') {
                this.GreetingText = event.target.value;
                //console.log("GreetingText: " + this.GreetingText);
            } else {
                this.GreetingText = 'GreetMe';
            }
        }else if(type == "Greeting"){
            if (event.target.value != '') {
                this.Greeting = event.target.value;
                //console.log("Greeting: " + this.Greeting)
            } else {
                this.Greeting = "I'm";
            }
        }
    }


    DivToImage(element){
        element = document.getElementById('DivToConvert');
       html2canvas(element, {
           onrendered: function(canvas){
               //canvas is the final rendered <canvas> element
               let theCanvas = canvas;
               let width = 828;
               let height = 315;
               let type = "jpeg";
               //document.body.appendChild(canvas);

               //Convert and generate download link
               let JPG = Canvas2Image.convertToJPEG(canvas, width, height, type);
               //document.body.appendChild(canvas);
               //console.log("This should be url: " + JPG.src);
               //Clean up
               //document.body.removeChild(canvas);
               document.getElementById('generateImg').setAttribute("style", "display:none;");
               document.getElementById('downloadImg').setAttribute("style", "display:block;");
               document.getElementById('downloadImg').setAttribute("href", JPG.src);

           }
       });
    }
}