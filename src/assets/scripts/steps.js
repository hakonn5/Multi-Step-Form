const steps = {
  get "step-0"() {
    return `
    <main class="content">
      <section class="section container">
        <form class="form" data-js-form novalidate>
          <div class="steps" data-js-form-steps>
            <ul class="steps__list">
              <li class="steps__list-item">
                <div class="steps__label steps__label--active" data-js-form-step>
                  <span class="steps__label-step">1</span>
                </div>
                <div class="steps__info hidden-mobile">
                  <div class="steps__info-title">Step 1</div>
                  <div class="steps__info-description">Your info</div>
                </div>
              </li>
              <li class="steps__list-item">
                <div class="steps__label" data-js-form-step>
                  <span class="steps__label-step">2</span>
                </div>
                <div class="steps__info hidden-mobile">
                  <div class="steps__info-title">Step 2</div>
                  <div class="steps__info-description">Select Plan</div>
                </div>
              </li>
              <li class="steps__list-item">
                <div class="steps__label" data-js-form-step>
                  <span class="steps__label-step">3</span>
                </div>
                <div class="steps__info hidden-mobile">
                  <div class="steps__info-title">Step 3</div>
                  <div class="steps__info-description">Add-Ons</div>
                </div>
              </li>
              <li class="steps__list-item">
                <div class="steps__label" data-js-form-step>
                  <span class="steps__label-step">4</span>
                </div>
                <div class="steps__info hidden-mobile">
                  <div class="steps__info-title">Step 4</div>
                  <div class="steps__info-description">Summary</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="form__body">
            <div class="personal-info">
              <div class="form__header">
                <h1 class="form__title">Personal info</h1>
                <p class="form__description">
                  Please provide your name, email address, and phone number
                </p>
              </div>
              <div class="form__inner">
                <div class="personal-info__body">
                  <div class="form__cell field" data-js-form-field>
                    <label class="field__label" for="name">Name</label>
                    <input
                      class="field__control"
                      id="name"
                      title="e.g. Stephen King"
                      placeholder="e.g. Stephen King"
                      required
                      data-js-form-field-control
                    />
                  </div>
                  <div class="form__cell field" data-js-form-field>
                    <label class="field__label" for="email"
                      >Email Address</label
                    >
                    <input
                      class="field__control"
                      id="email"
                      title="e.g stephen@lorem.com"
                      placeholder="e.g. stephenking@lorem.com"
                      required
                      data-js-form-field-control
                      data-js-form-field-control-email
                    />
                  </div>
                  <div class="form__cell field" data-js-form-field>
                    <label class="field__label" for="phone"
                      >Phone Number</label
                    >
                    <input
                      class="field__control"
                      id="phone" 
                      title="e.g +1234567890"
                      placeholder="e.g. +1 234 567 890"
                      required
                      data-js-form-field-control
                      data-js-form-field-control-phone
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form__actions" data-js-form-actions>
            <button type="button" class="form__button form__button--next" data-js-form-actions-next>
              <span>Next Step</span>
              <svg
                class="form__button-icon form__button-icon--next"
                viewBox="0 -6.5 36 36"
                version="1.1"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g
                    id="icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="ui-gambling-website-lined-icnos-casinoshunter"
                      transform="translate(-212.000000, -159.000000)"
                      fill="#252528"
                      fill-rule="nonzero"
                    >
                      <g
                        id="square-filled"
                        transform="translate(50.000000, 120.000000)"
                      >
                        <path
                          d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </form>
      </section>
    </main>
    `;
  },
};

export default steps;
