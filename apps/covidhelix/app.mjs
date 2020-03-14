import MainContainer from './view/MainContainer.mjs';

Neo.onStart = function() {
    Neo.app({
        appPath : 'apps/covidhelix/',
        mainView: MainContainer,
        name    : 'CovidHelix'
    });
};