function decimalToBinary(num) {
	let output=""; 

	while(num>=2){
      let rem= num%2;
		output=output+rem;
		num = pareseInt(num/2);
		
	}
	if(num==1){
     output= 1+ output;
	}
	return output;
	
  //Write you code here
  
}

window.decimalToBinary = decimalToBinary;
