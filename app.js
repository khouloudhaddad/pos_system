import { CsHeader } from "./slots/CsHeader.js";
import { CsApp } from "./slots/CsApp.js";
import { CsLeftSidebar } from "./slots/CsLeftSidebar.js";
import { CsRightSidebar } from "./slots/CsRightSidebar.js";
import { CsContent } from "./slots/CsContent.js";
import { SmftNavigation } from "./components/SmftNavigation.js";
import { SmftSearchBar } from "./components/SmftSearchBar.js";
import { SmftUserAccount } from "./components/SmftUserAccount.js";

customElements.define("cs-app", CsApp);
customElements.define("cs-header", CsHeader);
customElements.define("cs-left-sidebar", CsLeftSidebar);
customElements.define("cs-right-sidebar", CsRightSidebar);
customElements.define("cs-content", CsContent);

/** Components */
customElements.define("smft-nav", SmftNavigation);
customElements.define("smft-search-bar", SmftSearchBar);
customElements.define("smft-user-account", SmftUserAccount);

/** Dropdown JS */
window.onclick = function (event) {
    console.log(event.target.tagName)
  if (!event.target.matches(".toggleBtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }else{
    document.getElementById("myDropdown").classList.toggle("show");
  }
};
