import companies from '../data/companies';

const exo1 = () => {
  const div = document.querySelector('#exo1');
  div.innerHTML += '<h3>Exercice 1</h3>';
  div.innerHTML += `<p>Dans <code>exo1.js</code>, afficher le nom de chaque <code>company</code> en utilisant <code>forEach</code>.</p>`;
  div.innerHTML += `<h5><u>Résultat :</u></h5>`;
};

export default exo1;
