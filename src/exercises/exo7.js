import ages from '../data/ages';

const exo7 = () => {
  const div = document.querySelector('#exo7');
  div.innerHTML += '<h3>Exercice 7</h3>';
  div.innerHTML += `<p>Dans <code>exo7.js</code>, afficher la somme de tous les ages en utilisant <code>reduce</code>.</p>`;
  div.innerHTML += `<h5><u>Résultat :</u></h5>`;
};

export default exo7;
