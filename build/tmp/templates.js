(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/common/footer.tpl.html",
    "<div class=\"pure-g\">\n" +
    "  <div class=\"pure-u-1 text-center\">\n" +
    "    <p>&copy; 2017 - <a href=\"\">JawStat</a>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/common/header.tpl.html",
    "<div class=\"pure-menu pure-menu-open pure-menu-horizontal\">\n" +
    "  <a class=\"pure-menu-heading\" href=\"\">JawStat</a>\n" +
    "  <ul>\n" +
    "    <li ui-sref-active=\"pure-menu-selected\"><a href ui-sref=\"root.home\">{{ 'Accueil' | uppercase }}</a>\n" +
    "    </li>\n" +
    "    <li ui-sref-active=\"pure-menu-selected\"><a href ui-sref=\"root.about-us\">{{ 'Qui sommes-nous' | uppercase }}</a>\n" +
    "    </li>\n" +
    "    <li ui-sref-active=\"pure-menu-selected\"><a href ui-sref=\"root.why\">{{ 'Pourquoi ce site ?' | uppercase }}</a>\n" +
    "    </li>\n" +
    "    <li ui-sref-active=\"pure-menu-selected\"><a href ui-sref=\"root.contact\">{{ 'Contact' | uppercase }}</a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/about-us/about-us.tpl.html",
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/contact/contact.tpl.html",
    "<div class=\"pure-g text-center\">\n" +
    "    <div class=\"pure-u-1\">\n" +
    "        <h1>GET IN TOUCH</h1>\n" +
    "    </div>\n" +
    "</div>\n" +
    "    <br>\n" +
    "<div class=\"pure-g text-center\">\n" +
    "    <div class=\"pure-u-1-2\">\n" +
    "        <form class=\"pure-form pure-form-aligned\">\n" +
    "            <fieldset>\n" +
    "                <div class=\"pure-control-group\">\n" +
    "                    <input type=\"text\" class=\"pure-input-2-3\" placeholder=\"Name\" required>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"pure-control-group\">\n" +
    "                    <input type=\"text\" class=\"pure-input-2-3\" placeholder=\"Lastname\" required>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"pure-control-group\">\n" +
    "                    <input type=\"email\" class=\"pure-input-2-3\" placeholder=\"Email\" required>\n" +
    "                </div>\n" +
    "            </fieldset>\n" +
    "\n" +
    "            <fieldset>\n" +
    "                <div class=\"pure-control-group\">\n" +
    "                    <input type=\"text\" class=\"pure-input-2-3\" placeholder=\"Subject\" required>\n" +
    "                </div>\n" +
    "                <div class=\"pure-control-group\">\n" +
    "                    <textarea rows=\"7\" cols=\"50\" class=\"pure-input-2-3\" placeholder=\"Textareas work too\"></textarea>\n" +
    "                </div>\n" +
    "            </fieldset>\n" +
    "\n" +
    "            <button type=\"submit\" class=\"pure-button pure-input-2-3 pure-input-rounded pure-button-primary\">Send</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"pure-u-1-2\">\n" +
    "        <div map-lazy-load=\"https://maps.google.com/maps/api/js\">\n" +
    "            <ng-map center=\"41,-87\" zoom=\"9\" style=\"height: 450px; width: 450px;\"></ng-map>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/home/home.tpl.html",
    "<div ng-controller=\"HomeCtrl\">\n" +
    "    <div class=\"pure-g\">\n" +
    "        <div class=\"pure-u-1 text-center\">\n" +
    "            <h1>WELCOME TO JAWSTAT</h1>\n" +
    "        </div>\n" +
    "        <div class=\"pure-u-1 text-center\">\n" +
    "            <h1>LOGO</h1>\n" +
    "        </div>\n" +
    "        <div class=\"pure-u-1-3\">\n" +
    "            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dolore dolores eligendi in ipsum molestiae quaerat, quo rem? Culpa illo nam obcaecati quia voluptate. Dolor ex iure quibusdam voluptates.</p>\n" +
    "        </div>\n" +
    "        <div class=\"pure-u-1-3\">\n" +
    "            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dolore dolores eligendi in ipsum molestiae quaerat, quo rem? Culpa illo nam obcaecati quia voluptate. Dolor ex iure quibusdam voluptates.</p>\n" +
    "        </div>\n" +
    "        <div class=\"pure-u-1-3\">\n" +
    "            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dolore dolores eligendi in ipsum molestiae quaerat, quo rem? Culpa illo nam obcaecati quia voluptate. Dolor ex iure quibusdam voluptates.</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <div class=\"pure-g\">\n" +
    "        <div class=\"pure-u-1 text-center\">\n" +
    "            <br>\n" +
    "            <button class=\"button-xlarge pure-button-primary pure-button\" ng-click=\"goRedige()\">RÉDIGER UNE FICHE CLIENT</button>\n" +
    "            <br>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <div class=\"pure-u-1 text-center\">\n" +
    "        <br>\n" +
    "        <h1>CONSULTER FICHE CLIENT</h1>\n" +
    "        <br>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/redigefc/redigefc.tpl.html",
    "<div class=\"pure-g text-center\">\n" +
    "    <div class=\"pure-u-1\">\n" +
    "        <h1>Rédiger Fiche Client</h1>\n" +
    "        <h3>Index de Qualité du Sommeil de Pittsburgh (PSQI)</h3>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<br>\n" +
    "<div class=\"pure-g text-left\" ng-controller=\"RedigeCtrl\">\n" +
    "    <div>\n" +
    "        <button type=\"submit\" class=\"pure-button pure-button-primary\" ng-click=\"goHome()\">RETOUR</button>\n" +
    "    </div>\n" +
    "    <div class=\"pure-u-1\">\n" +
    "        <form class=\"pure-form\">\n" +
    "            <fieldset class=\"pure-form-stacked\">\n" +
    "                <div class=\"pure-control-group\">\n" +
    "                    <label for=\"nom\">Nom :</label>\n" +
    "                    <input type=\"text\" id=\"nom\" placeholder=\"\" class=\"pure-input-1\" ng-model=\"user.nom\">\n" +
    "                    <label for=\"prenom\">Prénom :</label>\n" +
    "                    <input type=\"text\" id=\"prenom\" placeholder=\"\" class=\"pure-input-1\" ng-model=\"user.prenom\">\n" +
    "                </div>\n" +
    "\n" +
    "                <div clas=\"pure-control-group\">\n" +
    "                    <label for=\"date1\">Date de naissance :</label>\n" +
    "                    <input type=\"date\" id=\"date1\" placeholder=\"Date de naissance\" class=\"pure-input-1\" ng-model=\"user.date1\">\n" +
    "                    <label for=\"date2\">Date de ce jour :</label>\n" +
    "                    <input type=\"date\" id=\"date2\" placeholder=\"Date de ce jour\" class=\"pure-input-1\" ng-model=\"user.date2\">\n" +
    "                </div>\n" +
    "            </fieldset>\n" +
    "\n" +
    "            <div>\n" +
    "                <p>Les questions suivantes ont trait à vos habitudes de sommeil peandant le dernier mois seulement. Vos réponses doivent indiquer ce qui correspond aux expèriences que vous avez eues pendant la majorité des jours et des nuits au cours du dernier mois. Répondez à toutes les questions.</p>\n" +
    "\n" +
    "                <p>1. Au cours du mois dernier, quand êtes-vous habituellement allé vous coucher le soir ?</p>\n" +
    "                    <label for=\"in1\">Heure habituelle de coucher : </label><input type=\"text\" placeholder=\"\" id=\"in1\" ng-model=\"user.in1\"> (l'heure doit être au format 24h)\n" +
    "\n" +
    "                <p>2. Au cours du mois dernier, combien vous a-t-il habituellement fallu de temps (en minutes) pour vous endormir chaque soir ?</p>\n" +
    "                    <label for=\"in2\">Nombre de minutes : </label><input type=\"text\" placeholder=\"\" id=\"in2\" ng-model=\"user.in2\">\n" +
    "\n" +
    "                <p>3. Au cours du mois dernier, quand vous êtes-vous habituellement levé le matin ?</p>\n" +
    "                <label for=\"in3\"></label>Heure habituelle du lever :<input type=\"text\" placeholder=\"\" id=\"in3\" ng-model=\"user.in3\"> (l'heure doit être au format 24h)\n" +
    "\n" +
    "                <p>4. Au cours du mois dernier, combien d'heures de sommeil effectif avez-vous eues chaque nuit ?</p>\n" +
    "                <label for=\"in4\"></label>Nombre d'heures de sommeil par nuit : <input type=\"text\" placeholder=\"\" id=\"in4\" ng-model=\"user.in4\"> (Ce nombre peut être différent du nombre d'heures que vous avez passées au lit)\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <p>5. Au cours du mois dernier, avec quelle fréquence avez-vous eu des troubles de sommeil car...</p>\n" +
    "                <table>\n" +
    "                    <tr>\n" +
    "                        <td></td><td>Pas au cours du dernier mois</td><td>Moins d'1 fois par semaine</td>\n" +
    "                        <td>1 ou 2 fois par semaine</td><td>3 ou 4 fois par semaine</td>\n" +
    "                    </tr>\n" +
    "                    <tr><td>a) vous n'avez pas pu vous endormir en moins de 30mn</td>\n" +
    "                        <td><input type=\"radio\" value=\"0\" ng-model=\"user.preference1\"></td><td><input type=\"radio\" value=\"1\" ng-model=\"user.preference1\"></td><td><input type=\"radio\" value=\"2\" ng-model=\"user.preference1\"></td><td><input type=\"radio\" value=\"3\" ng-model=\"user.preference1\"></td></tr>\n" +
    "                    <tr><td>b) vous vous êtes réveillé(e) au milieu de la nuit ou précocement le matin</td>\n" +
    "                        <td><input type=\"radio\" value=\"0\" ng-model=\"user.preference2\"></td><td><input type=\"radio\" value=\"1\" ng-model=\"user.preference2\"></td><td><input type=\"radio\" value=\"2\" ng-model=\"user.preference2\"></td><td><input type=\"radio\" value=\"3\" ng-model=\"user.preference2\"></td></tr>\n" +
    "                    <tr><td>c) vous avez dû vous lever pour aller aux toilettes</td>\n" +
    "                        <td><input type=\"radio\" value=\"0\" ng-model=\"user.preference3\"></td><td><input type=\"radio\" value=\"1\" ng-model=\"user.preference3\"></td><td><input type=\"radio\" value=\"2\" ng-model=\"user.preference3\"></td><td><input type=\"radio\" value=\"3\" ng-model=\"user.preference3\"></td></tr>\n" +
    "                    <tr><td>d) vous n'avez pas pu respirer correctement</td>\n" +
    "                        <td><input type=\"radio\" value=\"0\" ng-model=\"user.preference4\"></td><td><input type=\"radio\" value=\"1\" ng-model=\"user.preference4\"></td><td><input type=\"radio\" value=\"2\" ng-model=\"user.preference4\"></td><td><input type=\"radio\" value=\"3\" ng-model=\"user.preference4\"></td></tr>\n" +
    "                    <tr><td>e) vous avez toussé</td>\n" +
    "                        <td><input type=\"radio\" value=\"0\" ng-model=\"user.preference5\"></td><td><input type=\"radio\" value=\"1\" ng-model=\"user.preference5\"></td><td><input type=\"radio\" value=\"2\" ng-model=\"user.preference5\"></td><td><input type=\"radio\" value=\"3\" ng-model=\"user.preference5\"></td></tr>\n" +
    "                    <tr><td>f) vous avez eu trop froid</td>\n" +
    "                        <td><input type=\"radio\" value=\"0\" ng-model=\"user.preference6\"></td><td><input type=\"radio\" value=\"1\" ng-model=\"user.preference6\"></td><td><input type=\"radio\" value=\"2\" ng-model=\"user.preference6\"></td><td><input type=\"radio\" value=\"3\" ng-model=\"user.preference6\"></td></tr>\n" +
    "                    <tr><td>g) vous avez eu trop chaud</td>\n" +
    "                        <td><input type=\"radio\" value=\"0\" ng-model=\"user.preference7\"></td><td><input type=\"radio\" value=\"1\" ng-model=\"user.preference7\"></td><td><input type=\"radio\" value=\"2\" ng-model=\"user.preference7\"></td><td><input type=\"radio\" value=\"3\" ng-model=\"user.preference7\"></td></tr>\n" +
    "                    <tr><td>h) vous avez eu de mauvais rêves</td>\n" +
    "                        <td><input type=\"radio\" value=\"0\" ng-model=\"user.preference8\"></td><td><input type=\"radio\" value=\"1\" ng-model=\"user.preference8\"></td><td><input type=\"radio\" value=\"2\" ng-model=\"user.preference8\"></td><td><input type=\"radio\" value=\"3\" ng-model=\"user.preference8\"></td></tr>\n" +
    "                    <tr><td>i) vous avez eu des douleurs</td>\n" +
    "                        <td><input type=\"radio\" value=\"0\" ng-model=\"user.preference9\"></td><td><input type=\"radio\" value=\"1\" ng-model=\"user.preference9\"></td><td><input type=\"radio\" value=\"2\" ng-model=\"user.preference9\"></td><td><input type=\"radio\" value=\"3\" ng-model=\"user.preference9\"></td></tr>\n" +
    "                    <tr><td>j) pour d'autre(s) raison(s). Donnez une description :</td><td><textarea rows=\"2\" cols=\"25\" ng-model=\"user.in_preference\"></textarea></td></tr>\n" +
    "                    <tr><td>Indiquez la fréquence des troubles du sommeil pour ces raisons</td>\n" +
    "                        <td><input type=\"radio\" value=\"0\" ng-model=\"user.preference10\"></td><td><input type=\"radio\" value=\"1\" ng-model=\"user.preference10\"></td><td><input type=\"radio\" value=\"2\" ng-model=\"user.preference10\"></td><td><input type=\"radio\" value=\"3\" ng-model=\"user.preference10\"></td></tr>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "\n" +
    "            <div>\n" +
    "                <p>6. Au cours du mois dernier, comment évalueriez-vous globalement la qualité de votre sommeil ?</p>\n" +
    "                <label for=\"option-1\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-1\" type=\"radio\" value=\"0\" ng-model=\"user.preference11\">\n" +
    "                    Très bonne\n" +
    "                </label>\n" +
    "                <label for=\"option-2\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-2\" type=\"radio\" value=\"1\" ng-model=\"user.preference11\">\n" +
    "                    Assez bonne\n" +
    "                </label>\n" +
    "                <label for=\"option-3\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-3\" type=\"radio\" value=\"2\" ng-model=\"user.preference11\">\n" +
    "                    Assez mauvaise\n" +
    "                </label>\n" +
    "                <label for=\"option-4\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-4\" type=\"radio\" value=\"3\" ng-model=\"user.preference11\">\n" +
    "                    Très mauvaise\n" +
    "                </label>\n" +
    "            </div>\n" +
    "\n" +
    "            <div>\n" +
    "                <p>7. Au cours du mois dernier, combien de fois avez-vous pris des médicaments (prescrits par votre médecin ou achetés sans ordonnance) pour faciliter votre sommeil ?</p>\n" +
    "                <label for=\"option-5\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-5\" type=\"radio\" value=\"0\" ng-model=\"user.preference12\">\n" +
    "                    Pas au cours du dernier moi\n" +
    "                </label>\n" +
    "                <label for=\"option-6\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-6\" type=\"radio\" value=\"1\" ng-model=\"user.preference12\">\n" +
    "                    Moins d'1 fois par semaine\n" +
    "                </label>\n" +
    "                <label for=\"option-7\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-7\" type=\"radio\" value=\"2\" ng-model=\"user.preference12\">\n" +
    "                    1 ou 2 fois par semaine\n" +
    "                </label>\n" +
    "                <label for=\"option-8\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-8\" type=\"radio\" value=\"3\" ng-model=\"user.preference12\">\n" +
    "                    3 ou 4 fois par semaine\n" +
    "                </label>\n" +
    "            </div>\n" +
    "\n" +
    "            <div>\n" +
    "                <p>8. Au cours du mois dernier, combien de fois avez-vous eu des difficultés à demeurer éveillé pendant que vous conduisiez, preniez vos repas, étiez occupé(e) dans une activité sociale ?</p>\n" +
    "                <label for=\"option-9\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-9\" type=\"radio\" value=\"0\" ng-model=\"user.preference13\">\n" +
    "                    Pas au cours du dernier mois\n" +
    "                </label>\n" +
    "                <label for=\"option-10\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-10\" type=\"radio\" value=\"1\" ng-model=\"user.preference13\">\n" +
    "                    Moins d'1 fois par semaine\n" +
    "                </label>\n" +
    "                <label for=\"option-11\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-11\" type=\"radio\" value=\"2\" ng-model=\"user.preference13\">\n" +
    "                    1 ou 2 fois par semaine\n" +
    "                </label>\n" +
    "                <label for=\"option-12\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-12\" type=\"radio\" value=\"3\" ng-model=\"user.preference13\">\n" +
    "                    3 ou 4 fois par semaine\n" +
    "                </label>\n" +
    "            </div>\n" +
    "\n" +
    "            <div>\n" +
    "                <p>9. Au cours du mois dernier, à quel degré cela a-t-il représenté un problème pour vous d'avoir assez d'enthousiasme pour faire ce que vous aviez à faire ?</p>\n" +
    "                <label for=\"option-13\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-13\" type=\"radio\" value=\"0\" ng-model=\"user.preference14\">\n" +
    "                    Pas de problème du tout\n" +
    "                </label>\n" +
    "                <label for=\"option-14\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-14\" type=\"radio\" value=\"1\" ng-model=\"user.preference14\">\n" +
    "                    Seulement un petit problème\n" +
    "                </label>\n" +
    "                <label for=\"option-15\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-15\" type=\"radio\" value=\"2\" ng-model=\"user.preference14\">\n" +
    "                    Un certain problème\n" +
    "                </label>\n" +
    "                <label for=\"option-16\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-16\" type=\"radio\" value=\"3\" ng-model=\"user.preference14\">\n" +
    "                    Un très gros problème\n" +
    "                </label>\n" +
    "            </div>\n" +
    "\n" +
    "            <div>\n" +
    "                <p>10. Avez vous un conjoint ou un camarade de chambre ?</p>\n" +
    "                <label for=\"option-17\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-17\" type=\"radio\" value=\"0\" ng-model=\"user.preference15\">\n" +
    "                    Ni l'un, ni l'autre\n" +
    "                </label>\n" +
    "                <label for=\"option-18\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-18\" type=\"radio\" value=\"1\" ng-model=\"user.preference15\">\n" +
    "                    Oui mais dans une chambre différente\n" +
    "                </label>\n" +
    "                <label for=\"option-19\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-19\" type=\"radio\" value=\"2\" ng-model=\"user.preference15\">\n" +
    "                    Oui dans la même chambre mais pas dans le même lit\n" +
    "                </label>\n" +
    "                <label for=\"option-20\" class=\"pure-radio\">\n" +
    "                    <input id=\"option-20\" type=\"radio\" value=\"3\" ng-model=\"user.preference15\">\n" +
    "                    Oui dans le même lit\n" +
    "                </label>\n" +
    "            </div>\n" +
    "\n" +
    "            <div>\n" +
    "                <p>11. Si vous avez un camarade de chambre ou un conjoint, demandez-lui combien de fois le mois dernier vous avez présenté :</p>\n" +
    "                <table>\n" +
    "                    <tr>\n" +
    "                        <td></td><td>Pas au cours du dernier mois</td><td>Moins d'1 fois par semaine</td>\n" +
    "                        <td>1 ou 2 fois par semaine</td><td>3 ou 4 fois par semaine</td>\n" +
    "                    </tr>\n" +
    "                    <tr><td>a) un ronflement fort</td>\n" +
    "                        <td><input type=\"radio\" ng-model=\"user.preference16\" value=\"0\"></td><td><input type=\"radio\" ng-model=\"user.preference16\" value=\"1\"></td><td><input type=\"radio\" ng-model=\"user.preference16\" value=\"2\"></td><td><input type=\"radio\" ng-model=\"user.preference16\" value=\"3\"></td></tr>\n" +
    "                    <tr><td>b) de longues pauses respiratoires pendant votre sommeil</td>\n" +
    "                        <td><input type=\"radio\" ng-model=\"user.preference17\" value=\"0\"></td><td><input type=\"radio\" ng-model=\"user.preference17\" value=\"1\"></td><td><input type=\"radio\" ng-model=\"user.preference17\" value=\"2\"></td><td><input type=\"radio\" ng-model=\"user.preference17\" value=\"3\"></td></tr>\n" +
    "                    <tr><td>c) des saccades ou des secousses des jambes pendant que vous dormiez</td>\n" +
    "                        <td><input type=\"radio\" ng-model=\"user.preference18\" value=\"0\"></td><td><input type=\"radio\" ng-model=\"user.preference18\" value=\"1\"></td><td><input type=\"radio\" ng-model=\"user.preference18\" value=\"2\"></td><td><input type=\"radio\" ng-model=\"user.preference18\" value=\"3\"></td></tr>\n" +
    "                    <tr><td>d) des épisodes de désorientation ou de confusion pendant le sommeil</td>\n" +
    "                        <td><input type=\"radio\" ng-model=\"user.preference19\" value=\"0\"></td><td><input type=\"radio\" ng-model=\"user.preference19\" value=\"1\"></td><td><input type=\"radio\" ng-model=\"user.preference19\" value=\"2\"></td><td><input type=\"radio\" ng-model=\"user.preference19\" value=\"3\"></td></tr>\n" +
    "                    <tr><td>e) d'autres motifs d'agitation pendant le sommeil</td>\n" +
    "                        <td><input type=\"radio\" ng-model=\"user.preference20\" value=\"0\"></td><td><input type=\"radio\" ng-model=\"user.preference20\" value=\"1\"></td><td><input type=\"radio\" ng-model=\"user.preference20\" value=\"2\"></td><td><input type=\"radio\" ng-model=\"user.preference20\" value=\"3\"></td></tr>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "\n" +
    "            <div class=\"text-center\">\n" +
    "                <button type=\"submit\" class=\"pure-button pure-input-2-3 pure-input-rounded pure-button-primary\" ng-click=\"update(user)\">ENVOYER</button>\n" +
    "            </div>\n" +
    "            <!--\n" +
    "            <pre>user = {{user | json}}</pre>\n" +
    "            <pre>master = {{master | json}}</pre>\n" +
    "            -->\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/why/why.tpl.html",
    "\n" +
    "");
}]);
})();
