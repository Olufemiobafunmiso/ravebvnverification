function verify() {
    
    var bvnumber =  document.getElementById("bvnumber").value;
    var bvn = parseInt(bvnumber, 10);

    var seckey = "FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X"

    var url =  `https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/${bvn}?seckey=${seckey}`;
    
    fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        if (response.status === "success") {
            var status = document.getElementById("status");
            var firstName = document.getElementById("firstname");
            var lastName = document.getElementById("lastname");

            status.innerHTML += response.status;
            firstName.innerHTML += response.data.first_name;
            lastName.innerHTML += response.data.last_name;
            alert("Successful, valid BVN");
        } else {
            alert("Unsuccessful, invalid BVN");
        }
    })
    .catch(err => console.log('unsuccessful'))
}