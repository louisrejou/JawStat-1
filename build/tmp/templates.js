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
    "<div class=\"pure-g\">\n" +
    "    <div class=\"pure-u-1 text-center\">\n" +
    "        <h1>WELCOME TO JAWSTAT</h1>\n" +
    "    </div>\n" +
    "    <div class=\"pure-u-1 text-center\">\n" +
    "        <h1>LOGO</h1>\n" +
    "    </div>\n" +
    "    <div class=\"pure-u-1-3\">\n" +
    "        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dolore dolores eligendi in ipsum molestiae quaerat, quo rem? Culpa illo nam obcaecati quia voluptate. Dolor ex iure quibusdam voluptates.</p>\n" +
    "    </div>\n" +
    "    <div class=\"pure-u-1-3\">\n" +
    "        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dolore dolores eligendi in ipsum molestiae quaerat, quo rem? Culpa illo nam obcaecati quia voluptate. Dolor ex iure quibusdam voluptates.</p>\n" +
    "    </div>\n" +
    "    <div class=\"pure-u-1-3\">\n" +
    "        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dolore dolores eligendi in ipsum molestiae quaerat, quo rem? Culpa illo nam obcaecati quia voluptate. Dolor ex iure quibusdam voluptates.</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<br>\n" +
    "<div class=\"pure-g\">\n" +
    "    <div class=\"pure-u-1 text-center\">\n" +
    "        <br>\n" +
    "        <h1>REDIGER FICHE CLIENT</h1>\n" +
    "        <br>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<br>\n" +
    "<div class=\"pure-u-1 text-center\">\n" +
    "    <br>\n" +
    "    <h1>CONSULTER FICHE CLIENT</h1>\n" +
    "    <br>\n" +
    "</div>\n" +
    "");
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
