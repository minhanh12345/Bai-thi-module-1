function findNguyenAm(arr) {

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'a' ||
            arr[i] == 'o' ||
            arr[i] == 'e' ||
            arr[i] == 'u' ||
            arr[i] == 'i') {
            count++;
        }


    }
    if (count == 0) {
        return false;
    } else {
        return count;
    }

}
arr=['a','y','f']
document.write(findNguyenAm(arr))