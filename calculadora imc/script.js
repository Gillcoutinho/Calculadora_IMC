const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    /* Previne o comportamento padrão do evento submit do JS, ou seja,
    impede o recarregamento da página */
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        let description = '';

        value.classList.add('attention');
        
        document.getElementById('infos').classList.remove('hidden');
    
        if (bmi < 18.5){
            description = 'Cuidado! Se bater um vento tu voa!';
        } 

        else if (bmi >= 18.5 && bmi <= 25) {
            description = "Ta de boas!";
            value.classList.remove('attention');
            value.classList.add('normal');
        }

        else if (bmi > 25 && bmi <= 30) {
            description = "Cuidado! Já já tu rola!";
        }

        else if (bmi > 30 && bmi <= 35) {
            description = "Cuidado! Ta gordo demais fi!";
        }

        else if (bmi > 35 && bmi <= 40) {
            description = "Cuidado! gordura severa bbb!";
        }

        else {
            description = "Cuidado! regressiva pro fim morbida!";
        }

        value.textContent = bmi.replace('.', ',');
        document.getElementById('description').textContent = description;
    }
});

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
});