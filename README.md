FixedBlock
==========

**FixedBlock** est une library en html5 permettant d'ajouter dynamiquement une class à un élément du dom *onScroll* à la position Y de celui-ci.

**Cas d'utilisation :** Cette library peut être utilisé afin de passer un menu en *position: fixe* quand le haut de la page arrive à sa hauteur. (Ex: twitter.github.com/bootstrap)

##Library 

Cette library peut être très simplémenté à tous sites. Pour cela importer le code javascript comme suit :

Dans : <head>
```html
<script type="text/javascript" src="./FixedBlock"></script>
```

A la fin de votre page :
```html
<script type="text/javascript">
	new FixedBlock('element-id', 'fixed-class');
</script>
```