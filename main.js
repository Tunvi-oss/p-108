function startClassifier()
{
 navigator.mediaDevices.getUserMedia({audio: true});
 classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8gScanOsz/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error , results){
    if (error){
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear -'+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -'+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+ramdom_number_r+")";

        img = document.getElementById('cat.gif');
        img1= document.getElementById('dog.gif');
        img2= document.getElementById('lion.gif');
        img3= document.getElementById('elephant.gif');

        if (results[0].label =="roaring"){
            img.src = 'lion.gif';
            img1.src = 'kitten.jfif';
            img2.src = 'dog.jpg';
            img3.src = 'elephant.jfif';
        } else if (results[0].label == "meowing"){
            img.src = 'lion.png';
            img1.src = 'cat.gif';
            img2.src = 'dog.jpg';
            img3.src = 'elephant.jfif';   
        } else if (results[0].label == "barking"){
            img.src = 'lion.png';
            img1.src = 'kitten.jfif';
            img2.src = 'dog.gif';
            img3.src = 'elephant.jfif';  
        } else{
            img.src = 'lion.png';
            img1.src = 'kitten.jfif';
            img2.src = 'dog.jpg';
            img3.src = 'elephant.gif';    
        }
 

    }
}