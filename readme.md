Vignette

Avec jQuery et jQueryUI, un petit exercice où je devias remplacer un input pour faire un système de vignette pour changer du simple input text.

1- D'abord je récupère et je sépare mes mots dans un array.
2- Ensuite pour chaque mots, je crée une list item.
3- Je change l'atribut de mon type de mon input en hidden (le faire disparaître avec du CSS: Avec display : hidden ou none ne permet pas de récupérer les valeurs, puisqu'ils deviennent indisponible).
4- Puis j'utilise la méthode .sortable() de jQuery, pour faire le trie, je mets le tout dans une variable. qui va être réutilisé pour changer les valeurs de l'input type hidden.

