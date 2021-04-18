import MainContainer from './view/MainContainer.mjs';

const onStart = () => Neo.app({
    mainView: MainContainer,
    name    : 'CovidHelix'
});

export {onStart as onStart};