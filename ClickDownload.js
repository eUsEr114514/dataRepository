document.getElementById('downloadBtn').addEventListener('click', function() {
    var fileUrl = '/teach/markdown/Windows/index.md'; // 文件的URL
    var fileName = 'WindowsTeach.md'; // 下载时显示的文件名

    var a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});