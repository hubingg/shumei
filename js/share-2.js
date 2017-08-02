
    $(document).ready(function() {
        var length,
            currentIndex = 0,
            interval,
            hasStarted = false, //�Ƿ��Ѿ���ʼ�ֲ�
            t = 3000; //�ֲ�ʱ����
        length = $('.img>ul>li').length;
        //�����˵�һ��ͼƬ����
        $('.img>ul>li:not(:first)').hide();
        //������ǰ����󷭰�ť
        $('.arr').hide();
        //�������ʱ��ʾ��ǰ����󷭰�ť,ֹͣ����������뿪ʱ������ǰ����󷭰�ť����ʼ����
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
         * ��ǰ��ҳ
         */
        function pre() {
            var preIndex = currentIndex;
            currentIndex = (--currentIndex + length) % length;
            play(preIndex, currentIndex);
        }
        /**
         * ���ҳ
         */
        function next() {
            var preIndex = currentIndex;
            currentIndex = ++currentIndex % length;
            play(preIndex, currentIndex);
        }
        /**
         * ��preIndexҳ����currentIndexҳ
         * preIndex ��������ҳ����ʼҳ
         * currentIndex ��������������ҳ
         */
        function play(preIndex, currentIndex) {
            $('.img>ul>li').eq(preIndex).fadeOut(500)
                .parent().children().eq(currentIndex).fadeIn(1000);
        }
        /**
         * ��ʼ�ֲ�
         */
        function start() {
            if(!hasStarted) {
                hasStarted = true;
                interval = setInterval(next, t);
            }
        }
        /**
         * ֹͣ�ֲ�
         */
        function stop() {
            clearInterval(interval);
            hasStarted = false;
        }
        //��ʼ�ֲ�
        start();
    });
