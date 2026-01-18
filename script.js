// Questions Vrai/Faux (15 questions)
const trueFalseQuestions = [
    { id: 1, question: "La base du système octal est 16.", type: "trueFalse", correct: false },
    { id: 2, question: "Un octet est composé de 8 bits.", type: "trueFalse", correct: true },
    { id: 3, question: "En hexadécimal, la lettre A représente la valeur 11.", type: "trueFalse", correct: false },
    { id: 4, question: "Le code ASCII de base représente les caractères sur 8 bits.", type: "trueFalse", correct: false },
    { id: 5, question: "Dans le code BCD, chaque chiffre décimal est transformé en binaire sur 4 bits.", type: "trueFalse", correct: true },
    { id: 6, question: "Un Mégaoctet (Mo) est égal à 1024 Ko.", type: "trueFalse", correct: true },
    { id: 7, question: "Le code Unicode utilise 8 bits pour représenter chaque caractère.", type: "trueFalse", correct: false },
    { id: 8, question: "La conversion d'un nombre hexadécimal en binaire se fait chiffre par chiffre.", type: "trueFalse", correct: true },
    { id: 9, question: "Le bit de parité en ASCII est obligatoirement le 8ème bit.", type: "trueFalse", correct: true },
    { id: 10, question: "Le système binaire utilise trois symboles : 0, 1 et 2.", type: "trueFalse", correct: false },
    { id: 11, question: "La base du système décimal est 8.", type: "trueFalse", correct: false },
    { id: 12, question: "La somme binaire de 1010 et 0101 donne 1111.", type: "trueFalse", correct: true },
    { id: 13, question: "En binaire, le bit de poids faible est le plus à gauche.", type: "trueFalse", correct: false },
    { id: 14, question: "Le système hexadécimal utilise les lettres de A à F.", type: "trueFalse", correct: true },
    { id: 15, question: "La conversion de (1011)₂ en décimal donne 11.", type: "trueFalse", correct: true }
];

// Questions à choix unique (15 questions)
const singleChoiceQuestions = [
    { id: 16, question: "Quel est le système de numération utilisé par les ordinateurs ?", type: "singleChoice", options: ["Décimal", "Hexadécimal", "Binaire", "Octal"], correct: 2 },
    { id: 17, question: "Un octet est composé de :", type: "singleChoice", options: ["4 bits", "8 bits", "16 bits", "32 bits"], correct: 1 },
    { id: 18, question: "Quelle est la base du système octal ?", type: "singleChoice", options: ["2", "8", "10", "16"], correct: 1 },
    { id: 19, question: "Quel est le plus grand chiffre utilisé en base hexadécimale ?", type: "singleChoice", options: ["8", "9", "E", "F"], correct: 3 },
    { id: 20, question: "Que représente un bit en informatique ?", type: "singleChoice", options: ["Un groupe de 8 octets", "L'unité de base de l'information", "Un mot de 16 bits", "Un type de mémoire"], correct: 1 },
    { id: 21, question: "Quelle est la valeur de (1010)₂ en décimal ?", type: "singleChoice", options: ["8", "10", "12", "14"], correct: 1 },
    { id: 22, question: "Quelle est la valeur de (A5)₁₆ en décimal ?", type: "singleChoice", options: ["100", "160", "165", "175"], correct: 2 },
    { id: 23, question: "Quel est le résultat de 1101 + 101 en binaire ?", type: "singleChoice", options: ["10010", "10000", "10110", "11110"], correct: 0 },
    { id: 24, question: "Quelle unité est plus grande que le gigaoctet (Go) ?", type: "singleChoice", options: ["Kilooctet (Ko)", "Mégaoctet (Mo)", "Téraoctet (To)", "Octet (o)"], correct: 2 },
    { id: 25, question: "Quelle est la principale utilisation du code ASCII ?", type: "singleChoice", options: ["Représenter les images", "Représenter les caractères", "Représenter les nombres", "Stocker des fichiers vidéo"], correct: 1 },
    { id: 26, question: "Quelle est la taille d'un mot mémoire sur une architecture 32 bits ?", type: "singleChoice", options: ["8 bits", "16 bits", "32 bits", "64 bits"], correct: 2 },
    { id: 27, question: "Quelle est la fonction du bit de parité en transmission de données ?", type: "singleChoice", options: ["Augmenter la vitesse", "Détecter les erreurs", "Réduire l'utilisation de la mémoire", "Améliorer la qualité vidéo"], correct: 1 },
    { id: 28, question: "Combien de valeurs différentes peut représenter un octet ?", type: "singleChoice", options: ["64", "256", "512", "1024"], correct: 1 },
    { id: 29, question: "Quelle est la valeur en décimal de (1111)₂ ?", type: "singleChoice", options: ["12", "14", "15", "16"], correct: 2 },
    { id: 30, question: "Combien de bits composent un mot de 4 octets ?", type: "singleChoice", options: ["16", "24", "32", "64"], correct: 2 }
];

// Questions à choix multiples (10 questions)
const multipleChoiceQuestions = [
    { id: 31, question: "Quelles propriétés s'appliquent au système hexadécimal ?", type: "multipleChoice", options: ["Il utilise 16 symboles différents", "Chaque chiffre représente 4 bits", "La conversion vers le binaire est simple", "Il utilise les lettres A à F"], correct: [0, 1, 2, 3] },
    { id: 32, question: "Pour le système octal :", type: "multipleChoice", options: ["Il utilise 8 symboles", "Les symboles vont de 0 à 7", "Chaque chiffre représente 3 bits", "Il est plus utilisé que l'hexadécimal"], correct: [0, 1, 2] },
    { id: 33, question: "Quelles affirmations sont vraies pour le binaire ?", type: "multipleChoice", options: ["Il n'utilise que 0 et 1", "Chaque position représente une puissance de 2", "L'addition se fait bit par bit avec retenue", "Il est à la base de tous les autres codes"], correct: [0, 1, 2, 3] },
    { id: 34, question: "Dans l'addition binaire :", type: "multipleChoice", options: ["Elle procède bit par bit", "Elle utilise des retenues", "1 + 1 donne 0 avec retenue de 1", "Elle suit les mêmes principes qu'en décimal"], correct: [0, 1, 2, 3] },
    { id: 35, question: "Pour la multiplication binaire :", type: "multipleChoice", options: ["Elle utilise des décalages", "Elle utilise des additions", "Le multiplicateur détermine les positions", "Elle est plus simple que la division"], correct: [0, 1, 2] },
    { id: 36, question: "Dans les conversions de base :", type: "multipleChoice", options: ["La division successive permet de convertir vers le binaire", "Les groupements facilitent la conversion binaire-hexadécimal", "Les restes donnent les chiffres du résultat", "L'ordre des restes est inversé"], correct: [0, 1, 2, 3] },
    { id: 37, question: "Pour le stockage des caractères :", type: "multipleChoice", options: ["ASCII utilise 7 ou 8 bits", "Un octet permet 256 caractères différents", "Les codes de contrôle ont une signification spéciale", "Les extensions permettent plus de caractères"], correct: [0, 1, 2, 3] },
    { id: 38, question: "Quels sont les systèmes de numération utilisés en informatique ?", type: "multipleChoice", options: ["Décimal", "Octal", "Hexadécimal", "Binaire"], correct: [0, 1, 2, 3] },
    { id: 39, question: "Quelles sont les caractéristiques du système binaire ?", type: "multipleChoice", options: ["Il utilise uniquement les symboles 0 et 1", "Chaque chiffre est appelé un bit", "Avec n bits, on peut former 2ⁿ nombres différents", "Le plus grand nombre sur n bits est 2ⁿ-1"], correct: [0, 1, 2, 3] },
    { id: 40, question: "Dans le code ASCII :", type: "multipleChoice", options: ["Les majuscules sont représentées par les codes 65 à 90", "Les minuscules sont représentées par les codes 97 à 122", "Les codes 0 à 31 sont des caractères de contrôle", "La différence entre une majuscule et sa minuscule est de 32"], correct: [0, 1, 2, 3] }
];

const allQuestions = [...trueFalseQuestions, ...singleChoiceQuestions, ...multipleChoiceQuestions];
let userAnswers = {};
let showResults = false;
let submitted = false; // Nouvelle variable pour bloquer après soumission

document.addEventListener('DOMContentLoaded', () => {
    renderSections();
    document.getElementById('submitContainer').classList.remove('hidden');
    updateProgress();
});

function renderSections() {
    const container = document.getElementById('sectionsContainer');
    container.innerHTML = '';
    container.appendChild(createSection("Questions Vrai/Faux", "7,5 points", trueFalseQuestions));
    container.appendChild(createSection("Questions à Choix Unique", "7,5 points", singleChoiceQuestions));
    container.appendChild(createSection("Questions à Choix Multiples", "5 points", multipleChoiceQuestions));
}

function createSection(title, points, questions) {
    const section = document.createElement('div');
    section.className = 'section';
    section.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">${title}</h2>
            <span class="section-points">${points}</span>
        </div>
    `;
    questions.forEach(q => section.appendChild(createQuestionCard(q)));
    return section;
}

function createQuestionCard(q) {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = `question-${q.id}`;

    let resultIcon = '';
    if (showResults) {
        const result = getQuestionResult(q);
        if (result === 'correct') {
            card.classList.add('correct');
            resultIcon = '<span class="result-icon">✅</span>';
        } else if (result === 'incorrect') {
            card.classList.add('incorrect');
            resultIcon = '<span class="result-icon">❌</span>';
        } else if (result === 'partial') {
            card.classList.add('partial');
            resultIcon = '<span class="result-icon">⚠️</span>';
        }
    }

    card.innerHTML = `
        <div class="question-header">
            <span class="question-number">${q.id}</span>
            <h3 class="question-text">${q.question}</h3>
            ${resultIcon}
        </div>
        <div class="options">${createOptionsHTML(q)}</div>
    `;
    return card;
}

function createOptionsHTML(q) {
    if (q.type === 'trueFalse') return createTrueFalseOptions(q);
    if (q.type === 'singleChoice') return createSingleChoiceOptions(q);
    if (q.type === 'multipleChoice') return createMultipleChoiceOptions(q);
}

function createTrueFalseOptions(q) {
    return [{ value: 'true', label: "Vrai" }, { value: 'false', label: "Faux" }].map(opt => {
        const optValue = opt.value === 'true';
        const isSelected = userAnswers[q.id] === optValue;
        const isCorrect = q.correct === optValue;
        
        let className = 'option-label';
        if (showResults || submitted) {
            className += ' disabled';
            if (isCorrect) className += ' correct-option';
            else if (isSelected) className += ' incorrect-option';
        } else if (isSelected) {
            className += ' selected';
        }

        return `
            <label class="${className}">
                <input type="radio" name="q${q.id}" value="${opt.value}" 
                    ${isSelected ? 'checked' : ''} ${showResults || submitted ? 'disabled' : ''}
                    onchange="handleTrueFalseChange(${q.id}, ${optValue})">
                <span class="option-text">${opt.label}</span>
                ${showResults && isCorrect ? '<span class="correct-indicator">✓ Bonne réponse</span>' : ''}
            </label>
        `;
    }).join('');
}

function createSingleChoiceOptions(q) {
    return q.options.map((option, idx) => {
        const isSelected = userAnswers[q.id] === idx;
        const isCorrect = q.correct === idx;
        
        let className = 'option-label';
        if (showResults || submitted) {
            className += ' disabled';
            if (isCorrect) className += ' correct-option';
            else if (isSelected) className += ' incorrect-option';
        } else if (isSelected) {
            className += ' selected';
        }

        return `
            <label class="${className}">
                <input type="radio" name="q${q.id}" value="${idx}"
                    ${isSelected ? 'checked' : ''} ${showResults || submitted ? 'disabled' : ''}
                    onchange="handleSingleChoiceChange(${q.id}, ${idx})">
                <span class="option-text">${option}</span>
                ${showResults && isCorrect ? '<span class="correct-indicator">✓ Bonne réponse</span>' : ''}
            </label>
        `;
    }).join('');
}

function createMultipleChoiceOptions(q) {
    return q.options.map((option, idx) => {
        const userAnswer = userAnswers[q.id] || [];
        const isSelected = userAnswer.includes(idx);
        const isCorrect = q.correct.includes(idx);
        
        let className = 'option-label';
        if (showResults || submitted) {
            className += ' disabled';
            if (isCorrect) className += ' correct-option';
            else if (isSelected) className += ' incorrect-option';
        } else if (isSelected) {
            className += ' selected';
        }

        return `
            <label class="${className}">
                <input type="checkbox" name="q${q.id}" value="${idx}"
                    ${isSelected ? 'checked' : ''} ${showResults || submitted ? 'disabled' : ''}
                    onchange="handleMultipleChoiceChange(${q.id}, ${idx})">
                <span class="option-text">${option}</span>
                ${showResults && isCorrect ? '<span class="correct-indicator">✓ Bonne réponse</span>' : ''}
            </label>
        `;
    }).join('');
}

function handleTrueFalseChange(qId, value) {
    if (submitted) return; // Bloquer si déjà soumis
    userAnswers[qId] = value;
    updateProgress();
}

function handleSingleChoiceChange(qId, value) {
    if (submitted) return; // Bloquer si déjà soumis
    userAnswers[qId] = value;
    updateProgress();
}

function handleMultipleChoiceChange(qId, value) {
    if (submitted) return; // Bloquer si déjà soumis
    if (!userAnswers[qId]) userAnswers[qId] = [];
    const idx = userAnswers[qId].indexOf(value);
    if (idx > -1) userAnswers[qId].splice(idx, 1);
    else userAnswers[qId].push(value);
    updateProgress();
}

function updateProgress() {
    const answered = Object.keys(userAnswers).filter(k => {
        const ans = userAnswers[k];
        return Array.isArray(ans) ? ans.length > 0 : ans !== undefined;
    }).length;

    const percent = (answered / allQuestions.length) * 100;
    document.getElementById('progressBar').style.width = `${percent}%`;
    document.getElementById('progressText').textContent = `${answered} / ${allQuestions.length} questions répondues`;
    
    const btn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    if (answered === allQuestions.length) {
        btn.disabled = false;
        btnText.textContent = '✅ Voir mes résultats';
    } else {
        btn.disabled = true;
        btnText.textContent = `Compléter toutes les questions (${allQuestions.length - answered} restantes)`;
    }
}

function getQuestionResult(q) {
    const ans = userAnswers[q.id];
    if (q.type === 'trueFalse' || q.type === 'singleChoice') {
        return ans === q.correct ? 'correct' : 'incorrect';
    }
    if (q.type === 'multipleChoice') {
        if (!ans || ans.length === 0) return 'incorrect';
        const sorted1 = [...ans].sort((a,b) => a-b).join(',');
        const sorted2 = [...q.correct].sort((a,b) => a-b).join(',');
        if (sorted1 === sorted2) return 'correct';
        return ans.some(a => q.correct.includes(a)) ? 'partial' : 'incorrect';
    }
}

function calculateScore() {
    if (submitted) return; // Empêcher une double soumission
    
    submitted = true; // Marquer comme soumis
    
    let correct = 0, partial = 0;
    allQuestions.forEach(q => {
        const res = getQuestionResult(q);
        if (res === 'correct') correct++;
        else if (res === 'partial') partial += 0.5;
    });

    const total = correct + partial;
    const percent = ((total / allQuestions.length) * 100).toFixed(1);
    const grade = ((total / allQuestions.length) * 20).toFixed(1);

    document.getElementById('scoreDisplay').textContent = `${total} / ${allQuestions.length}`;
    document.getElementById('percentage').textContent = `${percent}%`;
    document.getElementById('gradeDisplay').textContent = `${grade}/20`;

    showResults = true;
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('submitContainer').classList.add('hidden');
    renderSections();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetQuiz() {
    userAnswers = {};
    showResults = false;
    submitted = false; // Réinitialiser le blocage
    document.getElementById('results').classList.add('hidden');
    document.getElementById('submitContainer').classList.remove('hidden');
    renderSections();
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}