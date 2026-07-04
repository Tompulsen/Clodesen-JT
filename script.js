document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    const navLinks = document.querySelectorAll('.module-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // 更新导航状态
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // 滚动时高亮当前模块
    const modules = document.querySelectorAll('.module');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        modules.forEach(module => {
            const moduleTop = module.offsetTop;
            const moduleHeight = module.clientHeight;
            
            if (pageYOffset >= moduleTop - 200) {
                current = module.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});

// 复制代码功能
function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code').innerText;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = '已复制';
        button.style.background = '#10b981';
        button.style.color = 'white';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            button.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('复制失败:', err);
    });
}

// 折叠功能
function toggleCollapsible(button) {
    const content = button.nextElementSibling;
    const isActive = button.classList.contains('active');
    
    // 切换按钮状态
    button.classList.toggle('active');
    
    // 切换内容显示
    if (isActive) {
        content.style.maxHeight = null;
        content.classList.remove('active');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.add('active');
    }
}