import MainContainer from './view/MainContainer.mjs';

const onStart = () => Neo.app({
    appPath : 'apps/covidhelix/',
    mainView: MainContainer,
    name    : 'CovidHelix'
});

export {onStart as onStart};