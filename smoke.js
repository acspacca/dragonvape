        // Simple animated white smoke effect
        const canvas = document.querySelector('.smoke-bg');
        const ctx = canvas.getContext('2d');
        let w, h;
        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        const smokes = [];
        for (let i = 0; i < 25; i++) {
            smokes.push({
                x: Math.random() * w,
                y: h + Math.random() * h / 2,
                r: 60 + Math.random() * 80,
                alpha: 0.15 + Math.random() * 0.15,
                speed: 0.3 + Math.random() * 0.7,
                drift: (Math.random() - 0.5) * 0.5
            });
        }

        function drawSmoke() {
            ctx.clearRect(0, 0, w, h);
            for (let s of smokes) {
                ctx.save();
                ctx.globalAlpha = s.alpha;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = '#fff';
                ctx.shadowColor = '#fff';
                ctx.shadowBlur = 40;
                ctx.fill();
                ctx.restore();

                s.y -= s.speed;
                s.x += s.drift;
                if (s.y + s.r < 0) {
                    s.x = Math.random() * w;
                    s.y = h + Math.random() * h / 2;
                    s.r = 60 + Math.random() * 80;
                    s.alpha = 0.15 + Math.random() * 0.15;
                    s.speed = 0.3 + Math.random() * 0.7;
                    s.drift = (Math.random() - 0.5) * 0.5;
                }
            }
            requestAnimationFrame(drawSmoke);
        }
        drawSmoke();
