document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter-text');
    const text = '提示：建议手机端打开保存的音频文件！（听音频内容）音频中所提示的密码就是今天的访问密码！';
    let index = 0;
    let isDeleting = false;
    let pauseTime = 2000;

    function typeWriter() {
        const currentText = text.substring(0, index);
        typewriterElement.textContent = currentText;

        if (!isDeleting && index < text.length) {
            index++;
            setTimeout(typeWriter, 80 + Math.random() * 40);
        } else if (!isDeleting && index === text.length) {
            isDeleting = true;
            setTimeout(typeWriter, pauseTime);
        } else if (isDeleting && index > 0) {
            index--;
            setTimeout(typeWriter, 30);
        } else {
            isDeleting = false;
            setTimeout(typeWriter, 500);
        }
    }

    typeWriter();
});