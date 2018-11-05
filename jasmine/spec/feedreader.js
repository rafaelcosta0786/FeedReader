/* feedreader.js
 */

/* Estamos colocando todos os nossos testes dentro da função $ ()
 * já que alguns desses testes podem requerer elementos DOM. Nós queremos
 * para garantir que eles não sejam executados até que o DOM esteja pronto.
 */
$(function () {

    describe('RSS Feeds', function () {
        //Teste para garantir que o allFeeds foi definido e que não é vazio.
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*  Teste que faz um loop em cada feed no objeto allFeeds e garante que ele tenha 
            um URL definido e que o URL não está vazio.*/
        it('should a URL To Be Defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });

        });

        /*  Teste que faz um loop em cada feed no objeto allFeeds e garante que ele tenha 
            um NAME definido e que o NAME não está vazio.*/
        it('should a NAME To Be Defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /*  Novo súite de teste "The menu" */
    describe('The Menu', function () {

        let body;
        beforeEach(function() {
            body = $('body');
        });

        // Teste que garanta que o elemento de menu seja oculto por padrão. 
        it('should hidden by default', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
        it('should hidden menu', function () {
            expect($('menu-hidden')).toBeTruthy()
        });


        /*  Teste que garanta que o menu mude visibilidade quando o ícone do menu é clicado. 
         *  Esse teste deve ter duas expectativas: o menu exibe quando clicado e 
         *  oculta quando clicado novamente.
         */
        it('the menu changes visibility when the menu icon is clicked', function () {
            let menu = $('.menu-icon-link');
            
            menu.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);

            menu.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /*  Novo súite de teste "Initial Entries" */
    describe('Initial Entries', function () {
        /* Teste que garante quando o loadFeed função é chamada e completa seu trabalho, 
         * há pelo menos um único elemento .entry dentro do container .feed.
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('ensures when the loadFeed function is called and completes its work - a single .entry element within the .feed container', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /*  Novo súite de teste "New Feed Selection" */
    describe('New Feed Section', function () {
        /* Teste que garante quando um novo feed é carregado
         * pela função loadFeed que o conteúdo realmente muda.
         */
        let  feedOld;
        beforeEach(function (done) {
            $('.feed').empty();
            loadFeed(0, function () {
                feedOld = $('.feed').html();
                loadFeed(1, done);
            });
        });
        it('ensures when a new feed is loaded', function () {
            let feedNew = $('.feed').html();
            expect(feedOld).not.toBe(feedNew);
        });
    });
}());
