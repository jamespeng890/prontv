// 你的 R2 公共 URL
const R2_PUBLIC_URL = "https://pub-8b0a5f5c1a59458b80274b5baa0fb3ad.r2.dev"; 

// 【数据占位符】请将此处替换为你原始的 videoDatabase 数组，并确保每个对象间有逗号
const videoDatabase = [
    {
        title: "好片 1", // 建议为每个视频起不同的名字
        poster: "下载.jpg", // 确保 R2 存储桶里有这个文件
        videoFile: "1018(1).mp4"
    },
    {
        title: "好片 2",
        poster: "下载.jpg",
        videoFile: "1018 (1)(2).mp4"
    },
    {
        title: "天津银行",
        poster: "下载.jpg",
        videoFile: "天津银行美女柜员 郭雨轩 不雅视频流出 为业绩撩客户玩虐肛 50厘米长假屌从菊花拽出.mp4"
    }, 
    { // 【已修复】这里之前缺少逗号
        title: "推特网红", 
        poster: "下载.jpg",
        videoFile: "推特网红成都TINA伪娘御姐大胸D奶可爱御姐诱惑高潮喷射狂欢 A片 - 91视频色情视频成人视频91porn.mp4"
    }, 
    { // 【已修复】这里之前缺少逗号
        title: "情色漫改", 
        poster: "下载.jpg",
        videoFile: "情色漫改大神 天使没翅膀 新作流出 超淫3D动漫VAM 巨乳女主节奏狂操 淫乱高潮画面刺激爆表 51吃瓜网.mp4"
    }, 
    { // 【已修复】这里之前缺少逗号
        title: "顶级福利姬", 
        poster: "下载.jpg",
        videoFile: "顶级福利姬 奈汐酱 付费写真流出 紧缚黑衣特写粉嫩乳晕 曲线毕露蜜穴隐现 SM绳艺反差至极 51吃瓜网.mp4"
    }
    // 将你的数据粘贴回这里...
];

document.addEventListener("DOMContentLoaded", () => {
    const videoGrid = document.getElementById("video-grid");
    const modal = document.getElementById("video-modal");
    const modalPlayer = document.getElementById("modal-video-player");
    const closeBtn = document.querySelector(".close-btn");
    // const modalTitle = document.getElementById("modal-title-text"); // 如果你想在播放器显示标题

    // 1. 加载视频卡片 (使用 DocumentFragment 优化性能)
    function loadVideoCards() {
        videoGrid.innerHTML = ""; 
        const fragment = document.createDocumentFragment();
        
        videoDatabase.forEach((video, index) => {
            const card = document.createElement("div");
            card.className = "video-card";
            // 添加交错动画延迟
            card.style.animation = `fadeInUp 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`;
            card.style.animationDelay = `${index * 0.05}s`;
            card.style.opacity = "0"; // 初始隐藏供动画使用
            
            const posterUrl = `${R2_PUBLIC_URL}/${video.poster}`;
            const videoUrl = `${R2_PUBLIC_URL}/${video.videoFile}`;
            
            card.innerHTML = `
                <div class="poster-wrapper">
                    <img src="${posterUrl}" alt="${video.title}" class="poster" loading="lazy">
                </div>
                <div class="card-info">
                    <div class="title">${video.title}</div>
                </div>
            `;
            
            card.addEventListener("click", () => {
                playVideo(videoUrl);
            });
            
            fragment.appendChild(card);
        });
        
        videoGrid.appendChild(fragment);
    }

    // 2. 播放视频 (带淡入动画)
    function playVideo(videoUrl) {
        modalPlayer.src = videoUrl;
        modal.style.display = "block";
        // 强制重绘以触发 transition
        modal.offsetHeight; 
        modal.classList.add("show");
        modalPlayer.play();
    }

    // 3. 关闭模态框 (带淡出动画)
    function closeModal() {
        modal.classList.remove("show");
        modalPlayer.pause();
        
        // 等待 CSS transition 结束后再隐藏 DOM
        setTimeout(() => {
            modal.style.display = "none";
            modalPlayer.src = ""; 
        }, 300); // 对应 CSS 中的 0.3s
    }

    // 事件监听
    closeBtn.addEventListener("click", closeModal);
    
    // 点击背景关闭，但点击视频本身不关闭
    modal.addEventListener("click", (event) => {
        if (event.target === modal || event.target.classList.contains('modal-blur-bg')) {
            closeModal();
        }
    });

    // ESC 键关闭
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });

    // 初始化
    loadVideoCards();
});
