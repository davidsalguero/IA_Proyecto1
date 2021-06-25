const express = require('express')
const app = express()
app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
    const { turno, estado } = req.query;
    try {
        if (estado.length = 64) {
            let array = new Array(8);
            for (let i = 0; i < 8; i++) {
                array[i] = new Array(8);
            }

            console.log("Turno: " + (turno === '1' ? "Blanco" : "Negro"));
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    array[i][j] = estado[(8 * i) + j]
                }
            }
            console.log(array);
            var x = 0;
            var y = 0;
            var movimientos = 0;
            var direccion = "";
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    if (array[i][j] == turno) {
                        /* Buscar Abajo */
                        var temp_movimientos = 0;
                        for (let t = i + 1; t < 8; t++) {
                            if (array[t][j] == 2) {
                                if (temp_movimientos > movimientos) {
                                    movimientos = temp_movimientos;
                                    x = t;
                                    y = j;
                                    direccion = "abajo";
                                }
                                break;
                            } else if (array[t][j] != turno) {
                                temp_movimientos++;
                            } else {
                                break;
                            }
                        }
                        /* Buscar Arriba */
                        var temp_movimientos = 0;
                        for (let t = i - 1; t >= 0; t--) {
                            if (array[t][j] == 2) {
                                if (temp_movimientos > movimientos) {
                                    movimientos = temp_movimientos;
                                    x = t;
                                    y = j;
                                    direccion = "arriba";
                                }
                                break;
                            } else if (array[t][j] != turno) {
                                temp_movimientos++;
                            } else {
                                break;
                            }
                        }
                        /* Buscar Derecha */
                        var temp_movimientos = 0;
                        for (let t = j + 1; t < 8; t++) {
                            if (array[i][t] == 2) {
                                if (temp_movimientos > movimientos) {
                                    movimientos = temp_movimientos;
                                    x = i;
                                    y = t;
                                    direccion = "derecha";
                                }
                                break;
                            } else if (array[i][t] != turno) {
                                temp_movimientos++;
                            } else {
                                break;
                            }
                        }
                        /* Buscar Izquierda */
                        var temp_movimientos = 0;
                        for (let t = j - 1; t >= 0; t--) {
                            if (array[i][t] == 2) {
                                if (temp_movimientos > movimientos) {
                                    movimientos = temp_movimientos;
                                    x = i;
                                    y = t;
                                    direccion = "izquierda";
                                }
                                break;
                            } else if (array[i][t] != turno) {
                                temp_movimientos++;
                            } else {
                                break;
                            }
                        }
                        /* Buscar Diagonal Abajo Derecha */
                        var temp_movimientos = 0;
                        var k = j + 1;
                        var t = i + 1;
                        while (t < 8 && k < 8) {
                            if (array[t][k] == 2) {
                                if (temp_movimientos > movimientos) {
                                    movimientos = temp_movimientos;
                                    x = t;
                                    y = k;
                                    direccion = "abajo derecha";
                                }
                                break;
                            } else if (array[t][k] != turno) {
                                temp_movimientos++;
                            } else {
                                break;
                            }
                            k++;
                            t++;
                        }
                        /* Buscar Diagonal Abajo Izquierda */
                        var temp_movimientos = 0;
                        var k = j - 1;
                        var t = i + 1;
                        while (t < 8 && k >= 0) {
                            if (array[t][k] == 2) {
                                if (temp_movimientos > movimientos) {
                                    movimientos = temp_movimientos;
                                    x = t;
                                    y = k;
                                    direccion = "abajo izquierda";
                                }
                                break;
                            } else if (array[t][k] != turno) {
                                temp_movimientos++;
                            } else {
                                break;
                            }
                            k--;
                            t++;
                        }
                        /* Buscar Diagonal Arriba Derecha */
                        var temp_movimientos = 0;
                        var k = j + 1;
                        var t = i - 1;
                        while (t >= 0 && k < 8) {
                            if (array[t][k] == 2) {
                                if (temp_movimientos > movimientos) {
                                    movimientos = temp_movimientos;
                                    x = t;
                                    y = k;
                                    direccion = "arriba derecha";
                                }
                                break;
                            } else if (array[t][k] != turno) {
                                temp_movimientos++;
                            } else {
                                break;
                            }
                            k++;
                            t--;
                        }
                        /* Buscar Diagonal Arriba Izquierda */
                        var temp_movimientos = 0;
                        var k = j - 1;
                        var t = i - 1;
                        while (t >= 0 && k >= 0) {
                            if (array[t][k] == 2) {
                                if (temp_movimientos > movimientos) {
                                    movimientos = temp_movimientos;
                                    x = t;
                                    y = k;
                                    direccion = "arriba izquierda";
                                }
                                break;
                            } else if (array[t][k] != turno) {
                                temp_movimientos++;
                            } else {
                                break;
                            }
                            k--;
                            t--;
                        }
                    }
                }
            }
            console.log("Piezas comidas:" + movimientos);
            console.log(x + "," + y);
            console.log(direccion);

            res.send(x + "" + y);
        } else {
            res.send("Matriz incorrecta")
        }
    } catch (error) {
        res.send('Error en la ejecución')
    }
});

app.listen(app.get('port'), () => console.log(`Example app listening at http://localhost:${app.get('port')}`));