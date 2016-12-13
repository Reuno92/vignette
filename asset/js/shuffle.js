$('document').ready(function () {
    var input = $('.shuffle');
    var values = input.val();
    var arrayWords = null;
    var nouvelleDropzone = input.after($('<ul class="dropzone"></ul>'));
    var dropzone = $('.dropzone');

    var extract = function () {
        arrayWords = values.split(' ');
        return arrayWords;
    };

    for (var i = 0; i < extract().length; i++) {
        dropzone.append('<li class="word">' + extract()[i] + '</li>');
    }

    input.attr('type', 'hidden');

    var label = $('.word');

    dropzone.sortable({
        placeholder: "word",
        update: function (event, ui) {
            label.on('mouseleave', function () {
                var ordre = [];

                var list = document.querySelector('.dropzone');
                var item = list.querySelectorAll('.word');

                for (var i = 0, l = item.length; i < l; i++) {
                    ordre += item[i].innerText + ' ';
                }

                input.val(ordre);

            });
        }
    });
});
