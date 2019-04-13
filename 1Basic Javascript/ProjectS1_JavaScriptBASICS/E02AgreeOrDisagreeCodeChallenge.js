const agreeOrDisagree = (first, second) => {
    if (first === second) {
        return 'You agree!'
    } else {
        return 'You disagree!'
    }
}
console.log(agreeOrDisagree("yep", "yep"))
