db /*Nos muestra la base de datos activa actualmente.*/
show dbs /*Nos permite ver todas las bases de datos disponibles.*/
show collections /*nos permite mostrar todas las colecciones que tenemos.*/
use cervezas /*indica la base de datos para trabajar. Si no existe, la crea.*/
db.col01.insertOne({nombre:'Rubita',grados:5,tipo:'pilsen'}) /*Inserta tres campos con sus valores en la coleccion col01 de la base de datos cervezas. */
db.col01.insertOne({ingredientes:[{cebada:2.5,lupulo:0.25,levadura:0.25,agua:27}]}) /*Inserta un array con los ingredientes de mi cerveza.*/
db.col01.find({nombre:'Rubita'})/*Muestra el documento que tiene en su campo nombre la cerveza llamada Rubita*/
db.col01.insertMany([{nombre:'Negrita',grados:6.5,tipo:'stout'},{nombre:'Tostadita',grados:5.5,tipo:'polter'},{nombre:'Olorosa',grados:6,tipo:'Ipa'}])
db.col01.find({nombre:'Tostadita'})/*Muestra el documento que tiene en su campo nombre la cerveza llamada Tostadita.*/
db.col01.find() /*Muestra las colecciones de la base de datos*/
db.col01.deleteOne({nombre:'Olorosa'})/*Borra los documentos que coincidan con la condición o sea que su nombre sea Olorosa.*/
db.col01.deleteMany({}) /*Borra todo lo creado hasta el momento.*/