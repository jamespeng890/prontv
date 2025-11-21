// 你的 R2 公共 URL (在步骤一中记下的)
// 这个 URL 看起来是正确的格式，希望你已经启用了 R2 公共访问。
const R2_PUBLIC_URL = "https://pub-8b0a5f5c1a59458b80274b5baa0fb3ad.r2.dev"; 

// 视频数据列表
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
    // ... 如果你还有其他视频，请在这里添加并记得加逗号
];


// --- 下面的代码不用动 ---

document.addEventListener("DOMContentLoaded", () => {
    const videoGrid = document.getElementById("video-grid");
    const modal = document.getElementById("video-modal");
    const modalPlayer = document.getElementById("modal-video-player");
    const closeBtn = document.querySelector(".close-btn");

    // 1. 加载视频卡片
    function loadVideoCards() {
        videoGrid.innerHTML = ""; // 清空网格
        
        videoDatabase.forEach(video => {
            const card = document.createElement("div");
            card.className = "video-card";
            
            // 构建完整的 R2 URL
            const posterUrl = `${R2_PUBLIC_URL}/${video.poster}`;
            const videoUrl = `${R2_PUBLIC_URL}/${video.videoFile}`;
            
            card.innerHTML = `
                <img src="${posterUrl}" alt="${video.title}" class="poster">
                <div class="title">${video.title}</div>
            `;
            
            // 为卡片添加点击事件
            card.addEventListener("click", () => {
                playVideo(videoUrl);
            });
            
            videoGrid.appendChild(card);
        });
    }

    // 2. 播放视频
    function playVideo(videoUrl) {
        modalPlayer.src = videoUrl;
        modal.style.display = "block"; // 显示模态框
        modalPlayer.play();
    }

    // 3. 关闭模TA框
    function closeModal() {
        modal.style.display = "none";
        modalPlayer.pause();
        modalPlayer.src = ""; // 停止加载
    }

    // 事件监听
    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", (event) => {
        // 如果点击了模态框背景，也关闭
        if (event.target === modal) {
            closeModal();
        }
    });

    // 初始化
    loadVideoCards();
});
// <-- 最后的这个 } 是正确的，无需变动