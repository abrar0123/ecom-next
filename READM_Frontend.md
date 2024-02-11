axios , bcryptjs , jsonwebtoken , nodemailer, react-hot-toast, mongoose

<!-- jsonwebtoken -->

not stored in localstorage > cookies stored

<!-- bcryptjs -->

hashpass , add security layer , verfiy users
it hash (secure ) password (not accesible by browser ) ,

<!-- verify Token  :  -->

Hash String copy 1 store into DB , Hash String copy2 store into browser , when user logged in it check if match then logged in

<!-- verify Token Expiry :  -->

token shuold match and time should be certain limit (app)

<!-- Forgot password : enctypted with hash -->

same logic , user email and db store 2 copies of token if token match then user able to forgot pass

<!-- Directory structure  -->

Layout :comon wrapper for all comp , navbar , card jst render componenst

<!-- Tailwind css not style : error   -->

i added src >> app >> but tailwind css not add so
move into tailwind.config.ts / give correct path like i give /src before and error resolved

limit : maximum items displays : 10
skip : each time skip items and next run 10, 10 (btn)
