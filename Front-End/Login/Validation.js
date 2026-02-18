function validate() {
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    const users = [
        {emailId : 'souryaramasura@gmail.com', password : 'Asura@1407'},
        {emailId : 'nsairamanjaneyulu1407@gmail.com', password : 'sairamanjaneyulu@1407'},
        {emailId : 'sairamanjaneyulun@gmail.com', password : 'Sai.N@1407'},
        {emailId : 'Sairam1407@gmail.com', password : 'Sairam@1407'}
    ];

    if (!email || !password) {
        alert('Enter your EmailId & Password')
        return;
    }

    const isValidUser = users.find(
        user => user.emailId === email && user.password === password
    );

    if (isValidUser) {
        sessionStorage.setItem('user', email);
        alert('Login Successfull');
        window.location.href = 'Dashboard.html';
        return false;
    } else {
        alert('Invalid EmailId or Password, Try Again');
        return false;
    }
}