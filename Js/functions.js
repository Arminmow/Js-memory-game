export default {

    randomOddNumber(max) {

        const random = Math.floor(Math.random() * (max - 1)) + 1;

        if (random % 2 !== 0) {
            return random + 1;
        }

        return random;
    }
}