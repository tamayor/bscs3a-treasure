const CSLanyardList = [
  {"name": "ALLEGROSO, ROSE JOANNA","sex": "female","willBuy": false,"paid": 0},
  {"name": "BRAZA, JOEFY JHADE DANAO","sex": "male","willBuy": false,"paid": 0},
  {"name": "BIENVENIDO GIGANTE BIONAT JR. III","sex": "male","willBuy": false,"paid": 0},
  {"name": "BUENAFE, SHAN KIAN RAFIO","sex": "male","willBuy": false,"paid": 0},
  {"name": "CADUNGOG, MYKA JOYCE CANSANCIO","sex": "female","willBuy": false,"paid": 0},
  {"name": "CAMAG, KHIANE BRICKZ CABRISTANTE","sex": "female","willBuy": false,"paid": 0},
  {"name": "CERBO, NICOLE ASHLEY ESPINOSA","sex": "female","willBuy": false,"paid": 0},
  {"name": "CERIGO, STEPHANIE LAURYN PENDON","sex": "female","willBuy": false,"paid": 0},
  {"name": "DEAMBOY, AKARI SADIANG-ABAY","sex": "female","willBuy": false,"paid": 0},/*gcash*/
  {"name": "DE FELIPE, KURT JOAQUIN GONZALES","sex": "male","willBuy": false,"paid": 0},
  {"name": "DEOCAMPO, JOHN DALE SABIO","sex": "male","willBuy": false,"paid": 0},
  {"name": "EDIANEL, ROWEL ANGELO ESTARES","sex": "male","willBuy": false,"paid": 0},/* paid by me*/
  {"name": "ERMOSO, DIVINE JOY ESLERA","sex": "female","willBuy": false,"paid": 0},
  {"name": "ESTUCHE, RASHMERJAN BANGERO","sex": "male","willBuy": false,"paid": 0},
  {"name": "FERNANDEZ, KYLE OWIE ARMENTIA","sex": "male","willBuy": false,"paid": 0},
  {"name": "FORRO, REHLEN MAE PAINAGA","sex": "female","willBuy": false,"paid": 0},
  {"name": "GRANDIA, JOHN EMMANUEL","sex": "male","willBuy": false,"paid": 0},
  {"name": "INOCENCIO, DANIEL MACAYAN","sex": "male","willBuy": false,"paid": 0},
  {"name": "JABICAN, JOHN COOLYN RUBIO","sex": "male","willBuy": false,"paid": 0},
  {"name": "JARDIN, JOHN MARK SIASON","sex": "male","willBuy": false,"paid": 0},
  {"name": "LINDAYAO, EDJAY","sex": "male","willBuy": false,"paid": 0},
  {"name": "LOPEZ, PETER GABRIEL REFENDOR","sex": "male","willBuy": false,"paid": 0},
  {"name": "LLAVE, RHEA MAE ROBLES","sex": "female","willBuy": false,"paid": 0},/*gcash*/
  {"name": "MATANGUIHAN, KHENEE CAMINIAN","sex": "female","willBuy": false,"paid": 0},
  {"name": "NARANDAN, FRANCIS IVAN BALES","sex": "male","willBuy": false,"paid": 0},
  {"name": "PACLIBAR, MARK CJ CEBALLOS","sex": "male","willBuy": false,"paid": 0},
  {"name": "PASOL, JOHN PATRICK PENETRANTE","sex": "male","willBuy": false,"paid": 0},/* paid by me*/
  {"name": "PILLADO, MARK GABRIEL M.","sex": "male","willBuy": false,"paid": 0},
  {"name": "PRANDAS, MICAH ANDIANO","sex": "male","willBuy": false,"paid": 0},
  {"name": "SABADO, JOHN CHAVIE ECONG","sex": "male","willBuy": false,"paid": 0},
  {"name": "SALONGCONG, LEAH GRACE GARDE","sex": "female","willBuy": false,"paid": 0},/*gcash*/
  {"name": "STA. CRUZ, EULA GRACE GAYOLA","sex": "female","willBuy": false,"paid": 0},
  {"name": "SAUZA, JOHN LLYCO MALNEGRO","sex": "male","willBuy": false,"paid": 0},
  {"name": "SEÑERES, KEYCEAN KLYK SELIBIO","sex": "male","willBuy": false,"paid": 0},
  {"name": "SOTITO, SEANRON FACTON","sex": "male","willBuy": false,"paid": 0},
  {"name": "TABANG, EDWARD VON JOSEF BRAZA","sex": "male","willBuy": false,"paid": 0},
  {"name": "TALAMAN, KATHERINE TABAT","sex": "female","willBuy": false,"paid": 0},/*gcash*/
  {"name": "TAMAYOR, ELLY MAR ESTRIBOR","sex": "male","willBuy": false,"paid": 0},
  {"name": "UNTAL, LEANDRO JOSE ENDRIGA","sex": "male","willBuy": false,"paid": 0},
  {"name": "TORRES, SOPHIE ORESCO","sex": "female","willBuy": false,"paid": 0},
  {"name": "VERDUGO, ABEGAIL VANJO GONZAGA","sex": "female","willBuy": false,"paid": 0},
  {"name": "VILLALUZ, BEA BIANCA","sex": "female","willBuy": false,"paid": 0}
];

const namesToModify = [
  "Matanguihan",
"Cerbo",
"Lindayao",
"Prandas",
"Torres",
"Ermoso",
"Villaluz",
"Salongcong",
"Estuche",
"Narandan",
"Fernandez",
"Sauza",
"Deamboy",
"Sotito",
"Buenafe",
"Deocampo",
"Forro",
"Braza",
"Grandia",
"Edianel",
"Verdugo",
"Sta. Cruz",
"Talaman",
"Llave",
"Inocencio",
"Jardin",
"Lopez",
"Jabican",
"Cerigo",
"Tabang",
"Señeres",
"Pasol",
"Cadungog",
"Camag",
"Sabado",
];

namesToModify.forEach(name =>{
  const entry = CSLanyardList.find(item => item.name.includes(name.toUpperCase()))

  if(entry){
    entry.willBuy = true;
    entry.paid = 100;
  }
})
export default CSLanyardList;
