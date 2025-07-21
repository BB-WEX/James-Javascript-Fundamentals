
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        data = await response.json();

        return data;
    } catch (error) {
        var message3 = ('fetchData Error:', error.message);
        const errorOutput = document.getElementById("errorLocation");
        errorOutput.innerHTML = "fetchData Error:" + message3;
    }
}

function getInnerTxt() {
    try{
        indexnum = document.getElementById('userInput').value;
    

    if (indexnum > 0){
        indexnum = indexnum - 1;
        indexedData = data[indexnum];
    } else {
        indexedData = data[indexnum];
    }
    
    // document.querySelector('#outtxt').innerHTML = Object.entries(indexedData);

    // var keyArr = ['name', 'username', 'email', 'street', 'suite', 'city', 'zipcode', 'phone', 'website', 'company.name'];

    var dataName = indexedData.name;
    document.querySelector('#nameOutput').innerHTML = dataName;

    var dataUsername = indexedData.username;
    document.querySelector('#usernameOutput').innerHTML = dataUsername;

    var dataEmail = indexedData.email;
    document.querySelector('#emailOutput').innerHTML = dataEmail;

    var dataStreet = indexedData.address.street;
    document.querySelector('#streetOutput').innerHTML = dataStreet;

    var dataSuite = indexedData.address.suite;
    document.querySelector('#suiteOutput').innerHTML = dataSuite;

    var dataCity = indexedData.address.city;
    document.querySelector('#cityOutput').innerHTML = dataCity;

    var dataZipcode = indexedData.address.zipcode;
    document.querySelector('#zipcodeOutput').innerHTML = dataZipcode;

    var dataPhone = indexedData.phone;
    document.querySelector('#phoneOutput').innerHTML = dataPhone;

    var dataWebsite = indexedData.website;
    document.querySelector('#websiteOutput').innerHTML = dataWebsite;

    var dataCompanyName = indexedData.company.name;
    document.querySelector('#companyNameOutput').innerHTML = dataCompanyName;

    } catch (error){
        var message2 = ("Invalid input was submitted: ", error.message);
        const errorOutput = document.getElementById("errorLocation");
        errorOutput.innerHTML = "Invalid input was submitted: " + message2;
    } 
    



}



