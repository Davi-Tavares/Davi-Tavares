var num1,num2,Nome,RA,res;
num1=prompt("Digite um número");//14
num1=parseInt(num1);
num2=prompt("Digite outro número");//3
num2=parseInt(num2);
Nome=prompt("Digite Seu Nome");
RA=prompt("Digite seu RA");
RA=parseInt(RA);
res=(num1==num2);
document.write("Nome do aluno<br> Nome:"+Nome, "<br>");
document.write("RA do Aluno<br> RA:"+RA, "<br>");
document.write("Números digitados:<br>num1: "+num1+"<br> num2: "+num2+"<hr>");
document.write("Igualdade: "+res+"<br>");
res=(num1===num2);
document.write("Identico: "+res+"<br>");
