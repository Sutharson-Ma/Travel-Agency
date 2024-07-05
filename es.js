jQuery(document).ready(function () {
    var $cardList = jQuery(".card-stack .card-list li");
    var totalCards = $cardList.length;
    var currentIndex = 0;

    jQuery(".next").click(function () {
        showNextCard();
    });

    jQuery(".prev").click(function () {
        showPrevCard();
    });

    function showNextCard() {
        var $currentCard = $cardList.eq(currentIndex);
        var $nextCard = $cardList.eq((currentIndex + 1) % totalCards);

        $currentCard.removeClass("transformThis activeNow");
        $nextCard.addClass("activeNow");

        jQuery(".card-list").append($currentCard);
        currentIndex = (currentIndex + 1) % totalCards;
    }

    function showPrevCard() {
        var $currentCard = $cardList.eq(currentIndex);
        var prevIndex = (currentIndex - 1 + totalCards) % totalCards;
        var $prevCard = $cardList.eq(prevIndex);

        $prevCard.addClass("activeNow");

        jQuery(".card-list").prepend($prevCard);
        $currentCard.removeClass("activeNow").addClass("transformPrev");
        currentIndex = prevIndex;
    }
});
