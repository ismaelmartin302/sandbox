import { Cursor } from "./scripts/cursor.js";
import { TransformScripts } from "./scripts/transformScripts.js";
const body = document.querySelector('body')
body.innerHTML = `
    <div id="test1">
        <button onclick="TransformScripts.encriptBasic(prompt('Dime una frase'))">Invertir order</button>
        </div>
        <div class="scrollBarPercentageIndicator">
    </div>
`;