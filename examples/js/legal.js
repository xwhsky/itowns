var viewerDiv = document.getElementById("viewerDiv");
var legalDiv  = document.createElement('div');
var form = document.createElement('div');
legalDiv.id = 'legalDiv';
form.id = 'form';
viewerDiv.appendChild(legalDiv);
legalDiv.appendChild(form);
console.log(legalDiv);

viewerDiv.style.position = 'relative';
legalDiv.style.position = 'absolute';
legalDiv.style.margin = 'auto';
legalDiv.style.zIndex = 1000;
legalDiv.style.overflow = 'auto';

legalDiv.style.width = '100%';
legalDiv.style.height = '100%';
legalDiv.style.backgroundColor = 'rgba(0,0,0,0.5)';
legalDiv.style.display = 'flex';


form.style.width = '50%';
form.style.height = '50%';
form.style.backgroundColor = 'rgba(255,255,255,0.8)';
form.style.opacity = '1';
form.style.margin = 'auto';
form.style.padding = '20px';
form.style.alignItems = 'center';
form.style.overflow = 'auto';
form.style.boxShadow = '1px 1px 2px black';
form.style.borderRadius = '20px';
form.style.textAlign = 'justify';

var formulaire = document.createElement('form');
form.appendChild(formulaire);
formulaire.innerHTML = '<h1>Code de conduite Debian</h1> <h2>1.	Être respectueux</h2> <p>Dans un projet de la taille de Debian, inévitablement il y aura des personnes avec lesquelles vous serez en désaccord, ou avec lesquelles vous aurez du mal à coopérer. Acceptez cela, et quoi qu’il en soit, restez respectueux. Une mésentente ne justifie pas un comportement indélicat ou des attaques personnelles, et une communauté où les personnes se sentent maltraitées n’est pas une communauté bien portante.</p> <h2>2.	Croire en la bonne foi</h2> <p>Les contributeurs Debian ont diverses façons pour parvenir à notre but commun d’un système d’exploitation libre, qui peuvent être différentes des vôtres. Présumez que les autres travaillent dans ce but. <p></p>Notez que beaucoup de nos contributeurs ne parlent pas anglais nativement ou vivent dans des environnements culturels différents.</p> <h2>3.	Collaborer</h2> <p>Debian est un projet vaste et complexe ; il y a toujours quelque chose d’autre à apprendre dans le cadre de Debian. Il est sage de demander de l’aide lorsque c’est nécessaire. De même, offrir son aide doit être interprété dans le contexte d’un but commun d’amélioration de Debian.</p> <p>Quand vous faites quelque chose pour améliorer le projet, soyez prêt à expliquer aux autres comment cela fonctionne, de telle façon qu’à partir de votre travail, ils puissent même l’améliorer.</p> <h2>4.	Essayer d’être concis</h2> <p>Gardez en mémoire que ce que vous écrivez une fois, sera lu par des centaines de personnes. Écrire un courriel court doit permettre que la discussion soit comprise du mieux possible. Quand une longue explication est nécessaire, envisagez l’ajout d’un résumé.</p> <p>Essayez d’apporter de nouveaux arguments à la discussion de façon que chaque courriel ajoute quelque chose de nouveau au fil, en n’oubliant pas que le reste du fil contiendra toujours les autres messages avec des arguments déjà exposés.</p> <p>Essayez de rester dans le sujet, particulièrement dans les discussions qui sont déjà relativement larges.</p> <h2>5. Être ouvert</h2> <p>La plupart des moyens de communication utilisés dans Debian permettent de le faire de manière publique ou privée. Comme indiqué dans le paragraphe trois du contrat social, vous devez préférer la méthode publique pour les messages relatifs à Debian, à moins que le sujet ne soit sensible.</p><p>Cela s’applique aussi aux messages d’aide ou d’assistance relative à Debian ; non seulement une demande publique d’assistance amènera plus probablement une réponse à votre question, mais cela fera qu’une erreur involontaire dans la réponse à votre question sera plus facilement détectée et corrigée.</p> <h2>6. En cas de problèmes</h2> <p>Bien que ce code de conduite devrait être accepté par les participants, nous comprenons que parfois certains puissent être dans un mauvais jour, ou ignorant de quelques directives de ce code. Auquel cas, vous devez leur répondre et leur signaler ce code de conduite. De tels messages peuvent être publics ou privés, selon la façon la plus appropriée. Toutefois, suivant que le message est public ou privé, il doit se conformer à la partie pertinente du code de conduite ; en particulier, il ne pourra être injurieux ou irrespectueux. Présumez la bonne foi, il est plus vraisemblable que les participants ne soient pas conscients de leur mauvais comportement plutôt qu’ils n’essaient de pourrir la discussion.</p><p>Les contrevenants graves ou continuels seront temporairement ou de manière définitive exclus de communication à l’intérieur des organismes Debian. Les plaintes devront être faites (en privé) aux administrateurs du forum de discussion en question. Pour trouver le point de contact de ces administrateurs, consultez <a href="https://www.debian.org/intro/organization">la page de la structure organisationnelle de Debian.</a>';


var submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Accepter');

var label = document.createElement('label');
formulaire.appendChild(label);
var checkbox = document.createElement('input'); 
checkbox.setAttribute('type', 'checkbox');
checkbox.setAttribute('id', 'id');
label.appendChild(checkbox);
var para = document.createElement('p');
para.innerHTML = '<p>En cochant cette case, vous reconnaissez avoir pris connaissance des conditions générales d\'utilisation d\'iTowns.</p><p></p>';
formulaire.appendChild(para);


var tag = document.getElementById('id'); 
tag.addEventListener('change',function(){
	if(tag.checked  == true) {
		formulaire.appendChild(submit);
	}else{
		if(submit){
			submit.parentNode.removeChild(submit);
		}
	}
});