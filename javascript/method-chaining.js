/**
 * Cal.add()
 * .mul()
 * .sub()
 */

var Cal = {
    value: 0,
    add: function (a, c) {
        this.value += a;
        if (typeof c === 'function') {
            c(this.value);
        }
        return this;
    },
    sub: function (a, c) {
        this.value -= a;
        if (typeof c === 'function') {
            c(this.value);
        }
        return this;
    },
    mul: function (a, c) {
        this.value *= a;
        if (typeof c === 'function') {
            c(this.value);
        }
        return this;
    },
    div: function (a, c) {
        this.value /= a;
        if (typeof c === 'function') {
            c(this.value);
        }
        return this;
    },
    then: function (c) {
        if (typeof c === 'function') {
            c(this.value);
        }
        return this;
    },
};

Cal.add(4)
    .sub(2)
    .sub(2)
    .mul(6)
    .add(5)
    .then(function (val) {
        console.log(val);
    });

/**
* constructor function style
* new Maths().add()
* .mul()
* .sub()
*/

function Maths() {
    this.value = 0;
    this.add = function (a, c) {
        this.value += a;
        if (typeof c === 'function') {
            c(this.value);
        }
        return this;
    };
    this.sub = function (a, c) {
        this.value -= a;
        if (typeof c === 'function') {
            c(this.value);
        }
        return this;
    };
    this.mul = function (a, c) {
        this.value *= a;
        if (typeof c === 'function') {
            c(this.value);
        }
        return this;
    };
    this.div = function (a, c) {
        this.value /= a;
        if (typeof c === 'function') {
            c(this.value);
        }
        return this;
    };
    this.then = function (c) {
        if (typeof c === 'function') {
            c(this.value);
        }
        return this;
    };
}

new Maths()
    .add(4)
    .sub(2)
    .mul(6)
    .add(5)
    .sub(2).then(function (val) {
        console.log(val);
    });


/**
* prototype function style
* new MathsPrototype().add()
* .mul()
* .sub()
*/

function MathsPrototype() {
    this.value = 0;
}
MathsPrototype.prototype.add = function (a, c) {
    this.value += a;
    if (typeof c === 'function') {
        c(this.value);
    }
    return this;
};
MathsPrototype.prototype.sub = function (a, c) {
    this.value -= a;
    if (typeof c === 'function') {
        c(this.value);
    }
    return this;
};
MathsPrototype.prototype.mul = function (a, c) {
    this.value *= a;
    if (typeof c === 'function') {
        c(this.value);
    }
    return this;
};
MathsPrototype.prototype.div = function (a, c) {
    this.value /= a;
    if (typeof c === 'function') {
        c(this.value);
    }
    return this;
};
MathsPrototype.prototype.then = function (c) {
    if (typeof c === 'function') {
        c(this.value);
    }
    return this;
};

new MathsPrototype()
    .add(4)
    .sub(2)
    .mul(6)
    .add(5)
    .then(function (val) {
        console.log(val);
    });
