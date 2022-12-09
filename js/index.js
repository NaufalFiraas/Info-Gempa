import getAPI from './modules/getFromAPI/getAPI.mjs';
import { showCredits, showGempaDirasakan, showGempaM5, showGempaTerkini } from './modules/aggregateShowContents.mjs';

const toggleHeading = document.getElementsByClassName('toggle')[0];
const headingMenu = document.getElementsByClassName('heading-menu')[0];
const contentContainer = document.getElementsByClassName('content')[0];
const headingBtns = document.querySelectorAll('.heading-menu li');

toggleHeading.addEventListener('click', function () {
    this.classList.toggle('clicked');
    headingMenu.classList.toggle('clicked');
});

getAPI(
    'GET',
    'autogempa',
    (dataGempa) => contentContainer.innerHTML = showGempaTerkini(dataGempa),
    (err) => contentContainer.innerHTML = `<h2>${err}</h2>`,
    () => { },
);

for (let i = 0; i < headingBtns.length; i++) {
    headingBtns[i].addEventListener('click', function (e) {
        for (let j = 0; j < headingBtns.length; j++) {
            if (headingBtns[j].classList.contains('active')) {
                headingBtns[j].classList.remove('active');
            }
        }
        this.classList.add('active');

        if (this.dataset.param !== '') {
            getAPI(
                'GET',
                this.dataset.param,
                (dataGempa) => {
                    contentContainer.classList.remove('gempa-terkini');
                    contentContainer.classList.remove('gempa-dirasakan-m5');
                    contentContainer.classList.remove('credits');
                    if (this.dataset.param === 'gempaterkini') {
                        contentContainer.classList.add('gempa-dirasakan-m5');
                        contentContainer.innerHTML = showGempaM5(dataGempa);
                    } else if (this.dataset.param === 'gempadirasakan') {
                        contentContainer.classList.add('gempa-dirasakan-m5');
                        contentContainer.innerHTML = showGempaDirasakan(dataGempa);
                    } else {
                        contentContainer.classList.add('gempa-terkini');
                        contentContainer.innerHTML = showGempaTerkini(dataGempa);
                    }
                },
                (err) => contentContainer.innerHTML = `<h2>${err}</h2>`,
                () => { },
            );
        } else {
            contentContainer.classList.remove('gempa-dirasakan-m5');
            contentContainer.classList.remove('gempa-terkini');
            contentContainer.classList.add('credits');
            contentContainer.innerHTML = showCredits();
        }
    });
}

