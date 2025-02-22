
        let timer;
        let seconds = 0;

        function updateTime() {
            let min = Math.floor(seconds / 60);
            let sec = seconds % 60;
            document.getElementById('time').textContent =
                (min < 10 ? "0" : "") + min + ":" +
                (sec < 10 ? "0" : "") + sec;
        }

        function startTimer() {
            if (!timer) {
                timer = setInterval(() => {
                    seconds++;
                    updateTime();
                }, 1000);
            }
        }

        function stopTimer() {
            clearInterval(timer);
            timer = null;
        }

        function resetTimer() {
            stopTimer();
            seconds = 0;
            updateTime();
        }

        updateTime();

        function toggleDarkMode() {
            document.body.classList.toggle("dark-mode");
        }
