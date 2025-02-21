

        let studyTimeLeft = 25 * 60;
        let breakTimeLeft = 5 * 60;
        let studyRunning = false;
        let breakRunning = false;
        let studyTimer, breakTimer;

        function updateDisplay(type) {
            let timeLeft = type === 'study' ? studyTimeLeft : breakTimeLeft;
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            document.getElementById(`${type}-timer`).innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }

        function startStudyTimer() {
            if (!studyRunning) {
                studyRunning = true;
                studyTimer = setInterval(() => {
                    if (studyTimeLeft > 0) {
                        studyTimeLeft--;
                        updateDisplay('study');
                    } else {
                        clearInterval(studyTimer);
                        studyRunning = false;
                        alert("Time's up! Take a break.");
                    }
                }, 1000);
            }
        }

        function startBreakTimer() {
            if (!breakRunning) {
                breakRunning = true;
                breakTimer = setInterval(() => {
                    if (breakTimeLeft > 0) {
                        breakTimeLeft--;
                        updateDisplay('break');
                    } else {
                        clearInterval(breakTimer);
                        breakRunning = false;
                        alert("Break's over! Back to study.");
                    }
                }, 1000);
            }
        }

        function pauseTimer(type) {
            if (type === 'study') {
                clearInterval(studyTimer);
                studyRunning = false;
            } else {
                clearInterval(breakTimer);
                breakRunning = false;
            }
        }

        function resetTimer(type) {
            if (type === 'study') {
                clearInterval(studyTimer);
                studyRunning = false;
                studyTimeLeft = 25 * 60;
                updateDisplay('study');
            } else {
                clearInterval(breakTimer);
                breakRunning = false;
                breakTimeLeft = 5 * 60;
                updateDisplay('break');
            }
        }

        function toggleLightMode() {
            document.body.classList.toggle('light-mode');
        }

        updateDisplay('study');
        updateDisplay('break');
