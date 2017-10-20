


PRIMATIVES:

number
booleans
strings
null
undefined



OBJECTS:

math
date
json
window
document
objects you create
array
function








las funciones definen el ambito de las variables
todas las funciones regresan un valor undefined por defecto
todas las funciones tienen la propiedad name, function.name
todas las funciones son objetos
en todas las funciones se puede acceder a arguments
no hay sobreescritura de funciones

las funciones tienen ambito + contexto
ambito = variables que tiene acceso
contexto = this

cuerpo de la funcion = ambito

contecto en una llamada a una funcion depende de como es llamada la funcion

el contexto es el objeto que se esta llamando


pedro.objeto.objeto2.saluda(); // el contexto es objeto2

en constructor regresa return this;
