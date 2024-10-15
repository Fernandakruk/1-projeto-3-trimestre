const getsCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}
export {getsCSS}