function result(){
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  //faire une ligne par opération car +claire et plus simple si modification à faire
  var result = shoeSize * 2;
  result +=5;//on ajoute 5 au résultat
  result *=50;//on multiplie par 50
  result -=yearOfBirth;
  result +=1766;
  if(isNaN(shoeSize)== false && isNaN(yearOfBirth)== false){
    alert(result);
  }else{
    alert('veuiller ne saisir que des chiffres');
  }
}
