import environment from './environment';
import 'firebase';

export function configure(aurelia) {

    aurelia.use
        .standardConfiguration()
        .feature('resources')
        // .plugin('aurelia-onsenui')
        .plugin('aurelia-materialize-bridge', b => b.useAll());


    if (environment.debug) {
        aurelia.use.developmentLogging();
    }

    if (environment.testing) {
        aurelia.use.plugin('aurelia-testing');
    }

    let config = {
        apiKey: 'AIzaSyBOjr3p2p-PdRvJSXUOjRvJurELNMBQ9Q0',
        authDomain: 'aureliatodo.firebaseapp.com',
        databaseURL: 'https://aureliatodo.firebaseio.com',
        projectId: 'aureliatodo',
        storageBucket: 'aureliatodo.appspot.com',
        messagingSenderId: '580129879737'
    };

    console.log(`firebase: ${firebase}`);
    console.log(`firebase.initializeApp: ${firebase.initializeApp}`);
    firebase.initializeApp(config);


    aurelia.start().then(() => aurelia.setRoot('./components/shell'));
    // aurelia.start().then(() => aurelia.setRoot('app'));
}
