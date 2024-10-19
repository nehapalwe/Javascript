function calculateAge() {
    const dobInput = document.getElementById("dob");
    const resultElement = document.getElementById("result");

    const dob = new Date(dobInput.value);
    const today = new   
 Date();

    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate()   
 < dob.getDate())) {
        age--;
    }

    resultElement.textContent   
 = `Your age is ${age} years old`;
}