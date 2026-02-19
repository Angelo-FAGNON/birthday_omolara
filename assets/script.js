

// ======================== AOS ========================
AOS.init({ once: true, offset: 80, easing: 'ease-out-cubic' });

// ======================== CONFETTI ========================
function launchConfetti() {
  const colors = ['#c9a84c','#e8c96d','#f5dfa0','#fff','#f59e0b'];
  function fire(particleRatio, opts) {
    confetti({ ...opts, origin: { y: 0.6 }, colors, particleCount: Math.floor(200 * particleRatio) });
  }

  if (window.innerWidth < 768) return;

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}

// Launch on load
window.addEventListener('load', () => {
  setTimeout(launchConfetti, 800);
  animateCounters();
});

// ======================== MUSIC ========================
let playing = false;
const audio = document.getElementById('bgMusic');
const player = document.getElementById('musicPlayer');
const label = document.getElementById('musicLabel');
const musicIcon = document.getElementById('musicIcon');
// audio.volume = 0.35;

// Auto-play on mobile devices
if (/Mobi|Android/i.test(navigator.userAgent)) {
  audio.play().catch(() => {});
  playing = true;
  player.classList.add('playing');
  label.textContent = 'En cours...';
  musicIcon.innerHTML = '<i class="fas fa-pause"></i>';
}

function toggleMusic() {
  if (playing) {
    audio.pause();
    playing = false;
    player.classList.remove('playing');
    label.textContent = 'Lire la musique';
    musicIcon.innerHTML = '<i class="fas fa-music"></i>';
  } else {
    audio.play().catch(() => {});
    playing = true;
    player.classList.add('playing');
    label.textContent = 'En cours...';
    musicIcon.innerHTML = '<i class="fas fa-pause"></i>';
  }
}

// ======================== COUNTERS ========================
function animateCounters() {
  const targets = [{ el: 'counter1', val: 1000 }, { el: 'counter2', val: 24 }, { el: 'counter3', val: 1000 }];
  targets.forEach(({ el, val }) => {
    let cur = 0;
    const step = val / 60;
    const timer = setInterval(() => {
      cur = Math.min(cur + step, val);
      document.getElementById(el).textContent = Math.floor(cur) + (val === 1000 ? '+' : '');
      if (cur >= val) clearInterval(timer);
    }, 25);
  });
}

// ======================== COUNTDOWN ========================
function updateCountdown() {
  const now = new Date();
  // Date cible : 18 février 2027
  const target = new Date(2027, 1, 18, 0, 0, 0); // mois = 1 → février (0 = janvier)
  
  const diff = target - now;

  if (diff <= 0) {
    // Si la date est passée
    document.getElementById('days').textContent = '000';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  document.getElementById('days').textContent = String(d).padStart(3, '0');
  document.getElementById('hours').textContent = String(h).padStart(2, '0');
  document.getElementById('minutes').textContent = String(m).padStart(2, '0');
  document.getElementById('seconds').textContent = String(s).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ======================== WISHES ========================
const defaultWishes = [
  { name: 'Mr Angelo', role: 'Dev Web', message: 'Heureux anniversaire à vous Miss Lara, May your best wishes come true and May this year be like IRA your Favourite Drink', date: '18/02/2026' },
  { name: 'Mr Bill', role: 'Admin Réseau', message: 'Joyeux anniversaire mademoiselle ADIKO @Omolara Yédidia , notre Chère AD de DIGIWEB, je vous souhaite un bonheur aussi rayonnant que le soleil😇 , Beaucoup de 18/02 dans votre vie', date: '18/02/2026' },
  { name: 'Miss Rouka', role: 'Dev Web', message: 'Joyeux anniversaire Mlle @Omolara Yédidia 🎂🎉; Je vous souhaite que du bonheur🎊', date: '18/02/2026' },
  { name: 'Mr Renaud', role: 'Dev Web', message: 'Joyeux anniversaire🎂🥳🎊 chère Madame AD alias Madame ADIKO d\'18/02/2026; Bien de choses à vous et beaucoup de succès dans vos projets🙏🏽.', date: '18/02/2026' },
  { name: 'Mr Hercule', role: 'Dev Web', message: 'Joyeux anniversaire chère Omolara, que cette journée soit pleine de bonheur et de réussite !', date: '18/02/2026' },
  { name: 'Mr Mouhid', role: 'Dev Web', message: 'Happy Born Day ! Have fun !', date: '18/02/2026' },
  { name: 'Mr Anthony', role: 'Comptable', message: 'Heureux anniversaire à vous, Madame Lara. Que cette journée soit une bénédiction pour vous !', date: '18/02/2026' },
  { name: 'Miss Paloma', role: 'Dev Web', message: 'Joyeux anniversaire à vous Miss @Omolara Yédidia 🥳🎉 Que tout vos meilleurs vœux se réalisent 🥰', date: '18/02/2026' },
  { name: 'Miss Serena', role: 'Dev Web', message: 'Ton énergie positive est contagieuse ! Merci de rendre chaque journée au bureau si agréable. Joyeux anniversaire !', date: '18/02/2026' },
  { name: 'Mr Etienne', role: 'Dev Web', message: 'Joyeux anniversaire à vous, Miss Lara. Que cette année soit remplie de succès et de bonheur !', date: '18/02/2026' },
  { name: 'Miss Laëla', role: 'CM', message: 'Je n\'ai jamais vu quelqu\'un coordonner autant de choses avec autant de sang-froid. Tu es exceptionnelle, Omolara !', date: '18/02/2026' },
  { name: 'Mr Magloire', role: 'Dev Web', message: 'Joyeux anniversaire à toi, Miss Lara. Que cette année soit remplie de succès et de bonheur !', date: '18/02/2026' },
  { name: 'Mr Emery', role: 'Dev Web', message: 'Joyeux anniversaire ! Bien de choses à vous et beaucoup de succès dans vos projets. Que vos meilleurs vœux se réalisent.', date: '18/02/2026' },
  { name: 'Mme TOSSAVI', role: 'Gérante', message: 'Joyeux anniversaire à toi, Miss Lara. Que cette nouvelle te soit souriante', date: '18/02/2026' },
  { name: 'Mr TOSSAVI', role: 'Promoteur', message: 'Que cette bougie t\'apporte le meilleur que tu souhaites, la santé, la sagesse et l\'accomplissement', date: '18/02/2026' },
];

function renderWishes(wishes) {
  const grid = document.getElementById('wishesGrid');
  grid.innerHTML = '';
  wishes.forEach((w, i) => {
    const initials = w.name.slice(0, 2).toUpperCase();
    const card = document.createElement('div');
    card.className = 'wish-card';
    card.style.animationDelay = (i * 0.05) + 's';
    card.innerHTML = `
      <div class="wish-author">
        <div class="wish-avatar">${initials}</div>
        <div>
          <div class="wish-name">${w.name}</div>
          <div class="wish-role">${w.role}</div>
        </div>
      </div>
      <div class="wish-message">${w.message}</div>
      <div class="wish-date"><i class="fas fa-calendar-day" style="color:var(--gold);margin-right:6px;font-size:11px;"></i>${w.date}</div>
    `;
    grid.appendChild(card);
  });
}

let allWishes = [...defaultWishes];
renderWishes(allWishes);

function addWish() {
  const name = document.getElementById('wishName').value.trim();
  const role = document.getElementById('wishRole').value.trim();
  const msg = document.getElementById('wishMessage').value.trim();
  if (!name || !msg) {
    alert('Veuillez renseigner votre prénom et votre message !');
    return;
  }
  const now = new Date();
  const date = now.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  allWishes.unshift({ name, role: role || 'Collègue', message: msg, date });
  renderWishes(allWishes);
  document.getElementById('wishName').value = '';
  document.getElementById('wishRole').value = '';
  document.getElementById('wishMessage').value = '';
  launchConfetti();
  document.getElementById('wishesGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ======================== QUIZ ========================
const quizData = [
  {
    q: "Quel est le poste d'Omolara Yédidia chez DigiWeb Sarl ?",
    opts: ["Directrice des Ventes", "Assistante de Direction", "Responsable Marketing", "Chef de Projet"],
    correct: 1,
    explain: "Omolara est bien notre précieuse Assistante de Direction !"
  },
  {
    q: "Quelle qualité définit le mieux Omolara selon ses collègues ?",
    opts: ["La rigueur et la bienveillance", "La sévérité", "L'indifférence", "La discrétion exclusive"],
    correct: 0,
    explain: "Sa rigueur combinée à sa bienveillance la rend unique !"
  },
  {
    q: "Comment Omolara est-elle décrite au sein de DigiWeb Sarl ?",
    opts: ["Une personne effacée", "Un pilier de l'équipe", "Une employée ordinaire", "Une personne distante"],
    correct: 1,
    explain: "Omolara est véritablement le pilier sur lequel repose DigiWeb !"
  },
  {
    q: "Qu'est-ce qu'Omolara apporte principalement à l'équipe ?",
    opts: ["De la complexité", "De l'énergie positive et du professionnalisme", "Des tensions", "De l'hésitation"],
    correct: 1,
    explain: "Son énergie positive et son professionnalisme sont ses marques de fabrique !"
  },
  {
    q: "Si Omolara était un élément naturel, ce serait lequel ?",
    opts: ["La tempête", "La lumière du soleil", "La pluie froide", "Le vent imprévisible"],
    correct: 1,
    explain: "Omolara est comme la lumière du soleil — elle réchauffe tout ce qu'elle touche !"
  }
];

let currentQ = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  const q = quizData[currentQ];
  document.getElementById('quizCounter').textContent = `Question ${currentQ + 1} / ${quizData.length}`;
  document.getElementById('quizText').textContent = q.q;
  document.getElementById('quizProgress').style.width = (currentQ / quizData.length * 100) + '%';
  const opts = document.getElementById('quizOptions');
  opts.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'quiz-option';
    div.innerHTML = `<div class="quiz-option-letter">${letters[i]}</div><span>${opt}</span>`;
    div.onclick = () => selectAnswer(i, div);
    opts.appendChild(div);
  });
  document.getElementById('quizFeedback').className = 'quiz-feedback';
  document.getElementById('quizFeedback').textContent = '';
  document.getElementById('quizNext').className = 'btn-quiz-next';
  answered = false;
}

function selectAnswer(idx, el) {
  if (answered) return;
  answered = true;
  const q = quizData[currentQ];
  const opts = document.querySelectorAll('.quiz-option');
  opts.forEach((o, i) => {
    o.style.pointerEvents = 'none';
    if (i === q.correct) o.classList.add('correct');
    else if (i === idx && idx !== q.correct) o.classList.add('wrong');
  });
  const fb = document.getElementById('quizFeedback');
  if (idx === q.correct) {
    score++;
    fb.className = 'quiz-feedback correct show';
    fb.innerHTML = '✓ ' + q.explain;
  } else {
    fb.className = 'quiz-feedback wrong show';
    fb.innerHTML = '✗ Ce n\'est pas tout à fait ça. ' + q.explain;
  }
  document.getElementById('quizNext').className = 'btn-quiz-next show';
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= quizData.length) {
    showResult();
  } else {
    loadQuestion();
  }
}

function showResult() {
  document.getElementById('quizProgress').style.width = '100%';
  document.getElementById('quizQuestion').style.display = 'none';
  const result = document.getElementById('quizResult');
  result.className = 'quiz-result show';
  document.getElementById('quizScoreNum').textContent = score + '/' + quizData.length;
  if (score === quizData.length) {
    document.getElementById('quizScoreText').textContent = '🏆 Parfait ! Vous êtes un super fan !';
    document.getElementById('quizScoreSub').textContent = 'Vous connaissez Omolara comme vos propres poches !';
    document.getElementById('confettiBtnQuiz').style.display = 'inline-flex';
    setTimeout(launchConfetti, 300);
  } else if (score >= 3) {
    document.getElementById('quizScoreText').textContent = '👏 Bien joué ! Pas mal du tout !';
    document.getElementById('quizScoreSub').textContent = 'Vous appréciez clairement Omolara. Continuez !';
    document.getElementById('confettiBtnQuiz').style.display = 'inline-flex';
  } else {
    document.getElementById('quizScoreText').textContent = '💡 Il faut mieux connaître Omolara !';
    document.getElementById('quizScoreSub').textContent = 'Passez plus de temps avec elle — elle le vaut !';
    document.getElementById('confettiBtnQuiz').style.display = 'none';
  }
}

function restartQuiz() {
  currentQ = 0; score = 0; answered = false;
  document.getElementById('quizQuestion').style.display = 'block';
  document.getElementById('quizResult').className = 'quiz-result';
  loadQuestion();
}

loadQuestion();
