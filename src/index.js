
exports.min = function min (array) {
    if (array == false || array == null) {
        return 0;
    } else {
        array.sort((a, b) => {
            return a - b;
        });
        return array[0];
    }
}

exports.max = function max (array) {
    if (array == false || array == null) {
        return 0;
    } else {
        array.sort((a, b) => {
            return b - a;
        });
        return array[0];
    }
}

exports.avg = function avg (array) {
    if (array == false || array == null) {
        return 0;
    } else {
        let averageNum = array.reduce((total, amount, index, arr) => {
            total += amount;
            if (index === arr.length - 1) {
                return total / arr.length;
            } else {
                return total;
            }

        });
        return averageNum;
    }
}
