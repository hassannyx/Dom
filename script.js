const questions = [
  { question: "ما نوع الأجواء التي تفضلها؟", options: ["هادئة", "صاخبة", "عاطفية", "متمردة"] },
  { question: "ما أكثر ما يجذبك في الآخرين؟", options: ["الذكاء", "الجنون", "الهدوء", "الشغف"] },
  { question: "كيف تتصرف وقت الغضب؟", options: ["أصمت", "أنفجر", "أضحك", "أغادر"] },
  { question: "ما أكثر شيء تهتم به؟", options: ["الحرية", "الرومانسية", "النجاح", "المتعة"] },
  { question: "أين تفضل قضاء وقتك؟", options: ["المنزل", "الشارع", "مكان جديد", "مع الأصدقاء"] },
  { question: "كيف تصف نفسك؟", options: ["مستقل", "لعوب", "محبوب", "غامض"] },
  { question: "ما نوع الموسيقى المفضل لك؟", options: ["رومانسي", "هيب هوب", "روك", "كلاسيكي"] },
  { question: "هل تحب كسر القواعد؟", options: ["أحيانًا", "دائمًا", "نادراً", "لا"] },
  { question: "هل تعتبر نفسك شخصًا ذكيًا؟", options: ["نعم جدًا", "نوعًا ما", "أفضل من غيري", "لا يهمني"] },
  { question: "كيف تتعامل مع المشاكل؟", options: ["بهدوء", "بضحك", "أهرب", "أحلها"] },
  { question: "ما الشيء الذي تفتخر به؟", options: ["المنطق", "الكاريزما", "العاطفة", "الجنون"] },
  { question: "كيف تفضل الحب؟", options: ["بصمت", "بجنون", "بصدق", "بمغامرة"] },
  { question: "هل تحب أن تكون القائد؟", options: ["نعم", "لا", "أحيانًا", "حسب الموقف"] },
  { question: "أي نوع من الناس تكره؟", options: ["المزيفين", "الهادئين", "المتحكمين", "المملين"] },
  { question: "ما أكثر صفة تحبها في شريكك؟", options: ["اللطف", "القوة", "الذكاء", "الكوميديا"] },
];

const members = [
  { name: "الحسن البهادلي", traits: ["قائد", "كوميدي", "محترف", "مثقف"] },
  { name: "الكعبي", traits: ["لطيف", "عاطفي", "لعوب"] },
  { name: "حسن هادي", traits: ["شغوف", "لعوب", "طاقة"] },
  { name: "عيسى", traits: ["مستقل", "معارض", "لطيف"] },
  { name: "محمد حسين", traits: ["كوميدي", "مثقف", "اجتماعي"] },
  { name: "توم", traits: ["غبي", "كوميدي", "رومانسي"] },
  { name: "رضا", traits: ["صاخب", "كوميدي", "مثير", "باد بوي"] },
  { name: "احمد عباس", traits: ["هادئ", "زير نساء", "تنافسي"] },
  { name: "كرار عباس", traits: ["عاطفي", "ودود", "متفهم"] },
  { name: "حيدر", traits: ["تنافسي", "لامبالي", "رجولي"] },
  { name: "مصطفى", traits: ["لعوب", "رومانسي", "مثقف"] },
  { name: "جواد", traits: ["مستقل", "لعوب", "رومانسي"] },
  { name: "احمد خالد", traits: ["هادئ", "كعبي", "ذكي"] },
];

let currentQuestion = 0;
let answers = [];

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");

function showQuestion() {
  const q = questions[currentQuestion];
  questionContainer.textContent = q.question;
  optionsContainer.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      answers.push(option);
      nextQuestion();
    };
    optionsContainer.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").classList.add("hidden");
  resultContainer.classList.remove("hidden");

  // تحليل الإجابات العشوائي فقط للتجربة
  const match = members[Math.floor(Math.random() * members.length)];
  resultContainer.innerHTML = `أنت تطابق: <strong>${match.name}</strong>!`;
}

// أول تحميل
showQuestion();
