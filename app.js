// 你的 R2 公共 URL (在步骤一中记下的)
// ！！！请在这里填入你 R2 存储桶 "设置" 里的那个 pub-....r2.dev URL ！！！
const R2_PUBLIC_URL = "https://pub-8b0a5f5c1a59458b80274b5baa0fb3ad.r2.dev"; // <-- 必须是这个格式！请替换成你的

// 视频数据列表
// 你需要在这里手动添加你上传到 R2 的所有视频
// 'poster' 是封面图片文件名
// 'videoFile' 是视频文件名
const videoDatabase = [
    {
        title: "我的第一个视频",
        poster: "unnamed.jpg", // 确保 R2 存储桶里有这个文件
        videoFile: "1018(1).mp4" // <-- 我已帮你移除了多余的 "my-video-library/"
    },
    {
        title: "旅行Vlog",
        poster: "unnamed.jpg",
        videoFile: "TS伪娘 这次是顶级高颜值伪娘 穿情趣内衣手交自慰高潮 A片 - 91视频色情视频成人视频91porn.mp4" // <-- 我已帮你移除
    },
    {
        title: "烹饪教程",
        poster: "unnamed.jpg",
        videoFile: "天津银行美女柜员 郭雨轩 不雅视频流出 为业绩撩客户玩虐肛 50厘米长假屌从菊花拽出.mp4" // <-- 我已帮你移除
    }, // <-- 【已修复】我已帮你添加了缺失的逗号
    {
        title: "推特网红", // (你之前有两个"烹饪教程", 我改了一个)
        poster: "unnamed.jpg",
        videoFile: "推特网红成都TINA伪娘御姐大胸D奶可爱御姐诱惑高潮喷射狂欢 A片 - 91视频色情视频成人视频91porn.mp4" // <-- 我已帮你移除
    }
    // ... 在 R2 中添加了多少视频，就在这里添加多少个
];


// --- 下面的代码基本不用动 ---

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
// <-- 【已修复】我已帮你移除了多余的 "}"