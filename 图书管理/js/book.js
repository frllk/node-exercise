; (function () {
    let url = 'http://localhost:3006';

    // 获取并展示书籍
    getBooks();

    // 添加
    $('#btnAdd').on('click', addBooks);

    // 删除图书
    // 1、注册点击事件
    // 2、询问是否删除
    // 3、发送请求
    // 删除成功 重新渲染
    $('#tb').on('click', '.delete', function () {
        var id = $(this).data('id');
        delBooks(id);
    });

    // 获取数据
    function getBooks() {
        // 获取并展示书籍信息
        // 1、发送ajax请求，获取数据
        // 2、渲染书籍数据
        $.ajax({
            url: url + '/api/getbooks',
            type: 'Get',
            data: {},
            success: function (res) {
                if (res.status == 200) {
                    // $('#tb').empty();
                    let tr = '';
                    // 数据获取成功
                    res.data.forEach(item => {
                        tr += `<tr>
                        <td>${item.id}</td>
                        <td>${item.bookname}</td>
                        <td>${item.author}</td>
                        <td>${item.publisher}</td>
                        <td><a class='delete' data-id='${item.id}' href='javascript:;'>删除</a></td>
                        </tr>`;
                    });
                    $('#tb').html(tr);
                }
                else {
                    alert(res.msg);
                }
            }
        });
    }
    // 添加书籍
    function addBooks() {
        let bookname = $('#iptBookname').val().trim();
        let author = $('#iptAuthor').val().trim();
        let publisher = $('#iptPublisher').val().trim();
        if (!bookname || !author || !publisher) {
            alert('输入内容有空值，请重新输入！');
            return false;
        }
        let data = { bookname, author, publisher };
        // let data = { bookname: bookname, author: author, publisher: publisher };

        $.post(url + '/api/addbook', data, function (res) {
            alert(res.msg);
            if (res.status == 201) getBooks();
        })
    }
    // 删除图书
    function delBooks(id) {
        if (confirm('您确定要删除这条数据吗？')) {
            $.ajax({
                type: 'GET',
                url: url + '/api/delbook',
                data: { id: id },
                success: function (res) {
                    alert(res.msg);
                    if (res.status == 200) getBooks();
                }
            })
        }
    }
})();