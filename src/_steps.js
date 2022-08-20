/**
 * steps to use firebase
 * 1. Create a project on console.firebase.google.com
 * 2. Install firebase
 * 3. Register web app in firebase
 * 4. Copy firebase init with config from firebase project settings and past it firebase.init.js file which is created in src folder.
 * 5. Export default app
 * 6. import { getAuth } from "firebase/auth"; and create auth variable (const auth = getAuth(app);)
 * 7. Import app firebase init.js into your app.js
 * 8. Turn on google authentication (firebase > authentication > enable google sign in)
 * 9. Create google provider
 * 10. use signInWithPopup and pass auth and provider
 * 11. handle .then (if success) and .catch error (if error)
 */