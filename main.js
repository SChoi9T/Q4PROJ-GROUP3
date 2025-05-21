// ABELEDA JS

function ratingleona(){
	var score = document.getElementById('rating-leona').value;

	switch (score){
	case "1":
		document.getElementById('rate-score-leona').innerHTML ="1/5";
		break;

	case "2":
		document.getElementById('rate-score-leona').innerHTML ="2/5";
		break;

	case "3":
		document.getElementById('rate-score-leona').innerHTML ="3/5";
		break;

	case "4":
		document.getElementById('rate-score-leona').innerHTML ="4/5";
		break;

	case "5":
		document.getElementById('rate-score-leona').innerHTML ="5/5";
		break;

	default:
		document.getElementById('rate-score-leona').innerHTML ="0/5";

	}
}

// CHOI JS

function ratingchoi(){
	var score = document.getElementById('rating-choi').value;

	switch (score){
	case "1":
		document.getElementById('rate-score-choi').innerHTML ="1/5";
		break;

	case "2":
		document.getElementById('rate-score-choi').innerHTML ="2/5";
		break;

	case "3":
		document.getElementById('rate-score-choi').innerHTML ="3/5";
		break;

	case "4":
		document.getElementById('rate-score-choi').innerHTML ="4/5";
		break;

	case "5":
		document.getElementById('rate-score-choi').innerHTML ="5/5";
		break;

	default:
		document.getElementById('rate-score-choi').innerHTML ="0/5";

	}
}


// COTIOCO JS

function ratingsean(){
	var score = document.getElementById('rating-sean').value;

	switch (score){
	case "1":
		document.getElementById('rate-score-sean').innerHTML ="1/5";
		break;

	case "2":
		document.getElementById('rate-score-sean').innerHTML ="2/5";
		break;

	case "3":
		document.getElementById('rate-score-sean').innerHTML ="3/5";
		break;

	case "4":
		document.getElementById('rate-score-sean').innerHTML ="4/5";
		break;

	case "5":
		document.getElementById('rate-score-sean').innerHTML ="5/5";
		break;

	default:
		document.getElementById('rate-score-sean').innerHTML ="0/5";

	}
}


// ONG JS

function ratingong(){
	var score = document.getElementById('rating-ong').value;

	switch (score){
	case "1":
		document.getElementById('rate-score-ong').innerHTML ="1/5";
		break;

	case "2":
		document.getElementById('rate-score-ong').innerHTML ="2/5";
		break;

	case "3":
		document.getElementById('rate-score-ong').innerHTML ="3/5";
		break;

	case "4":
		document.getElementById('rate-score-ong').innerHTML ="4/5";
		break;

	case "5":
		document.getElementById('rate-score-ong').innerHTML ="5/5";
		break;

	default:
		document.getElementById('rate-score-ong').innerHTML ="0/5";

	}
}

// YAO JS

function ratingyao(){
	var score = document.getElementById('rating-yao').value;

	switch (score){
	case "1":
		document.getElementById('rate-score-yao').innerHTML ="1/5";
		break;

	case "2":
		document.getElementById('rate-score-yao').innerHTML ="2/5";
		break;

	case "3":
		document.getElementById('rate-score-yao').innerHTML ="3/5";
		break;

	case "4":
		document.getElementById('rate-score-yao').innerHTML ="4/5";
		break;

	case "5":
		document.getElementById('rate-score-yao').innerHTML ="5/5";
		break;

	default:
		document.getElementById('rate-score-yao').innerHTML ="0/5";

	}
}

// RATING JS
function rating(){
    var sang = document.getElementById('rating-choi').value;
    var sean = document.getElementById('rating-sean').value;
    var leona = document.getElementById('rating-leona').value;
    var chilli = document.getElementById('rating-ong').value;
    var harmony = document.getElementById('rating-yao').value;

    let total = parseInt(sang) + parseInt(sean) + parseInt(leona) + parseInt(chilli) + parseInt(harmony);
    let average = total / 5;
    let score = Math.round(average);

    let message = "";

    switch (score) {
        case 1:
            message = "1/5, Poor 😔";
            break;
        case 2:
            message = "2/5, Needs Improvement ☹️";
            break;
        case 3:
            message = "3/5, Satisfactory 😐";
            break;
        case 4:
            message = "4/5, Above Satisfactory 🙂";
            break;
        case 5:
            message = "5/5, Excellent 🤩";
            break;
        default:
            message = "0/5, No Rating Given 😭";
    }

    document.getElementById('average').innerHTML = `Overall Rating Average: ${message}`;
}
