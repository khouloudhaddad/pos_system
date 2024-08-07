import { CsHeader } from './slots/CsHeader.js';
import { CsApp } from './slots/CsApp.js';
import { CsLeftSidebar } from "./slots/CsLeftSidebar.js";
import { CsRightSidebar } from './slots/CsRightSidebar.js';
import { CsContent } from './slots/CsContent.js';

customElements.define('cs-app', CsApp);
customElements.define('cs-header', CsHeader);
customElements.define('cs-left-sidebar', CsLeftSidebar);
customElements.define('cs-right-sidebar', CsRightSidebar);
customElements.define('cs-content', CsContent);