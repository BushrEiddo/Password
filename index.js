<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Password Generator</title>
</head>
<body>
    <h2>Password Generator</h2>
    <form id="passwordOptions">
        <label for="length">Password length:</label>
        <input type="number" id="length" name="length" min="8" max="128" value="12">
        <br>
        <input type="checkbox" id="includeUppercase" name="includeUppercase" checked>
        <label for="includeUppercase">Include Uppercase Letters</label>
        <br>
        <input type="checkbox" id="includeLowercase" name="includeLowercase" checked>
        <label for="includeLowercase">Include Lowercase Letters</label>
        <br>
        <input type="checkbox" id="includeNumbers" name="includeNumbers" checked>
        <label for="includeNumbers">Include Numbers</label>
        <br>
        <input type="checkbox" id="includeSymbols" name="includeSymbols" checked>
        <label for="includeSymbols">Include Symbols</label>
        <br>
        <button type="button" onclick="generatePassword()">Generate Password</button>
    </form>
    <p id="generatedPassword">Your new password will appear here</p>

    <script >
        
        function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;\':",.<>?';

    let validChars = '';
    if (includeUppercase) validChars += uppercaseChars;
    if (includeLowercase) validChars += lowercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars[randomIndex];
    }

    document.getElementById('generatedPassword').textContent = generatedPassword;
}

    </script>
</body>
</html>
