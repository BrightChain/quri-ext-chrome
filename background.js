//chrome.action.onClicked.addListener(function() {
//  chrome.tabs.create({url: 'credentials.html'});
//});

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCmPnEY9OePRBk1u7xDYn83axkzSMxsRh0',
  authDomain: 'quri-social.firebaseapp.com',
  projectId: 'quri-social',
  storageBucket: 'quri-social.appspot.com',
  messagingSenderId: '245930439182',
  appId: '1:245930439182:web:39239e04efbad7e26d425f',
};
firebase.initializeApp(firebaseConfig);

/**
 * initApp handles setting up the Firebase context and registering
 * callbacks for the auth status.
 *
 * The core initialization is in firebase.App - this is the glue class
 * which stores configuration. We provide an app name here to allow
 * distinguishing multiple app instances.
 *
 * This method also registers a listener with firebase.auth().onAuthStateChanged.
 * This listener is called when the user is signed in or out, and that
 * is where we update the UI.
 *
 * When signed in, we also authenticate to the Firebase Realtime Database.
 */
function initApp() {
  // Listen for auth state changes.
  firebase.auth().onAuthStateChanged(function(user) {
    console.log('User state change detected from the Background script of the Chrome Extension:', user);
  });
}

window.onload = function() {
  initApp();
};
