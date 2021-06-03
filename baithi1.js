function hamBac1(a, b) {
    let kq
    if (a == 0 && b == 0) {
        kq = 'PTVSN'
    } else if (a == 0 && b != 0) {
        kq = 'PTVN'
    } else {
        kq = -b / a
    }
    return kq
}

document.write(hamBac1(3, 0))