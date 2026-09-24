let currentWeather = "";
let currentText = "";

const weatherData = {

    sunny: {
        title: "☀️ Sunny Weather",

        image:
        "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=900",

        english: {
            "10-12":
                "It is sunny today. The Sun gives us light and warmth. Wear a cap and drink enough water.",

            "13-17":
                "It is a sunny day. The Sun provides light and heat. Stay hydrated and protect yourself from too much sunlight.",

            "18+":
                "Sunny weather occurs when there are few clouds blocking sunlight. High temperatures may occur, so staying hydrated is important."
        },

        tamil: {
            "10-12":
                "இன்று வெயிலாக உள்ளது. சூரியன் நமக்கு வெளிச்சத்தையும் வெப்பத்தையும் தருகிறது. தொப்பி அணிந்து போதுமான தண்ணீர் குடிக்கவும்.",

            "13-17":
                "இன்று வெயிலான நாள். சூரியன் வெளிச்சத்தையும் வெப்பத்தையும் வழங்குகிறது. போதுமான தண்ணீர் குடித்து அதிக வெயிலில் இருந்து பாதுகாத்துக் கொள்ளுங்கள்.",

            "18+":
                "வானத்தில் மேகங்கள் குறைவாக இருக்கும்போது வெயிலான வானிலை ஏற்படுகிறது. அதிக வெப்பம் இருக்கக்கூடும் என்பதால் போதுமான தண்ணீர் குடிப்பது முக்கியம்."
        },

        safety:
            "Drink enough water and avoid staying under strong sunlight for a long time."
    },


    rainy: {
        title: "🌧️ Rainy Weather",

        image:
        "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=900",

        english: {
            "10-12":
                "It is raining today. Clouds are full of water. Take an umbrella when you go outside.",

            "13-17":
                "Rain occurs when water droplets in clouds become heavy and fall to the ground. Carry an umbrella if rain is expected.",

            "18+":
                "Rainfall occurs when condensed water droplets in clouds become sufficiently heavy to fall toward Earth's surface."
        },

        tamil: {
            "10-12":
                "இன்று மழை பெய்கிறது. மேகங்களில் நீர் நிறைந்துள்ளது. வெளியே செல்லும்போது குடையை எடுத்துச் செல்லுங்கள்.",

            "13-17":
                "மேகங்களில் உள்ள நீர்த்துளிகள் கனமாகும்போது அவை மழையாக பூமியில் விழுகின்றன. மழை எதிர்பார்க்கப்பட்டால் குடையை எடுத்துச் செல்லுங்கள்.",

            "18+":
                "மேகங்களில் சுருங்கிய நீர்த்துளிகள் போதுமான அளவு கனமாகும்போது அவை பூமியின் மேற்பரப்பில் மழையாக விழுகின்றன."
        },

        safety:
            "Carry an umbrella and be careful on wet and slippery roads."
    },


    cloudy: {
        title: "☁️ Cloudy Weather",

        image:
        "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=900",

        english: {
            "10-12":
                "The sky is cloudy today. Clouds cover much of the sky. It may rain later.",

            "13-17":
                "Cloudy weather occurs when many clouds cover the sky. Some cloudy days may also bring rain.",

            "18+":
                "Cloudy conditions occur when a large portion of the sky is covered by clouds formed from water droplets or ice crystals."
        },

        tamil: {
            "10-12":
                "இன்று வானம் மேகமூட்டமாக உள்ளது. மேகங்கள் வானத்தின் பெரும்பகுதியை மூடியுள்ளன. பின்னர் மழை பெய்யலாம்.",

            "13-17":
                "வானத்தில் அதிகமான மேகங்கள் காணப்படும்போது மேகமூட்டமான வானிலை ஏற்படுகிறது. சில நேரங்களில் மழையும் பெய்யலாம்.",

            "18+":
                "நீர்த்துளிகள் அல்லது பனித்துகள்களால் உருவான மேகங்கள் வானத்தின் பெரும்பகுதியை மூடும்போது மேகமூட்டமான நிலை ஏற்படுகிறது."
        },

        safety:
            "Keep an umbrella nearby if rain is possible."
    },


    thunderstorm: {
        title: "⚡ Thunderstorm",

        image:
        "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=900",

        english: {
            "10-12":
                "A thunderstorm can bring rain, lightning and thunder. Stay safely indoors.",

            "13-17":
                "Thunderstorms can produce heavy rain, lightning and thunder. Stay indoors and follow safety instructions.",

            "18+":
                "Thunderstorms are weather systems associated with lightning, thunder, rainfall and sometimes strong winds."
        },

        tamil: {
            "10-12":
                "இடியுடன் கூடிய மழையில் மழை, மின்னல் மற்றும் இடி ஏற்படலாம். பாதுகாப்பாக வீட்டிற்குள் இருங்கள்.",

            "13-17":
                "இடியுடன் கூடிய மழையில் கனமழை, மின்னல் மற்றும் இடி ஏற்படலாம். வீட்டிற்குள் இருந்து பாதுகாப்பு வழிமுறைகளைப் பின்பற்றுங்கள்.",

            "18+":
                "இடியுடன் கூடிய மழை என்பது மின்னல், இடி, மழை மற்றும் சில நேரங்களில் பலத்த காற்றுடன் தொடர்புடைய வானிலை அமைப்பாகும்."
        },

        safety:
            "During a thunderstorm, stay indoors and follow adult safety instructions."
    },


    windy: {
        title: "💨 Windy Weather",

        image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900",

        english: {
            "10-12":
                "It is windy today. Wind is moving air. Hold your things carefully when you are outside.",

            "13-17":
                "Windy weather happens when air moves from one place to another. Strong winds can move objects.",

            "18+":
                "Wind is the movement of air caused by differences in atmospheric pressure."
        },

        tamil: {
            "10-12":
                "இன்று காற்று அதிகமாக உள்ளது. காற்று என்பது நகரும் காற்றாகும். வெளியே செல்லும்போது பொருட்களை கவனமாக வைத்துக் கொள்ளுங்கள்.",

            "13-17":
                "காற்று ஒரு இடத்திலிருந்து மற்றொரு இடத்திற்கு நகரும்போது காற்றான வானிலை ஏற்படுகிறது. பலத்த காற்று பொருட்களை நகர்த்தலாம்.",

            "18+":
                "வளிமண்டல அழுத்தத்தில் ஏற்படும் வேறுபாடுகளால் காற்று ஒரு இடத்திலிருந்து மற்றொரு இடத்திற்கு நகர்கிறது."
        },

        safety:
            "Stay away from unstable objects and trees during strong winds."
    },


    hot: {
        title: "🔥 Hot Weather",

        image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900",

        english: {
            "10-12":
                "It is very hot today. Drink water and stay in a cool place.",

            "13-17":
                "Hot weather means the temperature is high. Drink enough water and avoid too much direct sunlight.",

            "18+":
                "Hot weather occurs when temperatures are significantly higher than usual. Hydration and heat protection are important."
        },

        tamil: {
            "10-12":
                "இன்று மிகவும் வெப்பமாக உள்ளது. தண்ணீர் குடித்து குளிர்ச்சியான இடத்தில் இருங்கள்.",

            "13-17":
                "வெப்பநிலை அதிகமாக இருக்கும்போது வெப்பமான வானிலை ஏற்படுகிறது. போதுமான தண்ணீர் குடித்து அதிக வெயிலைத் தவிர்க்கவும்.",

            "18+":
                "வழக்கத்தை விட வெப்பநிலை அதிகமாக இருக்கும்போது வெப்பமான வானிலை ஏற்படுகிறது. போதுமான நீர்ச்சத்து மற்றும் வெப்பத்திலிருந்து பாதுகாப்பு முக்கியம்."
        },

        safety:
            "Drink water regularly and take breaks from direct sunlight."
    },


    cold: {
        title: "❄️ Cold Weather",

        image:
        "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=900",

        english: {
            "10-12":
                "It is cold today. Wear warm clothes and keep yourself comfortable.",

            "13-17":
                "Cold weather means the temperature is low. Wear suitable warm clothing when going outside.",

            "18+":
                "Cold weather occurs when temperatures are relatively low. Appropriate clothing can help maintain body warmth."
        },

        tamil: {
            "10-12":
                "இன்று குளிராக உள்ளது. வெப்பமான ஆடைகளை அணிந்து வசதியாக இருங்கள்.",

            "13-17":
                "வெப்பநிலை குறைவாக இருக்கும்போது குளிரான வானிலை ஏற்படுகிறது. வெளியே செல்லும்போது பொருத்தமான வெப்பமான ஆடைகளை அணியுங்கள்.",

            "18+":
                "வெப்பநிலை குறைவாக இருக்கும்போது குளிரான வானிலை ஏற்படுகிறது. பொருத்தமான ஆடைகள் உடல் வெப்பத்தை பராமரிக்க உதவும்."
        },

        safety:
            "Wear suitable warm clothing and stay comfortable."
    }

};

function generateWeather() {

    let input = document
        .getElementById("weatherInput")
        .value
        .toLowerCase()
        .trim();

    let age = document.getElementById("age").value;
    let language = document.getElementById("language").value;

    if (input === "") {

        alert("Please enter a weather forecast first.");
        return;
    }

    if (
        input.includes("thunder") ||
        input.includes("lightning")
    ) {

        currentWeather = "thunderstorm";

    } else if (
        input.includes("rain") ||
        input.includes("raining") ||
        input.includes("rainy")
    ) {

        currentWeather = "rainy";

    } else if (
        input.includes("sun") ||
        input.includes("sunny")
    ) {

        currentWeather = "sunny";

    } else if (
        input.includes("cloud") ||
        input.includes("cloudy")
    ) {

        currentWeather = "cloudy";

    } else if (
        input.includes("wind") ||
        input.includes("windy")
    ) {

        currentWeather = "windy";

    } else if (
        input.includes("hot") ||
        input.includes("heat") ||
        input.includes("heatwave")
    ) {

        currentWeather = "hot";

    } else if (
        input.includes("cold") ||
        input.includes("cool")
    ) {

        currentWeather = "cold";

    } else {

        alert(
            "Sorry, I couldn't identify the weather condition.\n\nTry words such as sunny, rainy, cloudy, windy, hot, cold or thunderstorm."
        );

        return;
    }


    let data = weatherData[currentWeather];

    document.getElementById("weatherTitle").innerText =
        data.title;

    document.getElementById("weatherImage").src =
        data.image;

    document.getElementById("condition").innerText =
        data.title;

    if (language === "en") {

        currentText =
            data.english[age];

    } else {

        currentText =
            data.tamil[age];
    }

    document.getElementById("explanation").innerText =
        currentText;

    document.getElementById("safetyTip").innerText =
        data.safety;
}

function speakWeather() {

    if (currentText === "") {

        alert("Please generate a weather illustration first.");
        return;
    }

    window.speechSynthesis.cancel();


    let language =
        document.getElementById("language").value;


    let speech =
        new SpeechSynthesisUtterance(currentText);


    if (language === "ta") {

        speech.lang = "ta-IN";

    } else {

        speech.lang = "en-IN";
    }


    speech.rate = 0.9;
    speech.pitch = 1;

    let voices =
        window.speechSynthesis.getVoices();


    if (language === "ta") {

        let tamilVoice = voices.find(
            voice =>
                voice.lang.toLowerCase().includes("ta")
        );

        if (tamilVoice) {
            speech.voice = tamilVoice;
        }

    } else {

        let englishVoice = voices.find(
            voice =>
                voice.lang.toLowerCase().includes("en")
        );

        if (englishVoice) {
            speech.voice = englishVoice;
        }
    }


    window.speechSynthesis.speak(speech);
}

function stopSpeech() {

    window.speechSynthesis.cancel();
}

function clearWeather() {

    document.getElementById("weatherInput").value = "";

    document.getElementById("weatherTitle").innerText =
        "🌦️ Your Weather Illustration";

    document.getElementById("condition").innerText =
        "Enter a forecast to begin";

    document.getElementById("explanation").innerText =
        "Your weather explanation will appear here.";

    document.getElementById("safetyTip").innerText =
        "Weather safety information will appear here.";

    document.getElementById("weatherImage").src =
        "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=900";

    currentWeather = "";
    currentText = "";

    stopSpeech();
}

window.speechSynthesis.onvoiceschanged = function () {

    window.speechSynthesis.getVoices();

};