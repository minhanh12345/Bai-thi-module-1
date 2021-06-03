function findIndex(arr, a) {
    let kq;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == a) {
            kq = 'so do co nam trong mang' + 'vi tri la ' + i
            break
        } else {
            kq = 'so do ko co trong mang'
        }
    }


    return kq
}

arr = [2, 5, 6, 3, 7, 9]
document.write(findIndex(arr, 10))