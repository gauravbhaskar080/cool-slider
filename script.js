var prev = document.getElementById("prev");
        var next = document.getElementById("next");
        var thumbnail = document.getElementsByClassName("thumbnail");
        var hero = document.getElementById("hero");

        var backgroundImg = [
            "Radiance_img/bg1.png",
            "Radiance_img/bg2.png",
            "Radiance_img/bg3.png",
            "Radiance_img/bg4.png",
            "Radiance_img/bg5.png"
        ];
        let i = 0;

        function changeBackground(index) {
            hero.style.backgroundImage = 'url("' + backgroundImg[index] + '")';
            thumbnail[i].classList.remove("active");
            thumbnail[index].classList.add("active");
            i = index;
        }

        next.onclick = function() {
            if (i < 4) {
                changeBackground(i + 1);
            }
        };

        prev.onclick = function() {
            if (i > 0) {
                changeBackground(i - 1);
            }
        };
