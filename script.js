const systems = [
  {
    id: '1',
    systemName: 'Tonic',
    systemImage: './images/kumie/c1.svg',
    org: {
      orgName: 'CONOPY',
      position: 'Back End Dev',
      year: '2020',
    },
    systemDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://kumilachew-g.github.io/',
    source: 'https://kumilachew-g.github.io/',
  },
  {
    id: '2',
    systemName: 'Multi-Post Stories',
    systemImage: './images/kumie/c2.svg',
    org: {
      orgName: 'FACEBOOK',
      position: 'Full Stack Dev',
      year: '2018',
    },
    systemDescription:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: 'https://kumilachew-g.github.io/',
    source: 'https://kumilachew-g.github.io/',
  },
  {
    id: '3',
    systemName: 'Facebook 360',
    systemImage: './images/kumie/c3.svg',
    org: {
      orgName: 'FACEBOOK',
      position: 'Full Stack Dev',
      year: '2019',
    },
    systemDescription:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: 'https://kumilachew-g.github.io/',
    source: 'https://kumilachew-g.github.io/',
  },
  {
    id: '4',
    systemName: 'Uber Navigation',
    systemImage: './images/kumie/c4.svg',
    org: {
      orgName: 'Uber',
      position: 'Lead Developer',
      year: '2016',
    },
    systemDescription:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: 'https://kumilachew-g.github.io/',
    source: 'https://kumilachew-g.github.io/',
  },
];

const mobileMennu = document.getElementById('nav-js');
const openMenuMob = document.getElementById('open');
const closeMenuMob = document.getElementById('close');
const li = mobileMennu.getElementsByTagName('a');
const cardsContainer = document.getElementById('work-container');
const buttons = cardsContainer.getElementsByTagName('button');
const popupContainer = document.getElementById('popup');

let i;
let j;

function systemLaod() {
  let systemCounter;
  for (systemCounter = 0; systemCounter < systems.length; systemCounter += 1) {
    let m;
    let technologies = '';
    for (m = 0; m < systems[systemCounter].technologies.length; m += 1) {
      technologies += `<li>
        <a href='#'>${systems[systemCounter].technologies[m]}</a>
      </li>`;
    }
    cardsContainer.innerHTML += `<div class="card">
                <div class="card-container">
                    <div class="card-img">
                        <img src="${systems[systemCounter].systemImage}" alt="" />
                    </div>
                    <div class="card-content">
                        <h3>${systems[systemCounter].systemName}</h3>
                        <div class="card-org">
                            <h5>${systems[systemCounter].org.orgName}</h5>
                            <ul class="ul-position-year">
                                <li>${systems[systemCounter].org.position}</li>
                                <li>${systems[systemCounter].org.year}</li>
                            </ul>
                        </div>
                        <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
                        <ul class="card-con-ul">
                            ${technologies}
                        </ul>
                        <button data-target="${systems[systemCounter].id}" type="submit" class="get-btn">See Project</button>
                    </div>
                </div>
            </div>`;
  }

  function show() {
    mobileMennu.classList.remove('visible');
    openMenuMob.classList.add('visible');
  }

  function hide() {
    mobileMennu.classList.add('visible');
    openMenuMob.classList.remove('visible');
  }

  function hidePopup() {
    popupContainer.classList.add('visible');
  }

  function showPopup(e) {
    const focusId = e.target.getAttribute('data-target');
    const system = systems.filter((item) => item.id === focusId);
    let technologies = '';
    let m;
    for (m = 0; m < system[0].technologies.length; m += 1) {
      technologies += `<li>
        <a href='#'>${system[0].technologies[m]}</a>
      </li>`;
    }
    const popup = `<div class="popup">
            <div class="popup-header">
                <div class="popup-header-up">
                    <h2 class="popup-title">${system[0].systemName}</h2>
                    <img id="popupClose" src="./images/close-icon.svg" alt="">
                </div>
                <div class="popup-content">
                    <h5>${system[0].org.orgName}</h5>
                    <ul class="ul-position-year">
                        <li>${system[0].org.position}</li>
                        <li>${system[0].org.year}</li>
                    </ul>
                </div>
                <div class="popup-img">
                    <img src="${system[0].systemImage}" alt="">
                </div>
            </div>
            <div class="popup-container">
                <div class="popup-description">
                    <p>${system[0].systemDescription}</p>
                </div>
                <div class="popup-description-list">
                    <div class="popup-list">
                        <ul class="card-con-ul">
                            ${technologies}
                        </ul>
                    </div>
                    <span class="deploy"></span>
                    <div class="button-containner">
                        <a href="${system[0].live}" target="_blank" class="popup-btn">See live<i class="see-live"></i></a>
                        <a href="${system[0].source}" target="_blank" class="popup-btn">See Source<i class="see-source"></i></a>
                    </div>
                </div>
            </div>
        </div>`;
    popupContainer.innerHTML = popup;
    popupContainer.classList.remove('visible');
    const popupCloseButton = document.getElementById('popupClose');
    popupCloseButton.addEventListener('click', hidePopup);
  }

  openMenuMob.addEventListener('click', show);
  closeMenuMob.addEventListener('click', hide);
  for (i = 0; i < li.length; i += 1) {
    li[i].addEventListener('click', hide);
  }

  for (j = 0; j < buttons.length; j += 1) {
    buttons[j].addEventListener('click', showPopup.bind(buttons[j]));
  }
}

document.addEventListener('DOMContentLoaded', systemLaod, false);

const contactForm = document.getElementById('contactForm');
const errorMessage = 'write your email in lowercase letters';
const errorMessageContainer = document.getElementById('error');
const emailInput = document.getElementById('email');
contactForm.addEventListener('submit', (event) => {
  const emailvalidateion = /[A-Z]/;

  if (emailvalidateion.test(emailInput.value)) {
    emailInput.focus();
    errorMessageContainer.classList.remove('visible');
    errorMessageContainer.innerText = errorMessage;
    event.preventDefault();
  } else if (!errorMessageContainer.className === 'visible') {
    errorMessageContainer.classList.add('visible');
  }
});

const nameInput = document.getElementById('name');
const maileInput = document.getElementById('email');
const messageInput = document.getElementById('msg');
const formData = '';
const inputsData = [nameInput, maileInput, messageInput];

function setData() {
  const contactFormData = JSON.parse(localStorage.getItem(formData));
  nameInput.value = contactFormData.name;
  maileInput.value = contactFormData.email;
  messageInput.value = contactFormData.msg;
}

function saveData() {
  const contactFormData = {};
  for (i = 0; i < inputsData.length; i += 1) {
    contactFormData[inputsData[i].id] = inputsData[i].value;
  }
  localStorage.setItem(formData, JSON.stringify(contactFormData));
}

function checkData() {
  if (!localStorage.getItem(formData)) {
    saveData();
  } else {
    setData();
  }
}

checkData();

nameInput.setAttribute('onchange', 'saveData()');
maileInput.setAttribute('onchange', 'saveData()');
messageInput.setAttribute('onchange', 'saveData()');
