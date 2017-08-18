function isLogin(){
		// let input_username= document.querySelector('#usernname');
		// let input_username = document.querySelector('#password');
		let inname = document.querySelector('#txtName').value;
        let inpassword = document.querySelector('#txtPass').value;
		let account = JSON.parse(localStorage.getItem("user"));
		let html=``;
		console.log(account);
		
		// account.map((search)=>{
		// 	if(search.username == input_username && search.password == input_password){
		// 		console.log(search.username);
		// 		console.log(search.password);
		// 		window.open("/users");
		// 		break;

		// 	}
		// 	alert("Error");
			
		// });
	try{
		for(var i = 0; i < account.length; i++){
			if(account == null){
					alert("Invalid Username or Password");
				}

  			else if(account[i].txtName == inname && account[i].txtPass == inpassword){
    			console.log(account[i].txtNname);
    			console.log(account[i].txtPassword);
    			window.open("/profile");
    			break;
			}

			else{
				alert("Invalid Username or Password");
				break;
			}
  			
		}
		
	}
	catch()TypeError){
		alert("Invalid username or password!")
}