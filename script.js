const MAX_LEVEL = 100;
const WORDS_PER_LEVEL = 2;

const wordBank = [
    // Pendidikan Bahasa Inggris & Kosakata (14 kata)
    { word: "GRAMMAR", category: "Pendidikan Bahasa Inggris", clue: "Aturan tata bahasa dalam menyusun kalimat bahasa Inggris." },
    { word: "SPEAKING", category: "Pendidikan Bahasa Inggris", clue: "Keterampilan berbicara dan berkomunikasi secara lisan." },
    { word: "LISTENING", category: "Pendidikan Bahasa Inggris", clue: "Keterampilan menyimak dan memahami bahasa lisan." },
    { word: "READING", category: "Pendidikan Bahasa Inggris", clue: "Keterampilan membaca dan menangkap makna teks." },
    { word: "WRITING", category: "Pendidikan Bahasa Inggris", clue: "Keterampilan menuangkan ide ke dalam bentuk tulisan." },
    { word: "SYNONYM", category: "Kosakata Inggris", clue: "Kata yang memiliki makna sama atau mirip dengan kata lain." },
    { word: "ANTONYM", category: "Kosakata Inggris", clue: "Kata yang memiliki makna berlawanan dengan kata lain." },
    { word: "FLUENT", category: "Kosakata Inggris", clue: "Mampu berbicara atau menulis bahasa asing dengan lancar." },
    { word: "PHRASE", category: "Kosakata Inggris", clue: "Gabungan dua kata atau lebih yang membentuk satu kesatuan makna." },
    { word: "IDIOM", category: "Kosakata Inggris", clue: "Ungkapan yang maknanya tidak bisa diartikan secara harfiah." },
    { word: "ACCENT", category: "Pendidikan Bahasa Inggris", clue: "Ciri khas pengucapan kata pada daerah atau penutur tertentu." },
    { word: "ESSAY", category: "Pendidikan Bahasa Inggris", clue: "Karangan pendek yang membahas satu topik dengan sudut pandang penulis." },
    { word: "JOURNAL", category: "Dunia Akademik", clue: "Publikasi ilmiah berkala yang memuat artikel hasil penelitian." },
    { word: "THESIS", category: "Dunia Akademik", clue: "Pernyataan tesis atau karya tulis ilmiah tingkat lanjut." },

    // Basic Coding & Web (12 kata)
    { word: "BROWSER", category: "Basic Coding", clue: "Aplikasi seperti Chrome atau Edge untuk membuka halaman web." },
    { word: "CODING", category: "Basic Coding", clue: "Proses menulis instruksi program menggunakan bahasa pemrograman." },
    { word: "SCRIPT", category: "Basic Coding", clue: "Kumpulan kode program yang membuat halaman web menjadi interaktif." },
    { word: "SYNTAX", category: "Basic Coding", clue: "Aturan penulisan kode agar bisa dibaca komputer." },
    { word: "DESIGN", category: "Desain Web", clue: "Perancangan tampilan visual, warna, dan tata letak halaman." },
    { word: "LAYOUT", category: "Desain Web", clue: "Susunan letak elemen visual di dalam satu halaman." },
    { word: "BUTTON", category: "Desain Web", clue: "Elemen interaktif yang diklik pengguna untuk menjalankan aksi." },
    { word: "COLORS", category: "Desain Web", clue: "Kombinasi nuansa visual yang menentukan suasana tampilan." },
    { word: "PASTEL", category: "Desain Web", clue: "Nuansa warna lembut dan menenangkan mata." },
    { word: "WEBSITE", category: "Basic Coding", clue: "Kumpulan halaman web yang saling terhubung di internet." },
    { word: "GITHUB", category: "Basic Coding", clue: "Platform untuk menyimpan kode dan mempublikasikan proyek web." },
    { word: "ONLINE", category: "Basic Coding", clue: "Status terhubung ke jaringan internet sehingga bisa diakses publik." },

    // Kampus, Kerja Kelompok & Produktivitas (12 kata)
    { word: "SKRIPSI", category: "Dunia Kuliah", clue: "Karya tulis ilmiah wajib sebagai syarat kelulusan sarjana." },
    { word: "DISKUSI", category: "Tugas Kelompok", clue: "Bertukar pikiran bersama anggota tim untuk menyelesaikan masalah." },
    { word: "TIMWORK", category: "Tugas Kelompok", clue: "Kerja sama solid antaranggota demi mencapai tujuan bersama." },
    { word: "MATERI", category: "Dunia Kuliah", clue: "Bahan ajar atau pokok bahasan yang dipelajari di kelas." },
    { word: "CATATAN", category: "Dunia Kuliah", clue: "Ringkasan poin penting agar mudah diingat saat belajar." },
    { word: "TARGET", category: "Produktivitas", clue: "Sasaran atau capaian yang ingin diraih dalam waktu tertentu." },
    { word: "RENCANA", category: "Produktivitas", clue: "Susunan langkah sebelum memulai suatu pekerjaan." },
    { word: "PROGRES", category: "Produktivitas", clue: "Perkembangan atau kemajuan dari sebuah proyek yang dikerjakan." },
    { word: "REVISI", category: "Dunia Kuliah", clue: "Perbaikan atau penyempurnaan agar hasilnya makin tepat." },
    { word: "PRESENT", category: "Dunia Kuliah", clue: "Tampil memaparkan hasil karya atau materi di depan audiens." },
    { word: "KREATIF", category: "Karakter", clue: "Memiliki daya cipta dan ide-ide segar yang menarik." },
    { word: "SABAR", category: "Karakter", clue: "Sikap tenang dan tekun menjalani proses sampai selesai." },

    // Gaya Hidup, Estetika & Sehari-hari (12 kata)
    { word: "NYAMAN", category: "Suasana Hati", clue: "Perasaan tenang, rileks, dan tidak membuat tertekan." },
    { word: "CERIA", category: "Suasana Hati", clue: "Penuh semangat dan ekspresi gembira yang menular." },
    { word: "HARMONI", category: "Estetika", clue: "Keselarasan antarbagian sehingga terlihat seimbang dan indah." },
    { word: "ELEGAN", category: "Estetika", clue: "Tampil anggun, rapi, dan berkelas tanpa berlebihan." },
    { word: "CANTIK", category: "Estetika", clue: "Memiliki daya tarik visual yang manis dan memikat." },
    { word: "INSPIRASI", category: "Ide & Karya", clue: "Percikan ide yang memicu semangat untuk berkarya." },
    { word: "SEMANGAT", category: "Ide & Karya", clue: "Dorongan energi positif untuk terus melangkah maju." },
    { word: "BERKARYA", category: "Ide & Karya", clue: "Menciptakan sesuatu yang nyata dari ide dan usaha." },
    { word: "ISTIRAHAT", category: "Sehari-hari", clue: "Waktu jeda sejenak untuk memulihkan energi tubuh dan pikiran." },
    { word: "SENYUM", category: "Sehari-hari", clue: "Ekspresi ramah yang bikin suasana jadi lebih hangat." },
    { word: "SAHABAT", category: "Persahabatan", clue: "Teman dekat yang saling mendukung dan menemani." },
    { word: "KOMPAK", category: "Persahabatan", clue: "Selalu sejalan dan saling melengkapi saat beraktivitas." }
];

const startScreen = document.getElementById('startScreen');
const playScreen = document.getElementById('playScreen');
const gameOverScreen = document.getElementById('gameOverScreen');

const modeRelaxBtn = document.getElementById('modeRelaxBtn');
const modeChallengeBtn = document.getElementById('modeChallengeBtn');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const clearBtn = document.getElementById('clearBtn');
const hintBtn = document.getElementById('hintBtn');
const skipBtn = document.getElementById('skipBtn');
const soundToggle = document.getElementById('soundToggle');

const duoMascot = document.getElementById('duoMascot');
const speechBubble = document.getElementById('speechBubble');

const levelBadge = document.getElementById('levelBadge');
const rankTitle = document.getElementById('rankTitle');
const levelProgressBar = document.getElementById('levelProgressBar');
const levelHintText = document.getElementById('levelHintText');

const highScoreEl = document.getElementById('highScore');
const livesDisplay = document.getElementById('livesDisplay');
const streakDisplay = document.getElementById('streakDisplay');
const scoreDisplay = document.getElementById('scoreDisplay');
const timerText = document.getElementById('timerText');
const timerBar = document.getElementById('timerBar');
const categoryBadge = document.getElementById('categoryBadge');
const clueText = document.getElementById('clueText');
const answerSlots = document.getElementById('answerSlots');
const letterPool = document.getElementById('letterPool');
const feedbackMsg = document.getElementById('feedbackMsg');

const finalLevelEl = document.getElementById('finalLevel');
const finalScoreEl = document.getElementById('finalScore');
const finalHighScoreEl = document.getElementById('finalHighScore');

let soundEnabled = true;
let audioCtx = null;
let gameMode = 'relax'; // 'relax' atau 'challenge'

// Pola musik latar pastel yang ceria & lembut (C major / A minor warm loop)
const bgmNotes = [
    523.25, 659.25, 783.99, 659.25,
    440.00, 523.25, 659.25, 523.25,
    349.23, 440.00, 523.25, 440.00,
    392.00, 493.88, 587.33, 493.88
];
let bgmInterval = null;
let bgmStep = 0;

function ensureAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
    }
}

function playTone(freq, duration = 0.12, type = 'sine', startOffset = 0, volume = 0.05) {
    if (!soundEnabled) return;
    try {
        ensureAudioContext();
        const now = audioCtx.currentTime + startOffset;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(volume, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + duration);
    } catch (e) {}
}

function startSoftBGM() {
    if (!soundEnabled || bgmInterval) return;
    ensureAudioContext();
    const tempoMs = gameMode === 'challenge' ? 460 : 560;
    bgmInterval = setInterval(() => {
        if (!soundEnabled || !playScreen.classList.contains('active')) return;
        const freq = bgmNotes[bgmStep % bgmNotes.length];
        playTone(freq, 0.34, 'sine', 0, 0.016);
        bgmStep++;
    }, tempoMs);
}

function stopSoftBGM() {
    if (bgmInterval) {
        clearInterval(bgmInterval);
        bgmInterval = null;
    }
}

// Sound animasi lembut & berpola
function playPopSound(stepIndex = 0) {
    const base = 460 + Math.min(stepIndex, 6) * 35;
    playTone(base, 0.08, 'sine', 0, 0.045);
    playTone(base * 1.25, 0.07, 'triangle', 0.035, 0.03);
}

function playSuccessMelody(currentStreak = 1) {
    const boost = Math.min(currentStreak - 1, 5) * 24;
    playTone(523.25 + boost, 0.12, 'triangle', 0, 0.05);
    playTone(659.25 + boost, 0.12, 'triangle', 0.09, 0.05);
    playTone(783.99 + boost, 0.14, 'triangle', 0.18, 0.055);
    playTone(1046.5 + boost, 0.22, 'sine', 0.27, 0.05);
}

function playLevelUpMelody() {
    const notes = [587.33, 739.99, 880.0, 1174.66];
    notes.forEach((n, idx) => {
        playTone(n, 0.15, 'triangle', idx * 0.09, 0.055);
    });
}

function playSoftWrongMelody() {
    playTone(349.23, 0.14, 'sine', 0, 0.045);
    playTone(293.66, 0.2, 'sine', 0.11, 0.045);
}

soundToggle.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundToggle.textContent = soundEnabled ? '🔊' : '🔇';
    if (!soundEnabled) {
        stopSoftBGM();
    } else if (playScreen.classList.contains('active')) {
        startSoftBGM();
    }
});

modeRelaxBtn.addEventListener('click', () => {
    gameMode = 'relax';
    modeRelaxBtn.classList.add('active');
    modeChallengeBtn.classList.remove('active');
    playPopSound(1);
});

modeChallengeBtn.addEventListener('click', () => {
    gameMode = 'challenge';
    modeChallengeBtn.classList.add('active');
    modeRelaxBtn.classList.remove('active');
    playPopSound(3);
});

function setMascotState(text, celebrate = false) {
    speechBubble.textContent = text;
    duoMascot.classList.toggle('celebrate', celebrate);
    duoMascot.classList.toggle('low-lives', lives === 1 && !celebrate);
}

function getIdlePrompt() {
    if (lives === 1) {
        return 'Yolanda & Juana: Sisa 1 nyawa, tarik napas & fokus ya! 🤍';
    }
    if (streak >= 3) {
        return `Kombo ${streak}x! Kalian keren banget hari ini! ✨`;
    }
    return `Level ${currentLevel} — Ayo susun katanya pelan-pelan! 🌸`;
}

function getRankByLevel(lvl) {
    if (lvl >= 100) return "👑 Grand Word Legend";
    if (lvl >= 75) return "💎 Pastel Master";
    if (lvl >= 50) return "🌸 Vocab Fairy";
    if (lvl >= 25) return "✨ Word Explorer";
    if (lvl >= 10) return "🌷 Rising Linguist";
    return "🌱 Pastel Dreamer";
}

function getRoundTimeByLevel(lvl) {
    if (gameMode === 'challenge') {
        const calculated = Math.round(24 - (lvl - 1) * 0.14);
        return Math.max(12, calculated);
    }
    const calculated = Math.round(30 - (lvl - 1) * 0.12);
    return Math.max(16, calculated);
}

function applyTierTheme(lvl) {
    document.body.classList.remove('tier-2', 'tier-3', 'tier-4', 'tier-5');
    if (lvl >= 81) document.body.classList.add('tier-5');
    else if (lvl >= 61) document.body.classList.add('tier-4');
    else if (lvl >= 41) document.body.classList.add('tier-3');
    else if (lvl >= 21) document.body.classList.add('tier-2');
}

let highScore = Number(localStorage.getItem('wordRushHighScore')) || 0;
highScoreEl.textContent = highScore;

let score = 0;
let lives = 3;
let streak = 0;
let wordsSolved = 0;
let currentLevel = 1;
let levelWordsProgress = 0;
let currentRoundTime = 30;
let currentItem = null;
let selectedLetters = [];
let shuffledPool = [];
let timerInterval = null;
let timeLeft = 30;
let usedIndices = [];

function showScreen(screen) {
    [startScreen, playScreen, gameOverScreen].forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function updateLevelUI() {
    applyTierTheme(currentLevel);
    levelBadge.textContent = `📈 Level ${currentLevel} / ${MAX_LEVEL}`;
    rankTitle.textContent = getRankByLevel(currentLevel);

    if (currentLevel >= MAX_LEVEL) {
        levelProgressBar.style.width = '100%';
        levelHintText.textContent = 'Level puncak tercapai!';
    } else {
        const pct = (levelWordsProgress / WORDS_PER_LEVEL) * 100;
        levelProgressBar.style.width = `${pct}%`;
        levelHintText.textContent = `${levelWordsProgress}/${WORDS_PER_LEVEL} kata menuju Level ${currentLevel + 1}`;
    }
}

function updateHUD() {
    livesDisplay.textContent = '💗'.repeat(Math.max(0, lives)) + '🤍'.repeat(Math.max(0, 3 - lives));
    streakDisplay.textContent = `✨ ${streak}x`;
    scoreDisplay.textContent = score;
    highScoreEl.textContent = highScore;
    updateLevelUI();
}

function pickNextWord() {
    if (usedIndices.length === wordBank.length) {
        usedIndices = [];
    }
    let idx;
    do {
        idx = Math.floor(Math.random() * wordBank.length);
    } while (usedIndices.includes(idx));
    usedIndices.push(idx);

    currentItem = wordBank[idx];
    selectedLetters = Array(currentItem.word.length).fill(null);

    const letters = currentItem.word.split('').map((char, i) => ({ char, id: i, used: false }));
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    shuffledPool = letters;

    currentRoundTime = getRoundTimeByLevel(currentLevel);
    const modeLabel = gameMode === 'challenge' ? 'Tantangan' : 'Santai';
    categoryBadge.textContent = `${currentItem.category} • ${modeLabel} • ${currentRoundTime}d`;
    clueText.textContent = currentItem.clue;
    feedbackMsg.textContent = '';
    setMascotState(getIdlePrompt(), false);

    renderBoard();
    startTimer();
}

function renderBoard(status = '') {
    answerSlots.innerHTML = '';
    selectedLetters.forEach((slotObj, slotIndex) => {
        const tile = document.createElement('div');
        tile.className = 'slot-tile';
        if (slotObj) {
            tile.textContent = slotObj.char;
            tile.classList.add('filled');
        }
        if (status) {
            tile.classList.add(status);
        }
        tile.title = 'Klik untuk mengembalikan huruf';
        tile.addEventListener('click', () => {
            if (!slotObj || status) return;
            playTone(420, 0.07, 'sine', 0, 0.035);
            const poolItem = shuffledPool.find(item => item.id === slotObj.id);
            if (poolItem) poolItem.used = false;
            selectedLetters[slotIndex] = null;
            renderBoard();
        });
        answerSlots.appendChild(tile);
    });

    letterPool.innerHTML = '';
    shuffledPool.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'letter-btn';
        btn.textContent = item.char;
        btn.disabled = item.used || status !== '';
        btn.addEventListener('click', () => {
            const emptyIndex = selectedLetters.indexOf(null);
            if (emptyIndex === -1) return;
            playPopSound(emptyIndex);
            item.used = true;
            selectedLetters[emptyIndex] = { char: item.char, id: item.id };
            renderBoard();
            checkAnswer();
        });
        letterPool.appendChild(btn);
    });
}

function checkAnswer() {
    if (selectedLetters.includes(null)) return;

    const guess = selectedLetters.map(item => item.char).join('');
    if (guess === currentItem.word) {
        clearInterval(timerInterval);
        streak++;
        wordsSolved++;

        let leveledUp = false;
        if (currentLevel < MAX_LEVEL) {
            levelWordsProgress++;
            if (levelWordsProgress >= WORDS_PER_LEVEL) {
                currentLevel++;
                levelWordsProgress = 0;
                leveledUp = true;
            }
        }

        const timeBonus = timeLeft * 3;
        const streakBonus = streak * 10;
        const levelBonus = currentLevel * 2;
        const gained = 50 + timeBonus + streakBonus + levelBonus;
        score += gained;

        if (score > highScore) {
            highScore = score;
            localStorage.setItem('wordRushHighScore', highScore);
        }

        updateHUD();
        renderBoard('correct');

        if (leveledUp) {
            playLevelUpMelody();
            setMascotState(`LEVEL UP! Sekarang Level ${currentLevel}! Keren banget! 🎉✨`, true);
            feedbackMsg.style.color = '#5c7f99';
            feedbackMsg.textContent = `🌟 Naik ke Level ${currentLevel}! +${gained} poin!`;
        } else {
            playSuccessMelody(streak);
            setMascotState('Yeayyy! Pas banget jawabannya! ✨🤍', true);
            feedbackMsg.style.color = '#2f6f4e';
            feedbackMsg.textContent = `🎉 Benar! +${gained} poin (Bonus waktu, kombo & level!)`;
        }

        setTimeout(() => {
            pickNextWord();
        }, 1200);
    } else {
        playSoftWrongMelody();
        streak = 0;
        lives--;
        updateHUD();
        renderBoard('wrong');
        setMascotState(
            lives === 1
                ? 'Hati-hati, nyawa tinggal 1! Coba susun ulang ya 🤍'
                : 'Belum pas nih, coba susun ulang ya! 🌷',
            false
        );
        feedbackMsg.style.color = '#9e4756';
        feedbackMsg.textContent = '❌ Kurang tepat! Nyawa berkurang 1.';

        setTimeout(() => {
            if (lives <= 0) {
                endGame();
            } else {
                resetCurrentLetters();
            }
        }, 850);
    }
}

function resetCurrentLetters() {
    selectedLetters = Array(currentItem.word.length).fill(null);
    shuffledPool.forEach(item => item.used = false);
    feedbackMsg.textContent = '';
    setMascotState(getIdlePrompt(), false);
    renderBoard();
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = currentRoundTime;
    updateTimerUI();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            playSoftWrongMelody();
            streak = 0;
            lives--;
            updateHUD();
            setMascotState('Waktunya habis, kita lanjut kata berikutnya! 💕', false);
            feedbackMsg.style.color = '#8f4f66';
            feedbackMsg.textContent = `⏰ Waktu habis! Jawabannya: ${currentItem.word}`;

            setTimeout(() => {
                if (lives <= 0) {
                    endGame();
                } else {
                    pickNextWord();
                }
            }, 1200);
        }
    }, 1000);
}

function updateTimerUI() {
    timerText.textContent = `${timeLeft} dtk`;
    const percent = (timeLeft / currentRoundTime) * 100;
    timerBar.style.width = `${percent}%`;
    if (timeLeft <= Math.max(5, Math.floor(currentRoundTime * 0.27))) {
        timerBar.classList.add('danger');
    } else {
        timerBar.classList.remove('danger');
    }
}

function endGame() {
    clearInterval(timerInterval);
    stopSoftBGM();
    setMascotState(`Sampai Level ${currentLevel}! Hebat banget! 🎀`, true);
    finalLevelEl.textContent = `Lv. ${currentLevel}`;
    finalScoreEl.textContent = score;
    finalHighScoreEl.textContent = highScore;
    showScreen(gameOverScreen);
}

function startNewRun() {
    score = 0;
    lives = 3;
    streak = 0;
    wordsSolved = 0;
    currentLevel = 1;
    levelWordsProgress = 0;
    bgmStep = 0;
    usedIndices = [];
    updateHUD();
    showScreen(playScreen);
    startSoftBGM();
    pickNextWord();
}

startBtn.addEventListener('click', () => {
    playPopSound(2);
    startNewRun();
});

restartBtn.addEventListener('click', () => {
    playPopSound(2);
    startNewRun();
});

clearBtn.addEventListener('click', () => {
    playTone(400, 0.08, 'sine', 0, 0.035);
    resetCurrentLetters();
});

hintBtn.addEventListener('click', () => {
    if (score < 15) {
        feedbackMsg.style.color = '#826728';
        feedbackMsg.textContent = '⚠️ Butuh minimal 15 poin untuk memakai bantuan!';
        return;
    }
    const emptyIdx = selectedLetters.indexOf(null);
    if (emptyIdx === -1) return;

    const neededChar = currentItem.word[emptyIdx];
    const poolItem = shuffledPool.find(item => !item.used && item.char === neededChar);
    if (!poolItem) return;

    playTone(698.46, 0.09, 'sine', 0, 0.045);
    playTone(880, 0.11, 'triangle', 0.07, 0.045);
    setMascotState('Juana & Yolanda bantu buka 1 huruf ya! 💡', false);

    score -= 15;
    updateHUD();
    poolItem.used = true;
    selectedLetters[emptyIdx] = { char: poolItem.char, id: poolItem.id };
    renderBoard();
    checkAnswer();
});

skipBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    playSoftWrongMelody();
    streak = 0;
    lives--;
    updateHUD();
    if (lives <= 0) {
        endGame();
    } else {
        pickNextWord();
    }
});