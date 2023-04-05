import companies from '../data/companies';

const exo3 = () => {
  const div = document.querySelector('#exo3');
  div.innerHTML += '<h3>Exercice 3</h3>';
  div.innerHTML += `<p>Dans <code>exo3.js</code>, récupérer seulement les <code>companies</code> qui ont comme catégorie <code>Retail</code>, incrémenter leur date de création de 1 et afficher l'objet <code>company</code>.</p>`;
  div.innerHTML += `<h5><u>Résultat :</u></h5>`;
};

export default exo3;
