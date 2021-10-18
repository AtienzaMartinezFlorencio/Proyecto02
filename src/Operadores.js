db.col01.find({grados:{$lte:6}})/*Nos muestra las cervezas que tienen menos de 6 grados*/
db.col01.find({$or:[{tipo:'polter'},{tipo:'Ipa'}]})/*Nos muestra solo las cervezas que son polter o Ipa*/
db.col01.find({origen:{$nin:['Ingles','Belga']}})/*Nos muestra las cervezas que no son ni Belgas ni Inglesas*/
db.inventory.find({$and:[{grados:{$ne:5.5}},{tipo:{$eq:'Ipa'}}]})/*Nos muestra las cervezas que no tienen 5.5 grados y que son de tipo Ipa*/