import MainContainer from './view/MainContainer.mjs';

const onStart = () => Neo.app({
    appThemeFolder: 'covid',
    mainView      : MainContainer,
    name          : 'CovidHelix'
});

export {onStart as onStart};
