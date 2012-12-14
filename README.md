FixedBlock
==========

**FixedBlock** est une librarie en html5 permettant d'ajouter dynamiquement une *classe css* à un élément du dom *onScroll* à la position Y de celui-ci.

**Cas d'utilisation :** Cette librarie peut être utilisée afin de rendre statique un menu quand l'utilisateur atteint sa position vertical lors du défilement de la page. Il est possible de voir ce type d'interaction dans la majorité des documentations. (Ex: twitter.github.com/bootstrap)

##Librarie

Cette librarie peut être très simplement implémentée à tous sites. Pour cela importer le code javascript comme suit :

Dans : ```<head>```
```html
<script type="text/javascript" src="./FixedBlock"></script>
```

A la fin de votre page :
```html
<script type="text/javascript">
	new FixedBlock('element-id', 'fixed-class');
</script>
```


##Compatibilités

La librairy est compatible pour les navigateurs suivants :
* Firefox 
* Chrome 
* Opera 
* Internet Explorer 8+