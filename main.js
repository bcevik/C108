function startClassification()
{
    navigator.mediaDevices.getUserMedia({  audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/N6CXzGl0g/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img =document.getElementById('alien1');
       
         
        if (results[0].label == "roar") {
            img.src = 'https://media.istockphoto.com/photos/lion-sitting-looking-away-panthera-leo-10-years-old-isolated-picture-id455663609?k=20&m=455663609&s=612x612&w=0&h=1J2LDKEn05YnOIm0XmZ69VUdH39KUGWfiBF1bEouNMo=';
           
        } else if (results[0].label == "meow") {
            img.src = 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
           
        } else if (results[0].label == "Bark") {
            img.src = 'https://www.k9web.com/wp-content/uploads/2020/12/beagle-basset-hound-mix-waiting-for-treat-780x780.jpg';
            
        }else{
            img.src = 'https://w7.pngwing.com/pngs/277/671/png-transparent-listening-computer-icons-information-others-text-logo-desktop-wallpaper.png';
            
        }

    }
}