export default {
    desenhaCircuferencia(p1, p2, p3) {
        console.log("circuferencia", p1, p2, p3);
        const {
            a,
            b
        } = this.expressaoReta(p1, p2);
        const [ap, bp] = this.retaPerpendicular(a, b, p3.x, p3.y);
        const [x, y] = this.intersecaoRetas({
            a,
            b
        }, {
            a: ap,
            b: bp
        });
        const h = this.calcularDistanceEntrePontos(p3, {
            x,
            y
        });
        const base = this.calcularDistanceEntrePontos(p1, p2);
        const area = h * base;
        const radius = Math.sqrt(area / Math.PI);
        this.setState(state => ({
            ...state,
            radius
        }));
    },

    calcularDistanceEntrePontos(p1, p2) {
        return Math.sqrt(Math.pow(p2.y - p1.y, 2) + Math.pow(p2.x - p1.x, 2));
    },

    retaPerpendicular(a, b, x, y) {
        const coefAngular = -1 / a;
        const constante = y + x / a;
        return [coefAngular, constante];
    },

    intersecaoRetas(d1, d2) {
        const x = (d2.b - d1.b) / (d1.a - d2.a);
        const y = d1.a * x + d1.b;
        return [x, y];
    },

    expressaoReta(p1, p2) {
        console.log("p1 & p2", p1, p2);
        const a = this.coeficiente(p1, p2);
        const b = this.constanteFuncao(p1.x, p1.y, a);
        console.log("a & b", a, b);
        return {
            a,
            b
        };
    },

    gerarQuartoPonto([p1, p2, p3]) {
        const x4 = p3.x - p2.x + p1.x;
        const y4 = p3.y - p2.y + p1.y;
        return [x4, y4];
    },

    constanteFuncao(x, y, c) {
        return y - c * x;
    },

    coeficiente(p1, p2) {
        if (p1.x !== p2.x) {
            return (p2.y - p1.y) / (p2.x - p1.x);
        } else {
            return null;
        }
        /*
        if (p2.x > p1.x) {
          return (p2.y - p1.y) / (p2.x - p1.x);
        } else if (p1.x > p2.x) {
          return (p1.y - p2.y) / (p1.x - p2.x);
        } else {
          throw new Error("ponto fora da reta");
        }
        */
    }
};