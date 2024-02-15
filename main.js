dog = 0;
cat = 0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/model.json', modalReady);
}

function modalReady() {
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);

        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_count").innerHTML = "";
        document.getElementById("result_label").innerHTML = "I can  hear- " + results[0].label
        document.getElementById("result_count").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")"; 

        if(results[0].label == "dog") {
            dog = dog++;
        }
        else{
            cat = cat++;
        }
    }
}