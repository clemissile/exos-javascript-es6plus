import companies from '../data/companies';

const exo4 = () => {
  const div = document.querySelector('#exo4');
  div.innerHTML += '<h3>Exercice 4</h3>';
  div.innerHTML += `<p>Dans <code>exo4.js</code>, trier les <code>companies</code> dans l'ordre croissant de leur date de création.</p>`;
  div.innerHTML += `<h5><u>Résultat :</u></h5>`;
};

export default exo4;
