// const time_left = document.getElementById('time_left');
// let time_left_var = 30;
// let score_var = 0;
// const start_game = document.getElementById('start_game');
// const score = document.getElementById('score');
// const reset = () => {
//     score_var = 0;
//     time_left_var = 30;
//     moles = new Array(12).fill(0);
// }
// const moles = new Array(12).fill(0);
// const disp_moles = document.querySelectorAll('.block');
// for (let i = 0; i < disp_moles.length; i++) {
//     let element = disp_moles[i].firstElementChild;
//     element.addEventListener('click', (event) => {
//         event.preventDefault();
//         if (moles[i] == 1) {
//             score_var += 1;
//             element.disabled = true;
//             element.style.opacity = 0.5;
//         }
//     })
// }
// const generateRandom = () => {
//     let random = Math.floor(Math.random() * 12);
//     moles[random] = 1;
//     console.log(disp_moles[random]);
//     disp_moles[random].firstElementChild.style.visibility = 'visible';

//     const mole_time = setTimeout(() => {
//         moles[random] = 0;
//         disp_moles[random].firstElementChild.style.visibility = 'hidden';
//         disp_moles[random].firstElementChild.style.opacity = 1;
//         disp_moles[random].firstElementChild.disabled = false;
//         if (time_left_var < 0)
//             clearTimeout(mole_time);
//     }, 3000);
// }
// start_game.addEventListener('click', () => {
//     time_left.innerHTML = time_left_var;
//     score.innerHTML = score_var;
//     const timer_interval = setInterval(() => {
//         time_left_var -= 1;
//         if (time_left_var >= 0) {
//             score.innerHTML = score_var;
//             time_left.innerHTML = time_left_var;
//         }
//         if (time_left_var < 0) {
//             clearInterval(timer_interval);
//             alert('Time is Over!');
//             reset();
//         }
//         generateRandom();
//     }, 1000);


// });
