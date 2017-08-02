
    $(document).ready(function() {
        var length,
            currentIndex = 0,
            interval,
            hasStarted = false, //是否已经开始轮播
            t = 3000; //轮播时间间隔
        length = $('.img>ul>li').length;
        //将除了第一张图片隐藏
        $('.img>ul>li:not(:first)').hide();
        //隐藏向前、向后翻按钮
        $('.arr').hide();
        //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
        $('.img>ul>li, .arrleft, .arrright').hover(function() {
            stop();
            $('.arr').show();
        }, function() {
            $('.arr').hide();
            start();
        });
        $('.arrleft').unbind('click');
        $('.arrleft').bind('click', function() {
            pre();
        });
        $('.arrright').unbind('click');
        $('.arrright').bind('click', function() {
            next();
        });
        /**
         * 向前翻页
         */
        function pre() {
            var preIndex = currentIndex;
            currentIndex = (--currentIndex + length) % length;
            play(preIndex, currentIndex);
        }
        /**
         * 向后翻页
         */
        function next() {
            var preIndex = currentIndex;
            currentIndex = ++currentIndex % length;
            play(preIndex, currentIndex);
        }
        /**
         * 从preIndex页翻到currentIndex页
         * preIndex 整数，翻页的起始页
         * currentIndex 整数，翻到的那页
         */
        function play(preIndex, currentIndex) {
            $('.img>ul>li').eq(preIndex).fadeOut(500)
                .parent().children().eq(currentIndex).fadeIn(1000);
        }
        /**
         * 开始轮播
         */
        function start() {
            if(!hasStarted) {
                hasStarted = true;
                interval = setInterval(next, t);
            }
        }
        /**
         * 停止轮播
         */
        function stop() {
            clearInterval(interval);
            hasStarted = false;
        }
        //开始轮播
        start();
    });
