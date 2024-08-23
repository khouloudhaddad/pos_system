import { CS_HTMLElement } from "../_base/cs-htmlelement.js";

class SmftUserAccount extends CS_HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
            <div class="user_info">
                <h5>Lina Punk Manado</h5>
                <p>Sunday, 15 January 2023</p>
            </div>
            <div class="avatar">
                <div class="dropdown">
                <button class="toggleBtn"><img src="../public/img/avatar.png" alt="" /></button>
                    <div id="myDropdown" class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>

            <style>
                :host {
                   flex: 1 0 50%; 
                   display: flex;
                   justify-content: end;
                   align-items: center;
                }
                .user_info{
                    display: flex;
                    flex-direction:  column;
                    text-align: right;
                }
                h5 {
                   font-weight: 700;
                   font-size: 1.2rem;
                   margin: 0;
                }
                p {
                    color: #adb5bd;
                    font-size: 0.8rem;
                    margin: 0;
                    font-weight: 300;
                }
                .avatar{
                    width: 50px;
                    height: 50px;
                    margin-left: 1rem
                }
                .avatar img{
                    max-width: 100%;
                }

                .toggleBtn {
                    font-size: 16px;
                    border: none;
                    cursor: pointer;
                    z-index: 3000;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                }

                .dropbtn:hover, .dropbtn:focus {
                    background-color: #2980B9;
                }

                .dropdown {
                    position: relative;
                    display: inline-block;
                }

                .dropdown-content{
                    display: none;
                    position: absolute;
                    background-color: #f1f1f1;
                    min-width: 160px;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 1;
                }
                .dropdown-content a {
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                }

                .dropdown-content a:hover {background-color: #ddd;}

                .show {display:block;}
                
            </style>
            `;
  }
}

export { SmftUserAccount };
