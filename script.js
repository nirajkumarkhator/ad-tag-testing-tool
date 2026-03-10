import { validateAdTag, detectAdSize, detectTrackingPixel } from "./modules/tagValidator.js";
import { renderAd } from "./modules/adPreview.js";
import { measureLoadTime } from "./modules/performance.js";

window.validateTag = function(){

let tag = document.getElementById("adTag").value;

let status = document.getElementById("status");

let result = validateAdTag(tag);

let size = detectAdSize(tag);

let pixel = detectTrackingPixel(tag);

if(result.valid){

status.innerText =
"Valid Tag - " + result.type +
" | Size: " + size +
" | " + pixel;

}
else{

status.innerText = "Invalid Ad Tag";

}

}

window.previewAd = function(){

let tag = document.getElementById("adTag").value;

let iframe = document.getElementById("adFrame");

renderAd(tag, iframe);

measureLoadTime(iframe, function(time){

document.getElementById("loadTime").innerText =
"Ad Load Time: " + time + " ms";

});

}

window.clearTag = function(){

document.getElementById("adTag").value = "";
document.getElementById("status").innerText = "";
document.getElementById("loadTime").innerText = "";
document.getElementById("adFrame").srcdoc = "";

}